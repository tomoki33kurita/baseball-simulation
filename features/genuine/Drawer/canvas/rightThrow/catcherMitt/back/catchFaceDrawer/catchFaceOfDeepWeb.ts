export const catchFaceOfDeepWeb = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(463, 184) // 左上
  ctx.quadraticCurveTo(426, 228, 426, 228) // 左下
  ctx.quadraticCurveTo(455, 336, 568, 360) // 右下
  ctx.quadraticCurveTo(599, 347, 616, 319) // 右上
  ctx.quadraticCurveTo(463, 184, 463, 184) // 左上
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
  ctx.moveTo(430, 241) // 左下
  ctx.quadraticCurveTo(445, 227, 445, 227) //左上
  ctx.quadraticCurveTo(508, 291, 576, 341) //右上
  ctx.quadraticCurveTo(559, 357, 559, 356) //右下
  // 外側
  ctx.moveTo(428, 233) // 左下
  ctx.quadraticCurveTo(443, 220, 444, 218) //左上
  ctx.quadraticCurveTo(508, 283, 584, 340) //右上
  ctx.quadraticCurveTo(578, 351, 567, 357) //右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}
