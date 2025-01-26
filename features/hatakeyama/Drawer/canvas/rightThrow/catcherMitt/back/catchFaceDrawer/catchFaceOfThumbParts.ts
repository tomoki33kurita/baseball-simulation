export const catchFaceOfThumbParts = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 親指芯部分＿捕球面
  ctx.beginPath()
  ctx.moveTo(597, 340) // 左下
  ctx.quadraticCurveTo(620, 278, 702, 283) // 右上
  ctx.quadraticCurveTo(637, 372, 597, 340) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
