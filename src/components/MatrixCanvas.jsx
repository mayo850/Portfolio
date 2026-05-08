import { useEffect, useRef } from "react"

export function MatrixCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    const letters = "01{}[]<>/=+*constreactvite".split("")
    const fontSize = 16
    let columns = 0
    let drops = []
    let frame = 0
    let animationId = 0

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      columns = Math.ceil(window.innerWidth / fontSize)
      drops = Array.from({ length: columns }, () => Math.random() * window.innerHeight)
    }

    const draw = () => {
      frame += 1
      context.fillStyle = "rgba(8, 13, 26, 0.08)"
      context.fillRect(0, 0, window.innerWidth, window.innerHeight)
      context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
      context.fillStyle = "rgba(97, 218, 251, 0.58)"

      drops.forEach((drop, index) => {
        const text = letters[Math.floor(Math.random() * letters.length)]
        const x = index * fontSize
        const y = drop * fontSize
        context.fillText(text, x, y)
        drops[index] = y > window.innerHeight && Math.random() > 0.975 ? 0 : drop + 1
      })

      animationId = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      frame = 0
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />
}
