export const listCross = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  //  左上-右下
  ctx.beginPath()
  ctx.moveTo(260, 562) // 左上
  ctx.quadraticCurveTo(251, 564, 254, 574) //
  ctx.quadraticCurveTo(258, 598, 274, 611) //
  ctx.quadraticCurveTo(293, 613, 288, 605) // 右下
  ctx.quadraticCurveTo(273, 601, 265, 572) //
  ctx.quadraticCurveTo(265, 562, 260, 562) //
  ctx.fill()
  ctx.moveTo(260, 563) // 上
  ctx.quadraticCurveTo(269, 603, 288, 609) // 下
  ctx.stroke()
  ctx.closePath()
  //  左下-右上
  ctx.beginPath()
  ctx.moveTo(278, 563) // 右上＿左
  ctx.quadraticCurveTo(246, 582, 250, 596) //
  ctx.quadraticCurveTo(254, 614, 259, 601) //
  ctx.quadraticCurveTo(270, 576, 286, 572) //
  ctx.quadraticCurveTo(292, 563, 278, 563) //
  ctx.fill()
  ctx.moveTo(287, 567) // 右上
  ctx.quadraticCurveTo(261, 580, 254, 605) // 左下
  ctx.stroke()
  ctx.closePath()
}
