export const bindingOfWrist = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 手口
  ctx.beginPath()
  ctx.moveTo(340, 588) // 左上
  ctx.quadraticCurveTo(434, 600, 529, 585) //右上
  ctx.quadraticCurveTo(525, 597, 509, 601) //右下
  ctx.quadraticCurveTo(425, 607, 362, 602) //左下
  ctx.quadraticCurveTo(343, 601, 340, 588) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 手窓
  ctx.moveTo(340, 587) // 手口＿左
  ctx.quadraticCurveTo(434, 598, 529, 585) //右上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
