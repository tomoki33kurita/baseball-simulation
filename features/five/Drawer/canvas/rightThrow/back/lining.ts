import { generateLiningsGradient } from '@/util/canvas'

export const lining = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#fff'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(280, 490) // 左下
  ctx.quadraticCurveTo(361, 483, 457, 467) // 右下
  ctx.quadraticCurveTo(504, 439, 485, 402) // 折り返し付近
  ctx.quadraticCurveTo(455, 366, 423, 370) // 折り返し付近
  ctx.quadraticCurveTo(354, 365, 316, 390) //
  ctx.quadraticCurveTo(250, 445, 280, 490) // 左上
  const coordinates = { x0: 150, y0: 300, x1: 700, y1: 400 }
  const gradient = generateLiningsGradient(ctx, color, coordinates)
  ctx.fillStyle = gradient
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
