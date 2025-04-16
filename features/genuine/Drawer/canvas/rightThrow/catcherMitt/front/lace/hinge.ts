export const hinge = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  // 上
  ctx.moveTo(540 + x, 478 + y) // 左上
  ctx.quadraticCurveTo(547 + x, 485 + y, 562 + x, 498 + y) // 左下
  ctx.quadraticCurveTo(568 + x, 498 + y, 570 + x, 493 + y) // 右下
  ctx.quadraticCurveTo(562 + x, 478 + y, 547 + x, 470 + y) // 右上
  ctx.quadraticCurveTo(538 + x, 471 + y, 540 + x, 478 + y) // 左上
  ctx.fill()
  ctx.moveTo(540 + x, 477 + y) // 左上
  ctx.quadraticCurveTo(554 + x, 487 + y, 564 + x, 498 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // 下
  ctx.beginPath()
  ctx.moveTo(566 + x, 502 + y) // 左上
  ctx.quadraticCurveTo(575 + x, 514 + y, 595 + x, 526 + y) // 左下
  ctx.quadraticCurveTo(601 + x, 526 + y, 600 + x, 520 + y) // 右下
  ctx.quadraticCurveTo(587 + x, 504 + y, 573 + x, 497 + y) // 右上
  ctx.quadraticCurveTo(567 + x, 498 + y, 566 + x, 502 + y) // 左上
  ctx.fill()
  ctx.moveTo(565 + x, 502 + y) // 左上
  ctx.quadraticCurveTo(585 + x, 515 + y, 595 + x, 526 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}
