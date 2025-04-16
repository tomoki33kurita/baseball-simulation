export const thumbBackOut = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color || '#FFFFFF'

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(212, 210) // 左上
  ctx.quadraticCurveTo(191, 243, 212, 286) //
  ctx.quadraticCurveTo(264, 395, 286, 453) // 左下
  ctx.quadraticCurveTo(288, 465, 288, 465) //
  ctx.quadraticCurveTo(346, 572, 346, 572) // 掛け紐の結び目_下
  ctx.quadraticCurveTo(360, 589, 383, 622) //
  ctx.quadraticCurveTo(406, 611, 390, 586) // ヘリ革の下_突入
  ctx.quadraticCurveTo(355, 468, 355, 468) //
  ctx.quadraticCurveTo(306, 336, 235, 229) // ヘリ革の下
  ctx.quadraticCurveTo(212, 210, 212, 210) // ヘリ革の下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const backAroundWeb = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color || '#FFFFFF'

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(180, 201) // 左上
  ctx.quadraticCurveTo(171, 212, 179, 234) //
  ctx.quadraticCurveTo(204, 297, 209, 315) //
  ctx.quadraticCurveTo(221, 332, 238, 359) //
  ctx.quadraticCurveTo(252, 400, 285, 450) // 左下
  ctx.quadraticCurveTo(225, 254, 212, 211) // 右上
  ctx.quadraticCurveTo(203, 190, 180, 201) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
