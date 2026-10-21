import { useState } from 'react'
import { ScratchCover } from '../scratch-cover.tsx'
import { DemoAction, DemoCard, PrizeLockup, type DemoProps } from './DemoCard.tsx'

export function RaspadinhaDemo({ serial }: DemoProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <DemoCard
      serial={serial}
      action={
        <DemoAction onClick={() => setRevealed((value) => !value)}>
          {revealed ? 'Raspar de novo' : 'Revelar'}
        </DemoAction>
      }
    >
      <div className="relative aspect-[5/3]">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <PrizeLockup />
        </div>
        <ScratchCover
          revealed={revealed}
          onReveal={() => setRevealed(true)}
          label="Demonstração de raspadinha. Raspe a cobertura para revelar."
        />
      </div>
    </DemoCard>
  )
}
