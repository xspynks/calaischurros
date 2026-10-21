import { useState } from 'react'
import { ScratchCover } from '../scratch-cover.tsx'

export function ScratchDemo() {
  const [revealed, setRevealed] = useState(false)

  return (
    <figure className="relative mx-auto w-full max-w-[440px]">
      <div className="rounded-[28px] bg-[#f4ead8] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between px-2 pt-1 pb-3 text-[#140e09]">
          <p className="font-display text-lg">Raspa</p>
          <p className="text-[11px] tracking-[0.18em] uppercase">Nº 001</p>
        </div>
        <div className="relative aspect-[5/3] overflow-hidden rounded-[20px] bg-[#fffaf1]">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-[#140e09]">
            <p className="text-xs tracking-[0.22em] text-[#ff4d2e] uppercase">Você ganhou</p>
            <p className="font-display mt-2 text-4xl leading-none sm:text-5xl">uma página</p>
            <p className="mt-2 text-sm">com a sua marca</p>
          </div>
          <ScratchCover
            revealed={revealed}
            onReveal={() => setRevealed(true)}
            label="Demonstração de raspadinha. Raspe a cobertura para revelar."
          />
        </div>
        <figcaption className="flex items-center justify-between gap-3 px-2 pt-3 pb-1 text-sm text-[#140e09]/70">
          <span>Demonstração. Isto não é um cupom.</span>
          {revealed ? (
            <button type="button" className="font-semibold text-[#140e09] underline" onClick={() => setRevealed(false)}>
              Raspar de novo
            </button>
          ) : (
            <button type="button" className="font-semibold text-[#140e09] underline" onClick={() => setRevealed(true)}>
              Revelar
            </button>
          )}
        </figcaption>
      </div>
    </figure>
  )
}
