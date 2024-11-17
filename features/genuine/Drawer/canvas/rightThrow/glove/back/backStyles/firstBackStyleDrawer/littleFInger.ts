export const firstBackLittleFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(211, 161) // 上
  ctx.quadraticCurveTo(185, 287, 216, 401) //
  ctx.quadraticCurveTo(245, 498, 340, 588) // 下
  ctx.quadraticCurveTo(170, 415, 211, 161) // 上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
