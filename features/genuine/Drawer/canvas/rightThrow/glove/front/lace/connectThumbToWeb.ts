export const thumbTopOver = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(188, 268) // 左下
  ctx.quadraticCurveTo(186, 260, 197, 256) // ハミダシ真上
  ctx.quadraticCurveTo(209, 253, 210, 247) // 右上
  ctx.quadraticCurveTo(203, 242, 196, 246) // 右上＿左
  ctx.quadraticCurveTo(183, 255, 188, 268) // 左下
  ctx.fill()
  // 側面ライン
  ctx.moveTo(193, 257) // 左下
  ctx.quadraticCurveTo(200, 252, 205, 245) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const thumbTop = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(214, 250) // 左上
  ctx.quadraticCurveTo(219, 258, 219, 267) // 左下
  ctx.quadraticCurveTo(221, 276, 224, 278) // 右下_下
  ctx.quadraticCurveTo(234, 271, 228, 255) // 右上
  ctx.quadraticCurveTo(220, 246, 214, 250) // 左下
  ctx.fill()
  // 側面ライン
  ctx.moveTo(222, 250) // 上
  ctx.quadraticCurveTo(228, 262, 219, 269) // 右下
  ctx.stroke()
  ctx.closePath()
}

// 折り返し部分
export const thumbWrapBack = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  ctx.moveTo(273 + locationX, 337 + locationY) // 左上
  ctx.quadraticCurveTo(280 + locationX, 348 + locationY, 282 + locationX, 359 + +locationY) // 左下
  ctx.quadraticCurveTo(286 + locationX, 357 + locationY, 287 + locationX, 350 + +locationY) // 右下
  ctx.quadraticCurveTo(282 + locationX, 336 + locationY, 279 + locationX, 332 + +locationY) // 右上
  ctx.quadraticCurveTo(272 + locationX, 325 + locationY, 273 + locationX, 339 + +locationY) // 左下
  ctx.fill()
  // 側面ライン
  ctx.moveTo(273 + locationX, 335 + locationY) // 左上
  ctx.quadraticCurveTo(286 + locationX, 343 + locationY, 282 + locationX, 359 + locationY) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}
