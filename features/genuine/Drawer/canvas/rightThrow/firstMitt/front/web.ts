export const webTop = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(187, 187) // 左上
  ctx.quadraticCurveTo(206, 178, 216, 190) //
  ctx.quadraticCurveTo(247, 211, 260, 239) // 左下
  ctx.quadraticCurveTo(288, 221, 313, 197) // 下辺中央
  ctx.quadraticCurveTo(370, 153, 383, 147) // 右下
  ctx.quadraticCurveTo(370, 130, 366, 107) // 右辺中央
  ctx.quadraticCurveTo(356, 68, 351, 64) // 右上
  ctx.quadraticCurveTo(294, 82, 263, 110) // 上辺中央
  ctx.quadraticCurveTo(219, 139, 187, 187) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const webBottom = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ヘリ革
  ctx.beginPath()
  ctx.moveTo(262, 246) // 左上
  ctx.quadraticCurveTo(286, 282, 301, 313) // 左下
  ctx.quadraticCurveTo(413, 224, 416, 221) // 右下
  ctx.quadraticCurveTo(411, 207, 406, 204) //
  ctx.quadraticCurveTo(400, 170, 400, 170) //
  ctx.quadraticCurveTo(395, 152, 387, 152) // 右上
  ctx.quadraticCurveTo(343, 181, 332, 196) // 上辺中央
  ctx.quadraticCurveTo(283, 238, 262, 246) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
