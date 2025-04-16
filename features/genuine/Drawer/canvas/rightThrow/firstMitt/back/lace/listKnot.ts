export const listKnot = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 紐先端＿上
  ctx.beginPath()
  ctx.moveTo(233, 496) // 左上
  ctx.quadraticCurveTo(243, 520, 241, 536) // 左下
  ctx.quadraticCurveTo(248, 555, 248, 555) // 右下
  ctx.quadraticCurveTo(256, 538, 240, 494) // 右上
  ctx.quadraticCurveTo(233, 496, 233, 496) // 右上
  ctx.fill()
  ctx.moveTo(238, 495) // 左上
  ctx.quadraticCurveTo(252, 528, 246, 550) // 左下
  ctx.stroke()

  // 結び目 左上
  ctx.beginPath()
  ctx.moveTo(234, 545) // 左上
  ctx.quadraticCurveTo(233, 555, 240, 560) //
  ctx.quadraticCurveTo(243, 568, 244, 568) // 左下
  ctx.quadraticCurveTo(253, 573, 256, 568) // 右下
  ctx.quadraticCurveTo(242, 543, 242, 532) // 右上
  ctx.quadraticCurveTo(237, 545, 234, 545) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.moveTo(239, 537) // 上
  ctx.quadraticCurveTo(240, 550, 253, 570) //
  ctx.stroke()

  // 結び目 右上
  ctx.moveTo(253, 542) // 左上
  ctx.quadraticCurveTo(244, 552, 255, 567) // 下
  ctx.quadraticCurveTo(259, 561, 259, 561) // 右下
  ctx.quadraticCurveTo(258, 551, 253, 542) // 左上
  ctx.moveTo(254, 546) // 上
  ctx.quadraticCurveTo(252, 562, 252, 562) // 下
  ctx.fill()
  ctx.closePath()

  // 結び目 下
  ctx.moveTo(239, 561) // 左上
  ctx.quadraticCurveTo(234, 573, 242, 574) //
  ctx.quadraticCurveTo(247, 576, 249, 581) //
  ctx.quadraticCurveTo(259, 586, 263, 578) //
  ctx.quadraticCurveTo(261, 572, 262, 562) // 右上
  ctx.quadraticCurveTo(259, 560, 257, 567) //
  ctx.moveTo(244, 575) // 上
  ctx.quadraticCurveTo(255, 580, 261, 571) //
  ctx.fill()
  ctx.stroke()

  // 紐先端＿下
  ctx.moveTo(254, 584) // 左上
  ctx.quadraticCurveTo(277, 617, 277, 617) // 左下
  ctx.quadraticCurveTo(283, 617, 283, 617) // 右下
  ctx.quadraticCurveTo(269, 600, 262, 578) // 右上
  ctx.moveTo(260, 583) // 左上
  ctx.quadraticCurveTo(273, 610, 281, 617) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
