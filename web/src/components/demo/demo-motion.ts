export function wheelRotation(current: number, index: number, count: number, turns = 5) {
  const slice = 360 / count
  const target = -((index + 0.5) * slice)
  const normalized = ((target % 360) + 360) % 360
  const min = current + 360 * turns
  const delta = (normalized - (((min % 360) + 360) % 360) + 360) % 360
  return min + delta
}

export function slotTarget(current: number, symbol: number, length: number, loops = 6) {
  const next = current + loops * length
  const adjust = (symbol - (next % length) + length) % length
  return next + adjust
}

export function shuffle<T>(items: readonly T[], random: () => number = Math.random) {
  const next = [...items]
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1))
    const item = next[index]
    next[index] = next[swap] as T
    next[swap] = item as T
  }
  return next
}

export function polar(cx: number, cy: number, radius: number, angle: number) {
  const radians = (angle * Math.PI) / 180
  return {
    x: Math.round((cx + radius * Math.cos(radians)) * 100) / 100,
    y: Math.round((cy + radius * Math.sin(radians)) * 100) / 100,
  }
}

export function pieSlice(cx: number, cy: number, radius: number, start: number, end: number) {
  const startPoint = polar(cx, cy, radius, start)
  const endPoint = polar(cx, cy, radius, end)
  const large = end - start > 180 ? 1 : 0
  return `M ${cx} ${cy} L ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 ${large} 1 ${endPoint.x} ${endPoint.y} Z`
}
