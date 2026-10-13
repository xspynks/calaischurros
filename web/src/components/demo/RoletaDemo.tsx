import { useEffect, useRef, useState, type TransitionEvent } from 'react'
import { useReducedMotion } from '../../lib/use-reduced-motion.ts'
import { pieSlice, wheelRotation } from './demo-motion.ts'
import { DemoAction, DemoCard, demoFocus, type DemoProps } from './DemoCard.tsx'

const SPIN_MS = 3600
const EASING = 'cubic-bezier(0.12, 0.68, 0.08, 1)'

const segments = [
  { label: 'Página', detail: 'Uma página com a sua marca.', fill: '#ff4d2e', ink: '#1a0b07' },
  { label: 'Link', detail: 'Um link pronto para compartilhar.', fill: '#e3b15a', ink: '#140e09' },
  { label: 'Contato', detail: 'O contato de quem participou.', fill: '#3a2a22', ink: '#f4ead8' },
  { label: 'Loja', detail: 'Um convite para visitar a loja.', fill: '#fffaf1', ink: '#140e09' },
] as const

const slice = 360 / segments.length

export function RoletaDemo({ serial }: DemoProps) {
  const reduced = useReducedMotion()
  const pending = useRef<number | null>(null)
  const [rotation, setRotation] = useState(-45)
  const [spinning, setSpinning] = useState(false)
  const [winner, setWinner] = useState<number | null>(null)
  const motion = reduced ? 'none' : `transform ${SPIN_MS}ms ${EASING}`

  useEffect(() => {
    if (!spinning || reduced) return
    const timeout = window.setTimeout(() => {
      setSpinning(false)
      if (pending.current !== null) setWinner(pending.current)
    }, SPIN_MS + 500)
    return () => window.clearTimeout(timeout)
  }, [reduced, spinning])

  function finish(event: TransitionEvent<HTMLDivElement>) {
    if (event.propertyName !== 'transform' || event.target !== event.currentTarget) return
    setSpinning(false)
    if (pending.current !== null) setWinner(pending.current)
  }

  function spin() {
    if (spinning) return
    const index = Math.floor(Math.random() * segments.length)
    pending.current = index
    setWinner(null)
    setSpinning(true)
    setRotation((current) => wheelRotation(current, index, segments.length))
    if (reduced) {
      setSpinning(false)
      setWinner(index)
    }
  }

  const landed = winner === null ? null : segments[winner]

  return (
    <DemoCard
      serial={serial}
      stageClassName="bg-[#1d140e] text-[#f4ead8]"
      action={
        <DemoAction onClick={spin} disabled={spinning}>
          {spinning ? 'Girando…' : winner === null ? 'Girar' : 'Girar de novo'}
        </DemoAction>
      }
    >
      <div className="flex flex-col items-center px-4 py-6">
        <div className="relative aspect-square w-full max-w-[280px]">
          <button
            type="button"
            onClick={spin}
            disabled={spinning}
            aria-label={spinning ? 'Girando a roleta' : 'Girar a roleta'}
            className={`${demoFocus} block h-full w-full rounded-full disabled:cursor-wait`}
          >
            <div
              className="h-full w-full"
              style={{ transform: `rotate(${rotation}deg)`, transition: motion }}
              onTransitionEnd={finish}
            >
              <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
                {segments.map((segment, index) => {
                  const start = -90 + index * slice
                  return <path key={segment.label} d={pieSlice(100, 100, 96, start, start + slice)} fill={segment.fill} />
                })}
              </svg>
            </div>
          </button>
          <ul aria-label="Prêmios na roleta" className="pointer-events-none absolute inset-0">
            {segments.map((segment, index) => {
              const mid = -90 + (index + 0.5) * slice
              const orbit = mid + rotation + 90
              return (
                <li
                  key={segment.label}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${orbit}deg)`, transition: motion }}
                >
                  <span
                    className="absolute top-8 left-1/2 w-20 text-center font-display text-sm font-semibold"
                    style={{
                      color: segment.ink,
                      transform: `translateX(-50%) rotate(${-orbit}deg)`,
                      transition: motion,
                    }}
                  >
                    {segment.label}
                  </span>
                </li>
              )
            })}
          </ul>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#140e09] text-[10px] font-semibold tracking-[0.16em] text-[#f4ead8] ring-4 ring-[#f4ead8]">
              RASPA
            </div>
          </div>
          <div className="pointer-events-none absolute top-0 left-1/2 z-20 -translate-x-1/2">
            <svg viewBox="0 0 20 16" className="h-5 w-5" aria-hidden="true">
              <path d="M10 15 L1.5 1.5 H18.5 Z" fill="#f4ead8" stroke="#140e09" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <p className="mt-4 min-h-6 text-center text-sm" aria-live="polite">
          {spinning ? 'Girando…' : landed ? landed.detail : 'Toque em girar.'}
        </p>
      </div>
    </DemoCard>
  )
}
