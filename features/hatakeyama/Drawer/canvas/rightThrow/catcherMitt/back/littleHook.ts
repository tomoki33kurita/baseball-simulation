export const littleHook = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 紐先端
  ctx.beginPath()
  ctx.moveTo(157, 475) // 左上
  ctx.quadraticCurveTo(147, 517, 180, 582) // 左下
  ctx.quadraticCurveTo(183, 588, 182, 578) //
  ctx.quadraticCurveTo(170, 545, 170, 533) //
  ctx.quadraticCurveTo(166, 507, 175, 479) //
  ctx.quadraticCurveTo(166, 470, 157, 475) // 左上
  ctx.fill()
  ctx.moveTo(174, 486) // 左上
  ctx.quadraticCurveTo(154, 518, 182, 579) // 左下
  ctx.stroke()
  ctx.closePath()

  // 左斜め上
  ctx.beginPath()
  ctx.moveTo(157, 465) // 左上
  ctx.quadraticCurveTo(151, 485, 156, 484) // 左下
  ctx.quadraticCurveTo(156, 480, 164, 478) //
  ctx.quadraticCurveTo(160, 475, 157, 465) // 左上
  ctx.fill()
  // 断面
  ctx.moveTo(154, 481) // 左
  ctx.quadraticCurveTo(162, 475, 163, 477) // 左下
  ctx.stroke()
  ctx.closePath()

  // 右斜め上
  ctx.beginPath()
  ctx.moveTo(159, 451) // 左上
  ctx.quadraticCurveTo(149, 464, 172, 491) // 左下
  ctx.quadraticCurveTo(183, 476, 179, 468) // 右下
  ctx.quadraticCurveTo(169, 457, 171, 447) // 左下
  ctx.quadraticCurveTo(169, 449, 159, 451) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 小指袋の中
  ctx.beginPath()
  ctx.moveTo(178, 441) // 左上
  ctx.quadraticCurveTo(182, 467, 193, 472) // 左下
  ctx.quadraticCurveTo(197, 471, 197, 471) // 右下
  ctx.quadraticCurveTo(187, 461, 185, 436) // 右上
  ctx.quadraticCurveTo(178, 441, 178, 441) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
