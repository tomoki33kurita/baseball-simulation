export const boomerang = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color || '#ffffff'

  ctx.beginPath()
  ctx.moveTo(522, 43) // 右上
  ctx.quadraticCurveTo(508, 28, 458, 49) //
  ctx.quadraticCurveTo(350, 84, 275, 203) //
  ctx.quadraticCurveTo(233, 274, 216, 405) // 左下
  ctx.lineTo(503, 61) // 右上の下
  ctx.quadraticCurveTo(521, 54, 522, 43) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
