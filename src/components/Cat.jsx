import { useEffect, useRef, useState } from "react"

export function Cat() {
  const catRef = useRef(null)
  const [pupil, setPupil] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const move = (event) => {
      const cat = catRef.current
      if (!cat) return
      const rect = cat.getBoundingClientRect()
      const x = Math.min(72, Math.max(28, ((event.clientX - rect.left) / rect.width) * 100))
      const y = Math.min(68, Math.max(32, ((event.clientY - rect.top) / rect.height) * 100))
      setPupil({ x, y })
    }

    window.addEventListener("pointermove", move, { passive: true })
    return () => window.removeEventListener("pointermove", move)
  }, [])

  return (
    <div className="cat-stage" ref={catRef} aria-label="Interactive cat illustration">
      <div className="cat-tail"><span /></div>
      <div className="cat-body" />
      <div className="cat-head">
        <div className="cat-ears" />
        <div className="cat-eye left"><span style={{ left: `${pupil.x}%`, top: `${pupil.y}%` }} /></div>
        <div className="cat-eye right"><span style={{ left: `${pupil.x}%`, top: `${pupil.y}%` }} /></div>
        <div className="cat-nose" />
        <div className="cat-mouth left" />
        <div className="cat-mouth right" />
      </div>
    </div>
  )
}
