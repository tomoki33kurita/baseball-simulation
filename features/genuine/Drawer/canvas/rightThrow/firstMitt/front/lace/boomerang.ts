export const boomerang = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(441, 121) // 左上
  ctx.quadraticCurveTo(430, 125, 440, 128) // 左下
  ctx.quadraticCurveTo(451, 136, 472, 125) // 右下
  ctx.quadraticCurveTo(478, 123, 465, 116) // 右上
  ctx.quadraticCurveTo(450, 122, 441, 121) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(436, 124) // 左上
  ctx.quadraticCurveTo(454, 127, 469, 118) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const boomerang2 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 右から２番目
  ctx.moveTo(591 + locationX, 164 + locationY) // 左上
  ctx.quadraticCurveTo(596 + locationX, 194 + locationY, 623 + locationX, 203 + locationY) // 左下
  ctx.quadraticCurveTo(626 + locationX, 197 + locationY, 623 + locationX, 193 + locationY) // 右下
  ctx.quadraticCurveTo(607 + locationX, 184 + locationY, 602 + locationX, 166 + locationY) // 右上
  ctx.quadraticCurveTo(596 + locationX, 160 + locationY, 591 + locationX, 164 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(599 + locationX, 165 + locationY) // 左上
  ctx.quadraticCurveTo(603 + locationX, 188 + locationY, 623 + locationX, 196 + locationY) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}
