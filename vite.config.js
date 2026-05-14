import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import fs from "node:fs"
import path from "node:path"

function classNameMangler() {
  const root = process.cwd()
  const stylesPath = path.join(root, "src", "styles.css")
  const srcPath = path.join(root, "src")

  const css = fs.existsSync(stylesPath) ? fs.readFileSync(stylesPath, "utf8") : ""
  const cssClasses = new Set([...css.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((match) => match[1]))

  const jsxClasses = new Set()
  const readSourceFiles = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        readSourceFiles(fullPath)
        continue
      }

      if (!/\.(jsx?|tsx?)$/.test(entry.name)) continue

      const source = fs.readFileSync(fullPath, "utf8")
      for (const match of source.matchAll(/className\s*=\s*(?:\{[^}]*\}|["'`][\s\S]*?["'`])/g)) {
        for (const token of match[0].matchAll(/[A-Za-z_][\w-]*/g)) {
          jsxClasses.add(token[0])
        }
      }
    }
  }

  if (fs.existsSync(srcPath)) readSourceFiles(srcPath)

  const shouldKeepReadable = (className) =>
    className.startsWith("bx") ||
    className.startsWith("bxl-") ||
    className.startsWith("bxs-")

  const classesToMangle = [...cssClasses]
    .filter((className) => jsxClasses.has(className))
    .filter((className) => !shouldKeepReadable(className))
    .sort((a, b) => b.length - a.length || a.localeCompare(b))

  const encode = (index) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let value = index
    let output = "_"

    do {
      output += alphabet[value % alphabet.length]
      value = Math.floor(value / alphabet.length) - 1
    } while (value >= 0)

    return output
  }

  const classMap = Object.fromEntries(classesToMangle.map((className, index) => [className, encode(index)]))
  const classPattern = new RegExp(`\\b(${classesToMangle.map(escapeRegExp).join("|")})\\b`, "g")

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }

  function replaceClassTokens(value) {
    if (!classesToMangle.length) return value
    return value.replace(classPattern, (className) => classMap[className] ?? className)
  }

  function replaceCssClassSelectors(code) {
    if (!classesToMangle.length) return code
    return code.replace(new RegExp(`\\.(${classesToMangle.map(escapeRegExp).join("|")})\\b`, "g"), (_, className) => `.${classMap[className] ?? className}`)
  }

  function replaceJsxClassNames(code) {
    if (!classesToMangle.length) return code

    const replaceQuotedValue = (value) =>
      value.replace(/(["'`])([^"'`]*)\1/g, (_, quote, content) => {
        return `${quote}${replaceClassTokens(content)}${quote}`
      })

    return code
      .replace(/className\s*=\s*(["'`][^"'`]*["'`])/g, (match, value) => {
        return match.replace(value, replaceQuotedValue(value))
      })
      .replace(/className\s*=\s*\{([^{}]*)\}/g, (match) => replaceQuotedValue(match))
  }

  return {
    name: "portfolio-class-name-mangler",
    apply: "build",
    enforce: "pre",
    transform(code, id) {
      if (id.endsWith("src/styles.css")) {
        return {
          code: replaceCssClassSelectors(code),
          map: null,
        }
      }

      if (/\.(jsx?|tsx?)$/.test(id) && id.includes(`${path.sep}src${path.sep}`)) {
        return {
          code: replaceJsxClassNames(code),
          map: null,
        }
      }

      return null
    },
  }
}

export default defineConfig({
  plugins: [react(), classNameMangler()],
  build: {
    minify: true,
    cssMinify: true,
    sourcemap: false,
  },
})
