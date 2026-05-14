import { useState } from "react"
import PresentationStyles from "@/components/presentation/PresentationStyles"
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6 } from "@/components/presentation/PresentationSlides"
import PresentationNav from "@/components/presentation/PresentationNav"

const TOTAL_SLIDES = 6

export default function Presentation() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(TOTAL_SLIDES - 1, c + 1))

  return (
    <div style={{ background: "#0a0a1a", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", fontFamily: "'Montserrat', sans-serif" }}>
      <PresentationStyles />

      {current === 0 && <Slide1 />}
      {current === 1 && <Slide2 />}
      {current === 2 && <Slide3 />}
      {current === 3 && <Slide4 />}
      {current === 4 && <Slide5 />}
      {current === 5 && <Slide6 />}

      <PresentationNav
        current={current}
        total={TOTAL_SLIDES}
        onPrev={prev}
        onNext={next}
        onDot={setCurrent}
      />
    </div>
  )
}
