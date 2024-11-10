export const canvasResetter = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath()
  ctx.fillStyle = '#EEEEEE'
  ctx.moveTo(0, 0)
  ctx.lineTo(0, 680)
  ctx.lineTo(880, 680)
  ctx.lineTo(880, 0)
  ctx.lineTo(0, 0)
  ctx.fill()
  ctx.closePath()
}
