export const laceOfKnots = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 上＿左
  ctx.beginPath()
  ctx.moveTo(432 + x, 69 + y) // 左
  ctx.quadraticCurveTo(445 + x, 69 + y, 448 + x, 69 + y) // 左右
  ctx.quadraticCurveTo(465 + x, 59 + y, 465 + x, 59 + y) // 右上右
  ctx.quadraticCurveTo(466 + x, 54 + y, 459 + x, 50 + y) // 右上左
  ctx.quadraticCurveTo(432 + x, 69 + y, 432 + x, 69 + y) // 左
  ctx.fill()
  ctx.moveTo(464 + x, 56 + y) // 右上
  ctx.quadraticCurveTo(444 + x, 68 + y, 444 + x, 68 + y) // 左右
  ctx.stroke()
  ctx.closePath()

  // 上＿右
  ctx.beginPath()
  ctx.moveTo(499 + x, 68 + y) // 左
  ctx.quadraticCurveTo(524 + x, 73 + y, 524 + x, 73 + y) // 左右
  ctx.quadraticCurveTo(550 + x, 62 + y, 550 + x, 62 + y) // 右上右
  ctx.quadraticCurveTo(553 + x, 61 + y, 548 + x, 52 + y) // 右上左
  ctx.quadraticCurveTo(499 + x, 68 + y, 499 + x, 68 + y) // 左
  ctx.fill()
  ctx.moveTo(551 + x, 59 + y) // 右上
  ctx.quadraticCurveTo(518 + x, 71 + y, 518 + x, 74 + y) // 左右
  ctx.stroke()
  ctx.closePath()

  // 右下
  ctx.beginPath()
  ctx.moveTo(705 + x, 460 + y) // 左上
  ctx.quadraticCurveTo(701 + x, 481 + y, 705 + x, 508 + y) // 左下
  ctx.quadraticCurveTo(715 + x, 508 + y, 715 + x, 508 + y) // 右下
  ctx.quadraticCurveTo(714 + x, 459 + y, 714 + x, 459 + y) // 右上
  ctx.quadraticCurveTo(703 + x, 460 + y, 705 + x, 460 + y) // 左上
  ctx.fill()
  ctx.moveTo(713 + x, 462 + y) // 上
  ctx.quadraticCurveTo(710 + x, 484 + y, 715 + x, 508 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // // 左＿上
  // ctx.beginPath()
  // ctx.moveTo(705 + x, 460) // 左上
  // ctx.quadraticCurveTo(701 + x, 48 + y1, 705, 508) // 左下
  // ctx.quadraticCurveTo(715 + x, 50 + y8, 715, 508) // 右下
  // ctx.quadraticCurveTo(714 + x, 45 + y9, 714, 459) // 右上
  // ctx.quadraticCurveTo(703 + x, 46 + y0, 705, 460) // 左上
  // ctx.fill()
  // ctx.moveTo(713 + x, 462) // 上
  // ctx.quadraticCurveTo(710 + x, 48 + y4, 715, 508) // 左下
  // ctx.stroke()
  // ctx.closePath()

  // 左＿下
  ctx.beginPath()
  ctx.moveTo(93 + x, 414 + y) // 左＿左下
  ctx.quadraticCurveTo(129 + x, 442 + y, 150 + x, 442 + y) // 右下
  ctx.quadraticCurveTo(150 + x, 429 + y, 150 + x, 429 + y) // 右上
  ctx.quadraticCurveTo(130 + x, 430 + y, 100 + x, 405 + y) // 左＿左上
  ctx.quadraticCurveTo(93 + x, 414 + y, 93 + x, 414 + y) // 左＿左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 結び玉↓
  ctx.beginPath()
  ctx.moveTo(149 + x, 430 + y) // 左上
  ctx.quadraticCurveTo(145 + x, 440 + y, 152 + x, 444 + y) // 左下
  ctx.quadraticCurveTo(160 + x, 446 + y, 163 + x, 439 + y) // 右下
  ctx.quadraticCurveTo(156 + x, 429 + y, 156 + x, 429 + y) // 右上
  ctx.quadraticCurveTo(152 + x, 426 + y, 149 + x, 430 + y) // 左上
  ctx.fill()
  ctx.moveTo(156 + x, 428 + y) // 上
  ctx.quadraticCurveTo(152 + x, 438 + y, 159 + x, 442 + y) // 下
  ctx.stroke()
  ctx.closePath()
}
