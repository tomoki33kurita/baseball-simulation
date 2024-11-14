export const webTop = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
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
  ctx.strokeStyle = '#383838'
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
