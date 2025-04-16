export const backOfThumb = (ctx: CanvasRenderingContext2D, thumbColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = thumbColor

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(483, 397) // 左上
  ctx.quadraticCurveTo(525, 435, 471, 486) //
  ctx.quadraticCurveTo(266, 494, 266, 494) // ベルト＿左上
  ctx.quadraticCurveTo(269, 552, 290, 611) // ベルト＿左下
  ctx.quadraticCurveTo(349, 640, 494, 613) //
  ctx.quadraticCurveTo(539, 587, 571, 504) //
  ctx.quadraticCurveTo(592, 467, 600, 436) //
  ctx.quadraticCurveTo(612, 414, 612, 414) // 右上
  ctx.lineTo(497, 381) //
  ctx.quadraticCurveTo(490, 391, 483, 397) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  // 手口ベルト右辺＿内側
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = stitchColor
  ctx.lineWidth = 1.2
  // 手入れ窓右上＿左
  ctx.moveTo(489, 376) //
  ctx.quadraticCurveTo(476, 390, 476, 390)
  // 手入れ窓右上＿右
  ctx.moveTo(493, 379) //
  ctx.quadraticCurveTo(482, 391, 482, 391)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
}
