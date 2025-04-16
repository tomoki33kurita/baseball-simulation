export const littleMachi = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(608, 95) // 上
  ctx.quadraticCurveTo(600, 115, 619, 139) //
  ctx.quadraticCurveTo(678, 205, 694, 297) //
  ctx.quadraticCurveTo(702, 377, 677, 458) //
  ctx.quadraticCurveTo(667, 479, 675, 508) // 下
  ctx.quadraticCurveTo(743, 425, 733, 297) //
  ctx.quadraticCurveTo(724, 210, 680, 153) //
  ctx.quadraticCurveTo(638, 102, 608, 95) // 上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
