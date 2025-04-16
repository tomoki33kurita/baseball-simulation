export const catchFaceOfShallowWeb = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor

  ctx.beginPath()
  ctx.moveTo(430, 158) // 左上
  ctx.quadraticCurveTo(412, 191, 426, 228) // 左下
  ctx.quadraticCurveTo(458, 357, 593, 358) // 右下
  ctx.quadraticCurveTo(626, 356, 649, 338) // 右上
  ctx.quadraticCurveTo(430, 158, 430, 158) // 左上
  ctx.fill()
  // ctx.moveTo(472, 140) // 左上
  // ctx.quadraticCurveTo(466, 147, 455, 189) // 左下
  ctx.stroke()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 内側
  ctx.moveTo(445, 227) //左上
  ctx.quadraticCurveTo(508, 291, 576, 341) //右上
  // 外側
  ctx.moveTo(444, 218) //左上
  ctx.quadraticCurveTo(508, 283, 584, 340) //右上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}
