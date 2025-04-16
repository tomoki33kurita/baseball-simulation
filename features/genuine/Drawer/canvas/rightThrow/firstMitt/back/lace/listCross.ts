export const listCross = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 左上＿右下
  ctx.beginPath()
  ctx.moveTo(259, 540) // 左上
  ctx.quadraticCurveTo(265, 572, 277, 582) //
  ctx.quadraticCurveTo(282, 588, 297, 592) // 右下
  ctx.quadraticCurveTo(307, 589, 297, 581) // 右上
  ctx.quadraticCurveTo(282, 577, 272, 558) //
  ctx.quadraticCurveTo(264, 541, 259, 540) //
  ctx.fill()
  ctx.moveTo(259, 545) // 左上
  ctx.quadraticCurveTo(266, 552, 272, 569) //
  ctx.quadraticCurveTo(278, 580, 300, 587) //
  ctx.stroke()
  ctx.closePath()

  // 右上＿左下
  ctx.beginPath()
  ctx.moveTo(279, 529) // 右上
  ctx.quadraticCurveTo(250, 551, 271, 582) // 下
  ctx.quadraticCurveTo(272, 584, 271, 581) //
  ctx.quadraticCurveTo(267, 557, 283, 538) //
  ctx.quadraticCurveTo(287, 527, 279, 529) // 右上
  ctx.fill()
  ctx.moveTo(283, 532) // 右上
  ctx.quadraticCurveTo(262, 557, 270, 582) // 下
  ctx.stroke()
}
