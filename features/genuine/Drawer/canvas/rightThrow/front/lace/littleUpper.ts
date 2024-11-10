export const littleUpper = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.beginPath()
  ctx.moveTo(599, 362) // 左上
  ctx.quadraticCurveTo(592, 370, 592, 380) // 左下
  ctx.quadraticCurveTo(591, 386, 597, 384) // 右下
  ctx.quadraticCurveTo(606, 369, 606, 369) // 右上
  ctx.quadraticCurveTo(604, 360, 599, 362) // 左下
  ctx.fill()
  ctx.moveTo(605, 370) //上
  ctx.quadraticCurveTo(598, 374, 597, 384) // 左下
  ctx.stroke()
  ctx.closePath()
}
