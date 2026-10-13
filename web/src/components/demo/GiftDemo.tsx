import { useState } from 'react'
import { useReducedMotion } from '../../lib/use-reduced-motion.ts'
import { DemoAction, DemoCard, PrizeLockup, demoFocus, type DemoProps } from './DemoCard.tsx'

export function GiftDemo({ serial }: DemoProps) {
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((value) => !value)
  }

  return (
    <DemoCard
      serial={serial}
      action={<DemoAction onClick={toggle}>{open ? 'Fechar' : 'Abrir'}</DemoAction>}
    >
      <div className="flex min-h-[360px] items-end justify-center px-6 pt-28 pb-10">
        <button
          type="button"
          onClick={toggle}
          aria-pressed={open}
          aria-label={open ? 'Fechar a caixa' : 'Abrir a caixa'}
          className={`${demoFocus} relative w-44`}
        >
          <span
            aria-hidden="true"
            className="absolute -top-7 left-1/2 z-10 block h-12 w-52 rounded-t-2xl bg-[#e3b15a] shadow-sm"
            style={{
              transform: open
                ? 'translateX(-50%) translateY(-2.75rem) rotate(-16deg)'
                : 'translateX(-50%)',
              transformOrigin: 'center bottom',
              transition: reduced ? 'none' : 'transform 700ms ease-out',
            }}
          >
            <span className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-[#ff4d2e]" />
            <svg viewBox="0 0 64 28" className="absolute -top-4 left-1/2 h-7 w-16 -translate-x-1/2">
              <path d="M32 16C24 2 6 6 12 18c6 4 14 2 20-2z" fill="#ff4d2e" />
              <path d="M32 16c8-14 26-10 20 2-6 4-14 2-20-2z" fill="#ff4d2e" />
              <circle cx="32" cy="16" r="4" fill="#e3b15a" />
            </svg>
          </span>
          <span className="relative flex h-36 items-center justify-center overflow-hidden rounded-b-2xl bg-[#ff4d2e] shadow-md">
            <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-[#e3b15a]" />
            {open ? (
              <span aria-hidden="true" className="relative z-10 rounded-xl bg-[#fffaf1] px-3 py-3">
                <PrizeLockup compact />
              </span>
            ) : null}
          </span>
        </button>
        <p className="sr-only" aria-live="polite">
          {open ? 'Você ganhou uma página com a sua marca.' : ''}
        </p>
      </div>
    </DemoCard>
  )
}
