export const outfielderDefaultBackLaceForFront = (
  ctx: CanvasRenderingContext2D,
  laceColor: string,
  x: number,
  y: number,
  numerator: number
): void => {
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 0.8
  ctx.fillStyle = laceColor
  // 人指し指 - 中指 上
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 人指し指 - 中指 下
  ctx.beginPath()
  ctx.moveTo(456 + x, 156 + y) // 左上
  ctx.quadraticCurveTo(457 + x, 165 + y, 457 + x, 165 + y) // 左下
  ctx.quadraticCurveTo(471 + x, 163 + y, 487 + x, 169 + y) // 右下
  ctx.quadraticCurveTo(490 + x, 164 + y, 489 + x, 159 + y) // 右上
  ctx.quadraticCurveTo(473 + x, 152 + y, 456 + x, 156 + y) // 左上
  ctx.fill()
  ctx.moveTo(456 + x, 158 + y)
  ctx.quadraticCurveTo(473 + x, 156 + y, 489 + x, 162 + y) // 左上奥
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}
