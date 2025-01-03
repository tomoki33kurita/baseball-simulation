export const laceOfLiningAllow = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  // 右
  ctx.beginPath()
  ctx.moveTo(278 + x, 216 + y) // 左上
  ctx.quadraticCurveTo(278 + x, 222 + y, 281 + x, 229 + y) // 左下
  ctx.quadraticCurveTo(287 + x, 234 + y, 298 + x, 233 + y) // 右下
  ctx.quadraticCurveTo(299 + x, 227 + y, 295 + x, 226 + y) // 右上
  ctx.quadraticCurveTo(287 + x, 226 + y, 278 + x, 216 + y) // 左上
  ctx.fill()
  // // 下側面
  ctx.moveTo(280 + x, 220 + y) // 右上
  ctx.quadraticCurveTo(287 + x, 229 + y, 298 + x, 228 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  // 左
  ctx.beginPath()
  ctx.moveTo(278 + x, 215 + y) // 右上
  ctx.quadraticCurveTo(284 + x, 224 + y, 284 + x, 224 + y) // 右上_2
  ctx.quadraticCurveTo(283 + x, 232 + y, 276 + x, 238 + y) // 左上
  ctx.quadraticCurveTo(278 + x, 243 + y, 278 + x, 243 + y) // 左下
  ctx.quadraticCurveTo(293 + x, 232 + y, 288 + x, 222 + y) // 右上＿右
  ctx.quadraticCurveTo(286 + x, 215 + y, 278 + x, 215 + y) // 右上
  ctx.fill()
  ctx.moveTo(280 + x, 216 + y) // 右上
  ctx.quadraticCurveTo(293 + x, 227 + y, 277 + x, 239 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}
