import { useEffect, useRef, useState } from 'react'

const REVEAL_AT = 0.45

function drawCover(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) return

  const { width, height } = canvas
  const gradient = context.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#6f6a63')
  gradient.addColorStop(0.42, '#d9d0c2')
  gradient.addColorStop(1, '#5c574f')
  context.globalCompositeOperation = 'source-over'
  context.clearRect(0, 0, width, height)
  context.fillStyle = gradient
  context.fillRect(0, 0, width, height)

  context.strokeStyle = 'rgba(20, 14, 9, 0.18)'
  context.lineWidth = 1
  for (let y = 12; y < height; y += 14) {
    context.beginPath()
    context.moveTo(0, y)
    context.lineTo(width, y + 8)
    context.stroke()
  }

  context.fillStyle = '#140e09'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.font = `700 ${Math.round(width * 0.075)}px Fraunces, serif`
  context.fillText('RASPE AQUI', width / 2, height / 2)
}

function clearedRatio(canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) return 0
  const { data } = context.getImageData(0, 0, canvas.width, canvas.height)
  let clear = 0
  let total = 0
  for (let index = 3; index < data.length; index += 4 * 16) {
    total += 1
    if (data[index] < 40) clear += 1
  }
  return total === 0 ? 0 : clear / total
}

function pointFromEvent(event: PointerEvent, canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect()
  return {
    x: ((event.clientX - rect.left) / rect.width) * canvas.width,
    y: ((event.clientY - rect.top) / rect.height) * canvas.height,
  }
}

export function ScratchDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const revealedRef = useRef(false)
  const [revealed, setRevealed] = useState(false)

  function reveal() {
    revealedRef.current = true
    setRevealed(true)
  }

  function reset() {
    const canvas = canvasRef.current
    if (!canvas) return
    revealedRef.current = false
    setRevealed(false)
    const rect = canvas.getBoundingClientRect()
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.max(1, Math.round(rect.width * ratio))
    canvas.height = Math.max(1, Math.round(rect.height * ratio))
    drawCover(canvas)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const fit = () => {
      if (revealedRef.current) return
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(rect.width * ratio))
      canvas.height = Math.max(1, Math.round(rect.height * ratio))
      drawCover(canvas)
    }
    fit()

    let drawing = false
    let last: { x: number; y: number } | null = null

    const scratchTo = (x: number, y: number) => {
      const context = canvas.getContext('2d', { willReadFrequently: true })
      if (!context || !last) return
      context.globalCompositeOperation = 'destination-out'
      context.strokeStyle = '#000'
      context.lineCap = 'round'
      context.lineJoin = 'round'
      context.lineWidth = Math.min(canvas.width, canvas.height) * 0.18
      context.beginPath()
      context.moveTo(last.x, last.y)
      context.lineTo(x, y)
      context.stroke()
      last = { x, y }
      if (clearedRatio(canvas) >= REVEAL_AT) reveal()
    }

    const onDown = (event: PointerEvent) => {
      if (revealedRef.current) return
      canvas.setPointerCapture(event.pointerId)
      drawing = true
      last = pointFromEvent(event, canvas)
    }
    const onMove = (event: PointerEvent) => {
      if (!drawing || revealedRef.current) return
      const next = pointFromEvent(event, canvas)
      scratchTo(next.x, next.y)
    }
    const onUp = () => {
      drawing = false
      last = null
    }

    canvas.addEventListener('pointerdown', onDown)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointercancel', onUp)
    window.addEventListener('resize', fit)

    return () => {
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('pointercancel', onUp)
      window.removeEventListener('resize', fit)
    }
  }, [])

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
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 h-full w-full touch-none transition-opacity duration-500 ${revealed ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            aria-label="Demonstração de raspadinha. Raspe a cobertura para revelar."
          />
        </div>
        <figcaption className="flex items-center justify-between gap-3 px-2 pt-3 pb-1 text-sm text-[#140e09]/70">
          <span>Demonstração. Isto não é um cupom.</span>
          {revealed ? (
            <button type="button" className="font-semibold text-[#140e09] underline" onClick={reset}>
              Raspar de novo
            </button>
          ) : (
            <button type="button" className="font-semibold text-[#140e09] underline" onClick={reveal}>
              Revelar
            </button>
          )}
        </figcaption>
      </div>
    </figure>
  )
}
