import { cn } from '../../lib/utils.ts'
import { useEffect, useState, type CSSProperties } from 'react'
import { useReducedMotion } from '../../lib/use-reduced-motion.ts'

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) {
  const [start, setStart] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setStart(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const duration = speed === 'fast' ? '28s' : speed === 'normal' ? '40s' : '80s'
  const animationDirection = direction === 'left' ? 'forwards' : 'reverse'

  return (
    <div
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]',
        className,
      )}
      style={
        {
          '--animation-duration': duration,
          '--animation-direction': animationDirection,
        } as CSSProperties
      }
    >
      <ul
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && !reduced && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {[...items, ...items].map((item, index) => (
          <li
            className="relative w-[280px] shrink-0 rounded-2xl border border-[#f4ead8]/15 bg-[#24180f] px-6 py-5 md:w-[340px]"
            key={`${item.name}-${index}`}
          >
            <p className="font-display text-2xl text-[#f4ead8]">{item.name}</p>
            <p className="mt-2 text-sm leading-6 text-[#f4ead8]/70">{item.quote}</p>
            <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-[#e3b15a] uppercase">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
