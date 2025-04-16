export const toji = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(588 + x, 482 + y) // 左上
  ctx.quadraticCurveTo(605 + x, 503 + y, 605 + x, 503 + y) // 左下
  ctx.quadraticCurveTo(611 + x, 502 + y, 613 + x, 493 + y) // 右下
  ctx.quadraticCurveTo(597 + x, 473 + y, 597 + x, 473 + y) // 右上
  ctx.quadraticCurveTo(590 + x, 476 + y, 588 + x, 482 + y) // 左下
  ctx.fill()
  ctx.moveTo(588 + x, 482 + y) // 左上
  ctx.quadraticCurveTo(603 + x, 493 + y, 605 + x, 503 + y) // 左下
  ctx.moveTo(597 + x, 473 + y) // 右上
  ctx.quadraticCurveTo(600 + x, 483 + y, 613 + x, 493 + y) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}
