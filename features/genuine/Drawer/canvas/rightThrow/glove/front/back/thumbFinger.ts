export const thumbBackOut = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 輪郭
  ctx.beginPath()
  ctx.moveTo(182, 302) // 左上
  ctx.quadraticCurveTo(216, 373, 262, 475) // 左下
  ctx.quadraticCurveTo(264, 465, 273, 459) // 右下
  ctx.quadraticCurveTo(197, 288, 197, 288) // 右上
  ctx.quadraticCurveTo(179, 281, 182, 302) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const thumbBackWebSide = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 輪郭
  ctx.beginPath()
  ctx.moveTo(187, 263) // 左上
  ctx.quadraticCurveTo(181, 282, 181, 282) // 左下
  ctx.quadraticCurveTo(195, 279, 195, 279) // 右下
  ctx.quadraticCurveTo(197, 258, 197, 258) // 右上
  ctx.quadraticCurveTo(187, 263, 187, 263) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
