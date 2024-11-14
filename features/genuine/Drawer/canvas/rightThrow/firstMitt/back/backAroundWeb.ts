export const backAroundWeb = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(378, 118) // 左上
  ctx.quadraticCurveTo(335, 175, 383, 263) //
  ctx.quadraticCurveTo(432, 329, 494, 380) //
  ctx.quadraticCurveTo(525, 408, 567, 431) //
  ctx.quadraticCurveTo(608, 444, 634, 383) //
  ctx.quadraticCurveTo(662, 329, 669, 293) // 右上
  ctx.quadraticCurveTo(626, 350, 599, 355) //
  ctx.quadraticCurveTo(515, 310, 449, 198) //
  ctx.quadraticCurveTo(438, 141, 448, 75) // 左側の右上
  ctx.quadraticCurveTo(407, 93, 378, 118) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
