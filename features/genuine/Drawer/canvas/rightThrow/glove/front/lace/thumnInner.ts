export const thumbInner = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 親指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(240 + x, 312 + y) // 左上
  ctx.quadraticCurveTo(248 + x, 318 + y, 258 + x, 349 + y) // 左下
  ctx.quadraticCurveTo(261 + x, 346 + y, 260 + x, 337 + y) // 右下
  ctx.quadraticCurveTo(257 + x, 310 + y, 239 + x, 304 + y)
  ctx.quadraticCurveTo(236 + x, 308 + y, 240 + x, 312 + y)
  ctx.fill()
  // 側面ライン
  ctx.moveTo(240 + x, 312 + y) // 左上
  ctx.quadraticCurveTo(254 + x, 315 + y, 258 + x, 349 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const thumbInner2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 親指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(240 + x, 312 + y) // 左上
  ctx.quadraticCurveTo(248 + x, 318 + y, 258 + x, 342 + y) // 左下
  ctx.quadraticCurveTo(261 + x, 340 + y, 260 + x, 330 + y) // 右下
  ctx.quadraticCurveTo(257 + x, 310 + y, 239 + x, 304 + y)
  ctx.quadraticCurveTo(236 + x, 308 + y, 240 + x, 312 + y)
  ctx.fill()
  // 側面ライン
  ctx.moveTo(240 + x, 312 + y) // 左上
  ctx.quadraticCurveTo(254 + x, 315 + y, 258 + x, 339 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}
