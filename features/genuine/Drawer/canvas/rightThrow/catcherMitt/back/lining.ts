import { generateLiningsGradient } from '@/util/canvas'

export const lining = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(256, 465) // 左上
  ctx.quadraticCurveTo(257, 514, 265, 532) // 左下
  ctx.quadraticCurveTo(424, 536, 424, 536) //右下
  ctx.quadraticCurveTo(464, 505, 464, 505) //
  ctx.quadraticCurveTo(475, 461, 432, 442) //
  ctx.quadraticCurveTo(357, 421, 256, 465) //
  const coordinates = { x0: 150, y0: 300, x1: 700, y1: 400 }
  const gradient = generateLiningsGradient(ctx, color, coordinates)
  ctx.fillStyle = gradient
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
