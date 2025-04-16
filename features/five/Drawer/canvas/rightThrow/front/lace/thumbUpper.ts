export const thumbUpper = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  numerator?: number
  // scaleSize?: number,
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(366 + x, 443 + y) // 左上
  ctx.quadraticCurveTo(359 + x, 440 + y, 364 + x, 450 + y) // 左下
  ctx.quadraticCurveTo(388 + x, 465 + y, 388 + x, 465 + y) // 右下
  ctx.quadraticCurveTo(402 + x, 465 + y, 391 + x, 455 + y) // 右上
  ctx.quadraticCurveTo(381 + x, 447 + y, 366 + x, 443 + y) // 左上
  ctx.fill()
  ctx.moveTo(364 + x, 450 + y) // 左上
  ctx.quadraticCurveTo(376 + x, 451 + y, 388 + x, 465 + y) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const thumbUpper2 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(529, 499) // 左上
  ctx.quadraticCurveTo(541, 504, 549, 519) // 左下
  ctx.quadraticCurveTo(555, 512, 560, 514) // 右下
  ctx.quadraticCurveTo(550, 498, 539, 493) // 右上
  ctx.quadraticCurveTo(532, 493, 529, 499) // 左上
  ctx.fill()
  ctx.moveTo(532, 499) // 左上
  ctx.quadraticCurveTo(543, 502, 551, 519) // 左下
  ctx.stroke()
  ctx.closePath()
}
