export const backOfIndexToLittle = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(378, 118) // 右上
  ctx.quadraticCurveTo(318, 150, 294, 185) //
  ctx.quadraticCurveTo(275, 209, 260, 243) //
  ctx.quadraticCurveTo(235, 307, 227, 354) //
  ctx.quadraticCurveTo(222, 402, 211, 414) // 小指掛け紐に到達
  ctx.quadraticCurveTo(221, 545, 283, 617) // 左下
  ctx.lineTo(291, 607)
  ctx.lineTo(257, 478)
  ctx.lineTo(278, 414)
  ctx.lineTo(360, 380)
  ctx.lineTo(485, 395) // 右下の下
  ctx.lineTo(485, 395) // 右下の上
  ctx.lineTo(497, 379) // 右下の上
  ctx.lineTo(378, 118) // 右上＿開始地点
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
