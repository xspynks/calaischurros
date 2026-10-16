import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils.ts'

export const demoFocus =
  'cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d2e]'

export type DemoProps = {
  serial: string
}

export function DemoCard({
  serial,
  children,
  action,
  stageClassName,
}: {
  serial: string
  children: ReactNode
  action?: ReactNode
  stageClassName?: string
}) {
  return (
    <figure className="relative mx-auto w-full max-w-[440px]">
      <div className="rounded-[28px] bg-[#f4ead8] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between px-2 pt-1 pb-3 text-[#140e09]">
          <p className="font-display text-lg">Raspa</p>
          <p className="text-[11px] tracking-[0.18em] uppercase">{serial}</p>
        </div>
        <div className={cn('relative overflow-hidden rounded-[20px] bg-[#fffaf1] text-[#140e09]', stageClassName)}>
          {children}
        </div>
        <figcaption className="flex items-center justify-between gap-3 px-2 pt-3 pb-1 text-sm text-[#140e09]/70">
          <span className="min-w-0">Demonstração. Isto não é um cupom.</span>
          {action}
        </figcaption>
      </div>
    </figure>
  )
}

export function DemoAction({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        demoFocus,
        'shrink-0 font-semibold whitespace-nowrap text-[#140e09] underline decoration-[#140e09]/30 underline-offset-4 disabled:cursor-wait disabled:opacity-40',
        className,
      )}
    />
  )
}

export function PrizeLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="text-center">
      <p className="text-xs tracking-[0.22em] text-[#ff4d2e] uppercase">Você ganhou</p>
      <p className={cn('font-display mt-2 leading-none', compact ? 'text-3xl' : 'text-4xl sm:text-5xl')}>
        uma página
      </p>
      <p className="mt-2 text-sm text-[#140e09]/70">com a sua marca</p>
    </div>
  )
}
