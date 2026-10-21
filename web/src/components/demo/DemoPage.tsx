import { useEffect, useRef, useState, type ComponentType, type MouseEvent } from 'react'
import { BackgroundBeams } from '../ui/background-beams.tsx'
import { Spotlight } from '../ui/spotlight.tsx'
import { demoTemplates, isDemoId, templates, type DemoId } from '../landing/catalog.ts'
import { useReducedMotion } from '../../lib/use-reduced-motion.ts'
import { cn } from '../../lib/utils.ts'
import type { DemoProps } from './DemoCard.tsx'
import { GiftDemo } from './GiftDemo.tsx'
import { GridDemo } from './GridDemo.tsx'
import { MemoryDemo } from './MemoryDemo.tsx'
import { QuizDemo } from './QuizDemo.tsx'
import { RaspadinhaDemo } from './RaspadinhaDemo.tsx'
import { RoletaDemo } from './RoletaDemo.tsx'
import { SlotDemo } from './SlotDemo.tsx'

const exampleHref = 'reference/calais/index.html'

const views: Record<DemoId, ComponentType<DemoProps>> = {
  raspadinha: RaspadinhaDemo,
  roleta: RoletaDemo,
  caixa: GiftDemo,
  quiz: QuizDemo,
  memoria: MemoryDemo,
  grade: GridDemo,
  slot: SlotDemo,
}

function serialFor(id: DemoId) {
  const number = templates.findIndex((template) => template.id === id) + 1
  return `Nº ${String(number).padStart(3, '0')}`
}

function hashDemo(): DemoId {
  const id = window.location.hash.slice(1)
  return isDemoId(id) ? id : 'raspadinha'
}

function useActiveDemo() {
  const [active, setActive] = useState<DemoId>(hashDemo)

  useEffect(() => {
    let frame = 0
    const sync = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const line = window.scrollY + 180
        let current: DemoId = 'raspadinha'
        for (const template of demoTemplates) {
          const element = document.getElementById(template.id)
          if (!element) continue
          const top = element.getBoundingClientRect().top + window.scrollY
          if (top <= line) current = template.id
        }
        setActive((previous) => (previous === current ? previous : current))
      })
    }
    sync()
    window.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  return active
}

export function DemoPage() {
  const active = useActiveDemo()
  const reduced = useReducedMotion()
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!isDemoId(id)) return
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const chip = list.querySelector(`[data-chip="${active}"]`)
    if (!(chip instanceof HTMLElement)) return
    const left = chip.offsetLeft - list.clientWidth / 2 + chip.clientWidth / 2
    list.scrollTo({ left: Math.max(0, left), behavior: reduced ? 'auto' : 'smooth' })
  }, [active, reduced])

  function focusSection(event: MouseEvent<HTMLAnchorElement>, id: DemoId) {
    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return
    window.requestAnimationFrame(() => {
      document.getElementById(`${id}-titulo`)?.focus()
    })
  }

  return (
    <div className="min-h-screen bg-[#140e09] text-[#f4ead8]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-[#f4ead8] focus:px-4 focus:py-2 focus:text-[#140e09]"
      >
        Ir para o conteúdo
      </a>
      <div className="sticky top-0 z-40 border-b border-[#f4ead8]/10 bg-[#140e09]/90 backdrop-blur-md">
        <header>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4">
            <a href="index.html" className="font-display text-2xl tracking-tight">
              Raspa
            </a>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[#f4ead8]/75">
              <a href="index.html" className="hover:text-[#f4ead8]">
                Início
              </a>
              <a href="index.html#como-funciona" className="hover:text-[#f4ead8]">
                Como funciona
              </a>
              <a href="index.html#plano" className="hover:text-[#f4ead8]">
                Plano
              </a>
              <a href={exampleHref} className="hover:text-[#f4ead8]">
                Exemplo Calais
              </a>
            </nav>
          </div>
        </header>
        <nav aria-label="Modelos" id="modelos">
          <ul
            ref={listRef}
            className="relative mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none]"
          >
            {demoTemplates.map((template) => (
              <li key={template.id}>
                <a
                  href={`#${template.id}`}
                  data-chip={template.id}
                  aria-current={active === template.id ? 'location' : undefined}
                  onClick={(event) => focusSection(event, template.id)}
                  className={cn(
                    'inline-flex rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e3b15a]',
                    active === template.id
                      ? 'bg-[#f4ead8] text-[#140e09]'
                      : 'text-[#f4ead8]/80 ring-1 ring-[#f4ead8]/20 hover:text-[#f4ead8]',
                  )}
                >
                  {template.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main id="conteudo">
        <section className="relative overflow-hidden pt-16 pb-14">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#e3b15a" />
          <BackgroundBeams className="opacity-70" />
          <div className="relative z-10 mx-auto max-w-3xl px-5">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#e3b15a] uppercase">Demonstrações</p>
            <h1 className="font-display mt-5 max-w-2xl text-5xl leading-[0.95] text-balance sm:text-6xl">
              Sete modelos para abrir no celular.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#f4ead8]/75">
              Raspadinha, roleta, caixa de presente, quiz, memória, grade da sorte e slot.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#raspadinha"
                className="rounded-full bg-[#ff4d2e] px-5 py-3 text-sm font-semibold text-[#1a0b07] transition hover:bg-[#ff6a50]"
              >
                Começar pela raspadinha
              </a>
              <a
                href="index.html"
                className="rounded-full border border-[#f4ead8]/25 px-5 py-3 text-sm font-semibold text-[#f4ead8] transition hover:border-[#f4ead8]/60"
              >
                Voltar ao início
              </a>
            </div>
          </div>
        </section>

        {demoTemplates.map((template) => {
          const View = views[template.id]
          return (
            <section
              key={template.id}
              id={template.id}
              className="scroll-mt-40 border-t border-[#f4ead8]/10 py-16"
            >
              <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs font-semibold tracking-[0.22em] text-[#e3b15a] uppercase">
                    {template.title}
                  </p>
                  <h2
                    id={`${template.id}-titulo`}
                    tabIndex={-1}
                    className="font-display mt-3 scroll-mt-40 text-4xl outline-none sm:text-5xl"
                  >
                    {template.name}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#f4ead8]/75">{template.body}</p>
                  <p className="mt-4 text-[#f4ead8]/55">{template.quote}</p>
                </div>
                <View serial={serialFor(template.id)} />
              </div>
            </section>
          )
        })}
      </main>

      <footer className="border-t border-[#f4ead8]/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-sm text-[#f4ead8]/55">
          <p className="font-display text-xl text-[#f4ead8]">Raspa</p>
          <a href="index.html" className="hover:text-[#f4ead8]">
            Voltar ao início
          </a>
        </div>
      </footer>
    </div>
  )
}
