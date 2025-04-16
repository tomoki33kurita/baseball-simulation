import { generateLiningsGradient } from '@/util/canvas'

export const liningLeather = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(260, 494) // 左下
  ctx.lineTo(488, 490) // 右下
  ctx.quadraticCurveTo(535, 435, 481, 400) // 右上
  ctx.quadraticCurveTo(371, 359, 277, 415) // 左上
  ctx.quadraticCurveTo(253, 454, 260, 494) //
  const coordinates = { x0: 150, y0: 300, x1: 700, y1: 400 }
  const gradient = generateLiningsGradient(ctx, color, coordinates)
  ctx.fillStyle = gradient
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
