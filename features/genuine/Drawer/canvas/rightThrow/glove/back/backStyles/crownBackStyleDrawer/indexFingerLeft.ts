export const indexFingerLeft = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(513, 20) // 右上
  ctx.quadraticCurveTo(486, 22, 470, 41)
  ctx.quadraticCurveTo(380, 177, 377, 360) // 左下
  ctx.quadraticCurveTo(400, 357, 402, 356) // 右下
  ctx.quadraticCurveTo(424, 170, 513, 20) // 右下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
