import { useState } from 'react'
import { cn } from '../../lib/utils.ts'
import { DemoAction, DemoCard, demoFocus, type DemoProps } from './DemoCard.tsx'

const HOUSES = 9

function closedHouses() {
  return Array.from({ length: HOUSES }, () => false)
}

function randomHouse() {
  return Math.floor(Math.random() * HOUSES)
}

export function GridDemo({ serial }: DemoProps) {
  const [winner, setWinner] = useState(randomHouse)
  const [open, setOpen] = useState(closedHouses)
  const found = open[winner] === true

  function pick(index: number) {
    setOpen((current) => {
      if (current[index]) return current
      const next = current.slice()
      next[index] = true
      return next
    })
  }

  function reset() {
    setWinner(randomHouse())
    setOpen(closedHouses())
  }

  return (
    <DemoCard serial={serial} action={<DemoAction onClick={reset}>Nova grade</DemoAction>}>
      <div className="p-4">
        <ul className="grid grid-cols-3 gap-2" aria-label="Grade da sorte">
          {open.map((isOpen, index) => {
            const prize = index === winner
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => pick(index)}
                  aria-label={
                    isOpen
                      ? prize
                        ? `Casa ${index + 1}, prêmio`
                        : `Casa ${index + 1}, quase`
                      : `Casa ${index + 1}, fechada`
                  }
                  className={cn(
                    demoFocus,
                    'flex aspect-square w-full items-center justify-center rounded-2xl font-display',
                    isOpen
                      ? prize
                        ? 'bg-[#ff4d2e] text-sm font-semibold text-[#1a0b07]'
                        : 'bg-[#140e09]/8 text-sm font-semibold text-[#140e09]/55'
                      : 'bg-[#e3b15a] text-2xl text-[#140e09]',
                  )}
                >
                  <span aria-hidden="true">{isOpen ? (prize ? 'Página' : 'Quase') : index + 1}</span>
                </button>
              </li>
            )
          })}
        </ul>
        <p className="mt-4 text-center text-sm font-semibold" aria-live="polite">
          {found ? 'Você ganhou uma página.' : 'Escolha uma casa.'}
        </p>
      </div>
    </DemoCard>
  )
}
