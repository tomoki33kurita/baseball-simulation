export const palm = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(465, 143) // 左上
  ctx.quadraticCurveTo(459, 163, 455, 190) // 左下
  ctx.quadraticCurveTo(470, 252, 533, 307) //
  ctx.quadraticCurveTo(562, 329, 582, 336) //
  ctx.quadraticCurveTo(610, 347, 621, 327) // 右下
  ctx.quadraticCurveTo(574, 253, 527, 201) //
  ctx.quadraticCurveTo(494, 158, 472, 140) //
  ctx.quadraticCurveTo(465, 143, 465, 143) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.moveTo(472, 140) // 左上
  ctx.quadraticCurveTo(466, 147, 455, 189) // 左下
  ctx.stroke()
  ctx.closePath()
}
