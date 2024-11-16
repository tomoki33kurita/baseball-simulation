export const hWebCrossUpperLeft = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(316 + x, 256 + y) // 左上
  ctx.quadraticCurveTo(328 + x, 261 + y, 355 + x, 285 + y) // 左下
  ctx.quadraticCurveTo(363 + x, 275 + y, 363 + x, 275 + y) // 右下
  ctx.quadraticCurveTo(338 + x, 248 + y, 325 + x, 246 + y) // 右上
  ctx.quadraticCurveTo(316 + x, 256 + y, 316 + x, 256 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const hWebCrossUpperRight = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(311 + x, 263 + y) // 左上
  ctx.quadraticCurveTo(311 + x, 282 + y, 333 + x, 325 + y) // 左下
  ctx.quadraticCurveTo(340 + x, 306 + y, 340 + x, 311 + y) // 右下
  ctx.quadraticCurveTo(321 + x, 271 + y, 321 + x, 250 + y)
  ctx.quadraticCurveTo(311 + x, 261 + y, 311 + x, 263 + y)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const hWebCrossUpperLeft2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(275 + x, 322 + y) // 左上
  ctx.quadraticCurveTo(296 + x, 329 + y, 318 + x, 353 + y) // 左下
  ctx.quadraticCurveTo(325 + x, 340 + y, 325 + x, 340 + y)
  ctx.quadraticCurveTo(299 + x, 315 + y, 281 + x, 310 + y) // 右上
  ctx.quadraticCurveTo(275 + x, 322 + y, 275 + x, 322 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
