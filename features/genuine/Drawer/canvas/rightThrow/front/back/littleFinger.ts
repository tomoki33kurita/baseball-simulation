export const littleBackOut = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 輪郭
  ctx.beginPath()
  ctx.moveTo(736, 205) // 左上
  ctx.quadraticCurveTo(659, 440, 659, 440) // 左下
  ctx.quadraticCurveTo(658, 457, 658, 457) // 右下
  ctx.quadraticCurveTo(665, 455, 665, 455) // 右下
  ctx.quadraticCurveTo(690, 413, 722, 324) // 右中間
  ctx.quadraticCurveTo(753, 223, 744, 213) // 右上
  ctx.quadraticCurveTo(739, 203, 736, 205) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const littleBackRingSide = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 輪郭
  ctx.beginPath()
  ctx.moveTo(715, 181) // 左上
  ctx.quadraticCurveTo(734, 200, 734, 200) // 左下
  ctx.quadraticCurveTo(743, 206, 743, 206) // 右下
  ctx.quadraticCurveTo(734, 179, 715, 181) // 右下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
