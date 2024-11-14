export const connectCross = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 右上
  ctx.moveTo(594 + locationX, 221 + locationY) // 上_左
  ctx.quadraticCurveTo(589 + locationX, 246 + locationY, 595 + locationX, 262 + locationY) // 下＿左
  ctx.quadraticCurveTo(602 + locationX, 266 + locationY, 603 + locationX, 260 + locationY) // 下＿右
  ctx.quadraticCurveTo(599 + locationX, 238 + locationY, 601 + locationX, 228 + locationY) // 上＿右
  ctx.quadraticCurveTo(597 + locationX, 218 + locationY, 594 + locationX, 221 + locationY) // 上＿左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(600 + locationX, 225 + locationY) // 左上
  ctx.quadraticCurveTo(593 + locationX, 239 + locationY, 603 + locationX, 259 + locationY) // 右下
  ctx.stroke()
  ctx.closePath()

  // 左上＿右下
  ctx.beginPath()
  ctx.moveTo(584 + locationX, 228 + locationY) // 上_左
  ctx.quadraticCurveTo(587 + locationX, 250 + locationY, 609 + locationX, 259 + locationY) // 下＿左
  ctx.quadraticCurveTo(612 + locationX, 254 + locationY, 611 + locationX, 250 + locationY) // 下＿右
  ctx.quadraticCurveTo(594 + locationX, 241 + locationY, 594 + locationX, 228 + locationY) // 上＿右
  ctx.quadraticCurveTo(589 + locationX, 220 + locationY, 584 + locationX, 228 + locationY) // 上＿左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(591 + locationX, 225 + locationY) // 左上
  ctx.quadraticCurveTo(592 + locationX, 247 + locationY, 612 + locationX, 253 + locationY) // 右下
  ctx.stroke()

  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}
