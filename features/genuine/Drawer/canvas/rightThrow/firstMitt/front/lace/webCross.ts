export const webCross = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 右上
  ctx.moveTo(317 + locationX, 295 + locationY) // 上_左
  ctx.quadraticCurveTo(314 + locationX, 318 + locationY, 314 + locationX, 318 + locationY) // 上＿左
  ctx.quadraticCurveTo(324 + locationX, 309 + locationY, 324 + locationX, 309 + locationY) // 上＿左
  ctx.quadraticCurveTo(327 + locationX, 287 + locationY, 327 + locationX, 287 + locationY) // 上＿左
  ctx.quadraticCurveTo(317 + locationX, 295 + locationY, 317 + locationX, 295 + locationY) // 上＿左
  ctx.fill()
  // 左上
  ctx.moveTo(308 + locationX, 308 + locationY) // 上_左
  ctx.quadraticCurveTo(328 + locationX, 308 + locationY, 328 + locationX, 308 + locationY) // 上＿左
  ctx.quadraticCurveTo(335 + locationX, 299 + locationY, 335 + locationX, 299 + locationY) // 上＿左
  ctx.quadraticCurveTo(316 + locationX, 300 + locationY, 313 + locationX, 300 + locationY) // 上＿左
  ctx.quadraticCurveTo(305 + locationX, 308 + locationY, 305 + locationX, 308 + locationY) // 上＿左
  ctx.fill()
  ctx.stroke()
  // // 側面ライン
  // ctx.moveTo(435 + locationX, 239 + locationY) // 左上
  // ctx.quadraticCurveTo(444 + locationX, 240 + locationY, 454 + locationX, 238 + locationY) // 右下
  // ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}
