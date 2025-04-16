export const webTop = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(587 + locationX, 47 + locationY) // 左上
  ctx.quadraticCurveTo(595 + locationX, 44 + locationY, 589 + locationX, 64 + locationY) // 左下
  ctx.quadraticCurveTo(593 + locationX, 70 + locationY, 598 + locationX, 69 + locationY) // 右下
  ctx.quadraticCurveTo(604 + locationX, 57 + locationY, 602 + locationX, 51 + locationY) // 右上
  ctx.quadraticCurveTo(593 + locationX, 38 + locationY, 587 + locationX, 47 + locationY) // 左上
  ctx.fill()
  ctx.moveTo(594 + locationX, 42 + locationY) // 上
  ctx.quadraticCurveTo(599 + locationX, 47 + locationY, 590 + locationX, 63 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const webTop0 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(575, 36) // 左上
  ctx.quadraticCurveTo(570, 52, 570, 50) // 左下
  ctx.quadraticCurveTo(574, 55, 580, 53) // 右下
  ctx.quadraticCurveTo(580, 46, 585, 40) // 右上
  ctx.quadraticCurveTo(579, 33, 575, 36) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const topLaces = (ctx: CanvasRenderingContext2D, laceColor: string) => {
  webTop(ctx, laceColor, 400, -98, 20, 0.7) // 左から12番目
  webTop(ctx, laceColor, 390, -115, 20, 0.7) // 左から11番目
  webTop(ctx, laceColor, 383, -133, 20, 0.7) // 左から10番目
  webTop(ctx, laceColor, 377, -154, 20, 0.7) // 左から9番目
  webTop(ctx, laceColor, 225, -275, 28, 0.8) // 左から8番目
  webTop(ctx, laceColor, 50, -242, 28) // 左から7番目
  webTop(ctx, laceColor, 52, -200, 23) // 左から6番目
  webTop(ctx, laceColor, 45, -180, 20) // 左から5番目
  webTop(ctx, laceColor, 36, 28) // 左から4番目
  webTop(ctx, laceColor, 18, 15) // 左から3番目
  webTop(ctx, laceColor, 0, -2) // 左から2番目
  webTop0(ctx, laceColor)
}

const webTopCross = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, rotate: number): void => {
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  // 左上-右下
  ctx.fillStyle = color
  ctx.strokeStyle = '#282828'
  ctx.beginPath()
  ctx.moveTo(590 + x, 62 + y) // 左下
  ctx.quadraticCurveTo(594 + x, 68 + y, 602 + x, 62 + y) // 右下
  ctx.quadraticCurveTo(598 + x, 45 + y, 595 + x, 41 + y) // 右上
  ctx.quadraticCurveTo(588 + x, 42 + y, 588 + x, 42 + y) // 左上
  ctx.quadraticCurveTo(583 + x, 50 + y, 590 + x, 62 + y) // 左下
  ctx.moveTo(588 + x, 46 + y) // 左上
  ctx.quadraticCurveTo(592 + x, 58 + y, 590 + x, 62 + y)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 右上-左下
  ctx.beginPath()
  ctx.moveTo(583 + x, 51 + y) // 左上
  ctx.quadraticCurveTo(577 + x, 55 + y, 586 + x, 59 + y) // 左下
  ctx.quadraticCurveTo(603 + x, 54 + y, 603 + x, 54 + y) // 右下
  ctx.quadraticCurveTo(608 + x, 48 + y, 598 + x, 45 + y) // 右上
  ctx.quadraticCurveTo(594 + x, 44 + y, 583 + x, 51 + y) // 左上
  // ctx.quadraticCurveTo()
  ctx.moveTo(586 + x, 59 + y) // 左下
  ctx.quadraticCurveTo(595 + x, 51 + y, 603 + x, 54 + y) // 右下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

export const topCrossLaces = (ctx: CanvasRenderingContext2D, laceColor: string) => {
  webTop(ctx, laceColor, 400, -98, 20, 0.7) // 左から12番目
  webTop0(ctx, laceColor)
  webTopCross(ctx, laceColor, 20, -20, 3)
  webTopCross(ctx, laceColor, 55, -35, 7)
  webTopCross(ctx, laceColor, 73, -145, 20)
  webTopCross(ctx, laceColor, 32, -339, 40)
}
