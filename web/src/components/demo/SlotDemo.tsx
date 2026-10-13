import { useEffect, useRef, useState, type TransitionEvent } from 'react'
import { useReducedMotion } from '../../lib/use-reduced-motion.ts'
import { slotTarget } from './demo-motion.ts'
import { DemoAction, DemoCard, demoFocus, type DemoProps } from './DemoCard.tsx'

const SYMBOLS = ['Página', 'Link', 'Loja', 'Cupom'] as const
const REEL_MS = [1400, 1900, 2500]
const ITEM_PX = 72
const EASING = 'cubic-bezier(0.12, 0.7, 0.12, 1)'

export function SlotDemo({ serial }: DemoProps) {
  const reduced = useReducedMotion()
  const pending = useRef<string | null>(null)
  const [offsets, setOffsets] = useState([1, 2, 3])
  const [phase, setPhase] = useState<'ready' | 'spinning' | 'done'>('ready')
  const [label, setLabel] = useState<string | null>(null)
  const spinning = phase === 'spinning'

  useEffect(() => {
    if (!spinning || reduced) return
    const timeout = window.setTimeout(() => {
      setLabel(pending.current)
      setPhase('done')
    }, 2900)
    return () => window.clearTimeout(timeout)
  }, [reduced, spinning])

  function spin() {
    if (spinning) return
    const symbol = Math.floor(Math.random() * SYMBOLS.length)
    pending.current = SYMBOLS[symbol] ?? null
    setLabel(null)
    setPhase('spinning')
    setOffsets((current) => current.map((offset) => slotTarget(offset, symbol, SYMBOLS.length)))
    if (reduced) {
      setLabel(pending.current)
      setPhase('done')
    }
  }

  function finish(event: TransitionEvent<HTMLDivElement>) {
    if (event.propertyName !== 'transform' || event.target !== event.currentTarget) return
    setLabel(pending.current)
    setPhase('done')
  }

  const message = spinning ? 'Girando…' : label ? `Parou em ${label}.` : 'Toque em girar.'

  return (
    <DemoCard
      serial={serial}
      action={
        <DemoAction onClick={spin} disabled={spinning}>
          {spinning ? 'Girando…' : phase === 'done' ? 'Girar de novo' : 'Girar'}
        </DemoAction>
      }
    >
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 p-4">
        <button
          type="button"
          onClick={spin}
          disabled={spinning}
          aria-label={spinning ? 'Girando o slot' : 'Girar o slot'}
          className={`${demoFocus} grid w-full grid-cols-3 gap-2 rounded-2xl bg-[#140e09] p-3 disabled:cursor-wait`}
        >
          {offsets.map((offset, index) => (
            <span key={index} className="block overflow-hidden rounded-xl bg-[#24180f]" style={{ height: ITEM_PX }}>
              <span
                className="block"
                style={{
                  transform: `translateY(-${offset * ITEM_PX}px)`,
                  transition: reduced ? 'none' : `transform ${REEL_MS[index]}ms ${EASING}`,
                }}
                onTransitionEnd={index === offsets.length - 1 ? finish : undefined}
              >
                {Array.from({ length: offset + 1 }, (_, item) => (
                  <span
                    key={item}
                    className="flex items-center justify-center px-1 text-center font-display text-sm font-semibold tracking-wide text-[#e3b15a] uppercase"
                    style={{ height: ITEM_PX }}
                    aria-hidden="true"
                  >
                    {SYMBOLS[item % SYMBOLS.length]}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </button>
        <p className="min-h-6 text-center text-sm font-semibold" aria-live="polite">
          {message}
        </p>
      </div>
    </DemoCard>
  )
}
