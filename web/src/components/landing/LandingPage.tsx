import { BackgroundBeams } from '../ui/background-beams.tsx'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards.tsx'
import { Spotlight } from '../ui/spotlight.tsx'
import { steps, templates } from './catalog.ts'
import { ScratchDemo } from './ScratchDemo.tsx'

const exampleHref = 'reference/calais/index.html'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#140e09] text-[#f4ead8]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-[#f4ead8] focus:px-4 focus:py-2 focus:text-[#140e09]"
      >
        Ir para o conteúdo
      </a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#f4ead8]/10 bg-[#140e09]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4">
          <a href="#topo" className="font-display text-2xl tracking-tight">
            Raspa
          </a>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[#f4ead8]/75">
            <a href="#modelos" className="hover:text-[#f4ead8]">
              Modelos
            </a>
            <a href="#como-funciona" className="hover:text-[#f4ead8]">
              Como funciona
            </a>
            <a href="#plano" className="hover:text-[#f4ead8]">
              Plano
            </a>
            <a href={exampleHref} className="hover:text-[#f4ead8]">
              Exemplo Calais
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section id="topo" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#e3b15a" />
          <BackgroundBeams className="opacity-70" />
          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#e3b15a] uppercase">
                Marca branca para lojas e marketing
              </p>
              <h1 className="font-display mt-5 max-w-xl text-5xl leading-[0.95] text-balance sm:text-7xl">
                A promoção cabe numa página.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#f4ead8]/75">
                Escolha uma raspadinha, uma roleta ou outro modelo. Coloque a sua marca, publique um
                link e receba o contato de quem jogou.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#modelos"
                  className="rounded-full bg-[#ff4d2e] px-5 py-3 text-sm font-semibold text-[#1a0b07] transition hover:bg-[#ff6a50]"
                >
                  Ver os modelos
                </a>
                <a
                  href={exampleHref}
                  className="rounded-full border border-[#f4ead8]/25 px-5 py-3 text-sm font-semibold text-[#f4ead8] transition hover:border-[#f4ead8]/60"
                >
                  Abrir o exemplo Calais
                </a>
              </div>
            </div>
            <ScratchDemo />
          </div>
        </section>

        <section aria-hidden="true" className="border-y border-[#f4ead8]/10 py-4">
          <InfiniteMovingCards items={[...templates]} speed="normal" />
        </section>

        <section id="modelos" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#e3b15a] uppercase">Catálogo</p>
            <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
              Sete modelos. Dois no primeiro produto.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#f4ead8]/70">
              Raspadinha e roleta abrem o produto. Os outros cinco ficam visíveis para a sequência,
              um modelo de cada vez.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <li
                key={template.name}
                className="rounded-3xl border border-[#f4ead8]/12 bg-[#1d140e] p-6"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[#e3b15a] uppercase">
                  {template.title}
                </p>
                <h3 className="font-display mt-3 text-3xl">{template.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#f4ead8]/70">{template.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="como-funciona" className="bg-[#f4ead8] text-[#140e09]">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#ff4d2e] uppercase">
              Como funciona
            </p>
            <h2 className="font-display mt-3 max-w-xl text-4xl leading-tight sm:text-5xl">
              Três passos até o link.
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <li key={step.number} className="rounded-3xl bg-[#140e09] p-6 text-[#f4ead8]">
                  <p className="font-display text-4xl text-[#e3b15a]">{step.number}</p>
                  <h3 className="font-display mt-6 text-3xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#f4ead8]/70">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="plano" className="mx-auto grid max-w-6xl gap-8 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-[#e3b15a]/40 bg-[#24180f] p-8">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#e3b15a] uppercase">Plano grátis</p>
            <p className="font-display mt-4 text-6xl">R$ 0</p>
            <p className="mt-3 text-lg">Uma campanha publicada por vez.</p>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-[#f4ead8]/75">
              <li>Rascunhos à vontade</li>
              <li>Cupom, mensagem ou evento no resultado</li>
              <li>Lista de contatos para baixar</li>
              <li>A mesma criação pela API</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              A página é da loja. As regras são as mesmas na API.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#f4ead8]/70">
              Quem usa o estúdio e quem integra pelo código publica a mesma campanha: um link, um
              resultado, e o contato de quem jogou. Cobrança, vários membros e domínio próprio ficam
              para depois.
            </p>
          </div>
        </section>

        <section id="comecar" className="border-t border-[#f4ead8]/10">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-20">
            <h2 className="font-display max-w-2xl text-4xl leading-tight sm:text-6xl">
              O estúdio é o próximo passo. O exemplo já está no ar.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-[#f4ead8]/70">
              Esta página apresenta o produto. A raspadinha da Calais Churros, que originou a ideia,
              continua disponível para abrir no celular.
            </p>
            <a
              href={exampleHref}
              className="rounded-full bg-[#f4ead8] px-5 py-3 text-sm font-semibold text-[#140e09]"
            >
              Abrir o exemplo Calais
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#f4ead8]/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-sm text-[#f4ead8]/55">
          <p className="font-display text-xl text-[#f4ead8]">Raspa</p>
          <p>Páginas promocionais para compartilhar.</p>
        </div>
      </footer>
    </div>
  )
}
