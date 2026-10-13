import { useState } from 'react'
import { DemoAction, DemoCard, PrizeLockup, demoFocus, type DemoProps } from './DemoCard.tsx'

const questions = [
  {
    prompt: 'O que combina com a visita?',
    choices: ['Um doce', 'Um café'],
  },
  {
    prompt: 'Quando você aparece?',
    choices: ['Hoje', 'No fim de semana'],
  },
  {
    prompt: 'Posso te chamar na próxima?',
    choices: ['Pode', 'Agora não'],
  },
] as const

export function QuizDemo({ serial }: DemoProps) {
  const [step, setStep] = useState(0)
  const done = step >= questions.length
  const question = questions[step]

  return (
    <DemoCard
      serial={serial}
      action={
        done ? <DemoAction onClick={() => setStep(0)}>Começar de novo</DemoAction> : undefined
      }
    >
      <div className="flex min-h-[320px] flex-col justify-between p-6">
        <p className="sr-only" aria-live="polite">
          {done ? 'Você ganhou uma página com a sua marca.' : ''}
        </p>
        {done || !question ? (
          <div className="flex flex-1 items-center justify-center">
            <PrizeLockup />
          </div>
        ) : (
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#ff4d2e] uppercase">
              Pergunta {step + 1} de {questions.length}
            </p>
            <div className="mt-3 flex gap-1" aria-hidden="true">
              {questions.map((item, index) => (
                <span
                  key={item.prompt}
                  className={`h-1.5 flex-1 rounded-full ${index <= step ? 'bg-[#ff4d2e]' : 'bg-[#140e09]/15'}`}
                />
              ))}
            </div>
            <h3 className="font-display mt-6 text-3xl leading-tight">{question.prompt}</h3>
            <div className="mt-6 grid gap-2">
              {question.choices.map((choice) => (
                <button
                  key={choice}
                  type="button"
                  className={`${demoFocus} rounded-2xl border border-[#140e09]/15 bg-white px-4 py-3 text-left text-sm font-semibold`}
                  onClick={() => setStep((current) => current + 1)}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </DemoCard>
  )
}
