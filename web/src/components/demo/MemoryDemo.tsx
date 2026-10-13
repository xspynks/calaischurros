import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/utils.ts'
import { useReducedMotion } from '../../lib/use-reduced-motion.ts'
import { shuffle } from './demo-motion.ts'
import { DemoAction, DemoCard, demoFocus, type DemoProps } from './DemoCard.tsx'

const PAIRS = ['Página', 'Link', 'Loja'] as const

type MemoryCard = {
  id: string
  label: string
  up: boolean
  matched: boolean
}

function createDeck() {
  const deck: MemoryCard[] = PAIRS.flatMap((label) => [
    { id: `${label}-1`, label, up: false, matched: false },
    { id: `${label}-2`, label, up: false, matched: false },
  ])
  return shuffle(deck)
}

export function MemoryDemo({ serial }: DemoProps) {
  const reduced = useReducedMotion()
  const [cards, setCards] = useState(createDeck)
  const cardsRef = useRef(cards)
  const lockRef = useRef(false)
  const timeoutRef = useRef<number | null>(null)
  const done = cards.every((card) => card.matched)

  useEffect(() => {
    cardsRef.current = cards
  }, [cards])

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  function reset() {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = null
    lockRef.current = false
    setCards(createDeck())
  }

  function flip(id: string) {
    if (lockRef.current) return
    const current = cardsRef.current
    const card = current.find((item) => item.id === id)
    if (!card || card.up || card.matched) return
    if (current.filter((item) => item.up && !item.matched).length >= 2) return

    const next = current.map((item) => (item.id === id ? { ...item, up: true } : item))
    const opened = next.filter((item) => item.up && !item.matched)
    if (opened.length < 2) {
      setCards(next)
      return
    }

    const [first, second] = opened
    if (first && second && first.label === second.label) {
      setCards(next.map((item) => (item.up && !item.matched ? { ...item, matched: true } : item)))
      return
    }

    setCards(next)
    lockRef.current = true
    timeoutRef.current = window.setTimeout(() => {
      lockRef.current = false
      timeoutRef.current = null
      setCards((latest) => latest.map((item) => (item.up && !item.matched ? { ...item, up: false } : item)))
    }, 700)
  }

  return (
    <DemoCard serial={serial} action={<DemoAction onClick={reset}>Embaralhar</DemoAction>}>
      <div className="p-4">
        <ul className="grid grid-cols-3 gap-2">
          {cards.map((card) => (
            <li key={card.id}>
              <button
                type="button"
                onClick={() => flip(card.id)}
                disabled={card.matched}
                aria-label={card.up ? card.label : 'Carta fechada'}
                className={cn(demoFocus, 'relative h-24 w-full [perspective:800px] disabled:opacity-100')}
              >
                <span
                  aria-hidden="true"
                  className="relative block h-full w-full"
                  style={{
                    transform: card.up ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transformStyle: 'preserve-3d',
                    transition: reduced ? 'none' : 'transform 500ms ease',
                  }}
                >
                  <span
                    className="absolute inset-0 flex items-center justify-center rounded-2xl bg-[#e3b15a]"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span className="block h-4 w-4 rotate-45 bg-[#140e09]" />
                  </span>
                  <span
                    className={cn(
                      'absolute inset-0 flex items-center justify-center rounded-2xl font-display text-lg',
                      card.matched ? 'bg-[#ff4d2e] text-[#1a0b07]' : 'bg-white text-[#140e09]',
                    )}
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    {card.label}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-sm font-semibold" aria-live="polite">
          {done ? 'Você ganhou uma página.' : 'Vire duas cartas.'}
        </p>
      </div>
    </DemoCard>
  )
}
