export const listCross = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上右下方向の革紐
  ctx.beginPath()
  ctx.moveTo(283, 526) // 左上
  ctx.quadraticCurveTo(291, 561, 321, 572) //
  ctx.quadraticCurveTo(335, 568, 335, 568) // 右下
  ctx.quadraticCurveTo(325, 561, 325, 561) // 右上
  ctx.quadraticCurveTo(299, 553, 287, 524) // 右上
  ctx.quadraticCurveTo(281, 520, 283, 526) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(284, 524) // 上
  ctx.quadraticCurveTo(304, 568, 332, 565)
  ctx.stroke()
  ctx.closePath()

  // 右上左下方向の革紐
  ctx.beginPath()
  ctx.moveTo(291, 555) // 左上
  ctx.quadraticCurveTo(295, 563, 309, 569) // 左下
  ctx.quadraticCurveTo(293, 547, 310, 525) // 右下
  ctx.quadraticCurveTo(317, 510, 305, 513) // 右上
  ctx.quadraticCurveTo(287, 527, 291, 555) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面
  ctx.beginPath()
  ctx.moveTo(312, 517) // 上
  ctx.quadraticCurveTo(285, 548, 309, 569) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const listStraight = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上右下方向の革紐
  ctx.beginPath()
  ctx.moveTo(285 + x, 523 + y) // 左上
  ctx.quadraticCurveTo(283 + x, 528 + y, 288 + x, 528 + y) // 左下
  ctx.quadraticCurveTo(292 + x, 523 + y, 306 + x, 517 + y) // 右下
  ctx.quadraticCurveTo(308 + x, 510 + y, 301 + x, 508 + y) // 右上
  ctx.quadraticCurveTo(281 + x, 517 + y, 285 + x, 523 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 右上左下方向の革紐
  ctx.beginPath()
  ctx.moveTo(296 + x, 545 + y) // 左上
  ctx.quadraticCurveTo(300 + x, 554 + y, 300 + x, 554 + y) // 左下
  ctx.quadraticCurveTo(310 + x, 562 + y, 327 + x, 560 + y) // 右下
  ctx.quadraticCurveTo(328 + x, 552 + y, 322 + x, 548 + y) // 右上
  ctx.quadraticCurveTo(307 + x, 550 + y, 296 + x, 545 + y) // 左上
  ctx.fill()
  ctx.moveTo(296 + x, 545 + y) // 左上
  ctx.quadraticCurveTo(307 + x, 553 + y, 325 + x, 550 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}
export const listStraightLittle = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上右下方向の革紐
  ctx.beginPath()
  ctx.moveTo(285 + x, 520 + y) // 左上
  ctx.quadraticCurveTo(283 + x, 525 + y, 288 + x, 525 + y) // 左下
  ctx.quadraticCurveTo(292 + x, 523 + y, 313 + x, 517 + y) // 右下
  ctx.quadraticCurveTo(314 + x, 510 + y, 308 + x, 508 + y) // 右上
  ctx.quadraticCurveTo(281 + x, 517 + y, 285 + x, 520 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const listStraightThumb = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上右下方向の革紐
  ctx.beginPath()
  ctx.moveTo(467 + x, 505 + y) // 左上
  ctx.quadraticCurveTo(465 + x, 509 + y, 470 + x, 515 + y) // 左下
  ctx.quadraticCurveTo(484 + x, 518 + y, 497 + x, 511 + y) // 右下
  ctx.quadraticCurveTo(501 + x, 506 + y, 500 + x, 499 + y) // 右上
  ctx.quadraticCurveTo(481 + x, 507 + y, 467 + x, 505 + y) // 左上
  ctx.moveTo(467 + x, 505 + y) // 左上
  ctx.quadraticCurveTo(481 + x, 510 + y, 500 + x, 501 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
