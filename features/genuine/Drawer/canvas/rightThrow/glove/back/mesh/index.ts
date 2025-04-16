import { generateLiningsGradient } from '@/util/canvas'

export const meshDrawer = (ctx: CanvasRenderingContext2D, meshColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = 'red' //'#282828'
  ctx.fillStyle = meshColor
  //   ctx.beginPath()
  //   ctx.moveTo(0, 110)
  //   ctx.lineTo(0, 250)
  //   ctx.lineTo(150, 250)
  //   ctx.lineTo(150, 110)
  //   ctx.lineTo(0, 110)
  //   ctx.stroke()
  //   ctx.closePath()

  const width = 100
  const height = 100
  const cellSize = 10
  const coordinates = { x0: 150, y0: 300, x1: 700, y1: 400 }
  const gradient = generateLiningsGradient(ctx, meshColor, coordinates)
  // 縦線の描画
  Array.from({ length: Math.ceil(width / cellSize) + 1 }, (_, i) => i * cellSize).forEach((x, i) => {
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    // ctx.stroke()
    ctx.fill()
    ctx.closePath()
  })

  // 横線の描画
  Array.from({ length: Math.ceil(height / cellSize) + 1 }, (_, i) => i * cellSize).forEach((y) => {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
    ctx.closePath()
  })
}
