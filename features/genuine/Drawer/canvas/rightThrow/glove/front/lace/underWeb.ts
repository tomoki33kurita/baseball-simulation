export const underWeb = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(345 + x, 306 + y) // 左下
  ctx.quadraticCurveTo(349 + x, 315 + y, 353 + x, 311 + y) // 右下
  ctx.quadraticCurveTo(366 + x, 297 + y, 372 + x, 280 + y) // 右上
  ctx.quadraticCurveTo(372 + x, 268 + y, 364 + x, 275 + y) // 左上
  ctx.quadraticCurveTo(356 + x, 289 + y, 344 + x, 306 + y) // 左下
  ctx.fill()
  ctx.moveTo(366 + x, 275 + y) // 左下
  ctx.quadraticCurveTo(362 + x, 289 + y, 345 + x, 308 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const underWebForNetWeb1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(355 + x, 279 + y) // 左
  ctx.quadraticCurveTo(377 + x, 269 + y, 382 + x, 272 + y) // 右下
  ctx.quadraticCurveTo(389 + x, 266 + y, 384 + x, 261 + y) // 右上
  ctx.quadraticCurveTo(365 + x, 261 + y, 355 + x, 279 + y) // 左
  ctx.fill()
  ctx.moveTo(355 + x, 279 + y) // 左下
  ctx.quadraticCurveTo(377 + x, 264 + y, 382 + x, 272 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const underWebForNetWeb2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.beginPath()
  ctx.moveTo(325 + x, 331 + y) // 左上
  ctx.quadraticCurveTo(332 + x, 330 + y, 342 + x, 347 + y) // 左下
  ctx.quadraticCurveTo(350 + x, 343 + y, 347 + x, 337 + y) // 右下
  ctx.quadraticCurveTo(339 + x, 324 + y, 331 + x, 323 + y) // 右上
  ctx.quadraticCurveTo(325 + x, 322 + y, 325 + x, 331 + y) // 左上
  ctx.fill()
  ctx.moveTo(325 + x, 330 + y) // 左上
  ctx.quadraticCurveTo(335 + x, 325 + y, 344 + x, 347 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}
