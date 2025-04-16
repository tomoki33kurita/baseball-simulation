export const sideBank = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(484 + locationX, 522 + locationY) // 左下
  ctx.quadraticCurveTo(502 + locationX, 524 + locationY, 522 + locationX, 526 + locationY) // 右下
  ctx.quadraticCurveTo(530 + locationX, 522 + locationY, 523 + locationX, 518 + locationY) // 右上
  ctx.quadraticCurveTo(503 + locationX, 510 + locationY, 486 + locationX, 514 + locationY) // 左上
  ctx.quadraticCurveTo(479 + locationX, 516 + locationY, 484 + locationX, 522 + locationY) // 左下
  ctx.fill()
  // 側面ライン
  ctx.moveTo(484 + locationX, 522 + locationY) // 右上
  ctx.quadraticCurveTo(502 + locationX, 517 + locationY, 522 + locationX, 526 + locationY) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const sideBank2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(348 + x, 477 + y) // 左下
  ctx.quadraticCurveTo(368 + x, 492 + y, 368 + x, 492 + y) // 右下
  ctx.quadraticCurveTo(375 + x, 493 + y, 373 + x, 486 + y) // 右上
  ctx.quadraticCurveTo(365 + x, 474 + y, 351 + x, 468 + y) // 左上
  ctx.quadraticCurveTo(342 + x, 466 + y, 348 + x, 477 + y) // 左下
  ctx.fill()
  // 側面ライン
  ctx.moveTo(346 + x, 472 + y) // 左上
  ctx.quadraticCurveTo(359 + x, 478 + y, 369 + x, 491 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}
