// 小指側
export const ringBackLittleSide = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 輪郭
  ctx.beginPath()
  ctx.moveTo(661, 122) // 左上
  ctx.quadraticCurveTo(678, 158, 665, 201) // 革紐手前
  ctx.quadraticCurveTo(601, 342, 601, 342) // 左下
  ctx.quadraticCurveTo(609, 347, 609, 347) // 右下
  ctx.quadraticCurveTo(627, 329, 645, 295) // 小指との溝
  ctx.quadraticCurveTo(662, 243, 672, 199) // 革紐向こう側
  ctx.quadraticCurveTo(679, 178, 679, 153)
  ctx.quadraticCurveTo(673, 125, 661, 122) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
