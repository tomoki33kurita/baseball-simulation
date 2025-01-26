export const littleMachi = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
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

export const littleTarget = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(346, 119) // 左下
  ctx.quadraticCurveTo(449, 111, 613, 130) // 右下
  ctx.quadraticCurveTo(605, 94, 605, 94) // 右上
  ctx.quadraticCurveTo(495, 66, 368, 88) // 左上
  // ctx.quadraticCurveTo() //
  // ctx.quadraticCurveTo() //
  ctx.quadraticCurveTo(344, 100, 346, 119) // 上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
