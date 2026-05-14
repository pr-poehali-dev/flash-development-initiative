import Icon from "@/components/ui/icon"

interface PresentationNavProps {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
  onDot: (index: number) => void
}

export default function PresentationNav({ current, total, onPrev, onNext, onDot }: PresentationNavProps) {
  return (
    <>
      <div className="pres-nav">
        <button className="nav-btn" onClick={onPrev} disabled={current === 0}>
          <Icon name="ChevronLeft" size={20} />
        </button>
        <div className="nav-dots">
          {Array.from({ length: total }).map((_, i) => (
            <button key={i} className={`nav-dot ${i === current ? "active" : ""}`} onClick={() => onDot(i)} />
          ))}
        </div>
        <button className="nav-btn" onClick={onNext} disabled={current === total - 1}>
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>

      <div style={{ marginTop: 16, fontSize: 13, color: "rgba(255,255,255,0.25)" }}>
        {current + 1} / {total}
      </div>
    </>
  )
}
