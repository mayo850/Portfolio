import { useEffect, useMemo, useState } from "react"

export function useTypewriter(words, speed = 85, pause = 1200) {
  const values = useMemo(() => words.filter(Boolean), [words])
  const [wordIndex, setWordIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!values.length) return undefined

    const currentWord = values[wordIndex]
    const delay = deleting ? speed / 2 : letterIndex === currentWord.length ? pause : speed

    const timeout = window.setTimeout(() => {
      if (!deleting && letterIndex < currentWord.length) {
        setLetterIndex((index) => index + 1)
        return
      }

      if (!deleting && letterIndex === currentWord.length) {
        setDeleting(true)
        return
      }

      if (deleting && letterIndex > 0) {
        setLetterIndex((index) => index - 1)
        return
      }

      setDeleting(false)
      setWordIndex((index) => (index + 1) % values.length)
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [deleting, letterIndex, pause, speed, values, wordIndex])

  return values[wordIndex]?.slice(0, letterIndex) ?? ""
}
