export const listLining = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // ウェブ先端
  ctx.beginPath()
  ctx.moveTo(339, 560) // 左＿左上
  ctx.quadraticCurveTo(337, 573, 337, 573) // 左＿上
  ctx.quadraticCurveTo(352, 582, 367, 570) // 左＿上
  ctx.quadraticCurveTo(339, 560, 339, 560) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
