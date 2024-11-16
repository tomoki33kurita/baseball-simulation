export const knotUpward = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8 // 太さを揃えるために意図的に太め
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // 先端紐
  ctx.moveTo(747, 233) // 左上
  ctx.quadraticCurveTo(724, 323, 724, 323) // 左下
  ctx.quadraticCurveTo(727, 328, 733, 325) // 右下
  ctx.quadraticCurveTo(757, 234, 757, 234) // 右上
  ctx.quadraticCurveTo(747, 233, 747, 233)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  // 二段目の結び目
  ctx.moveTo(724, 323) // 左上
  ctx.quadraticCurveTo(720, 336, 720, 336) // 左下
  ctx.quadraticCurveTo(725, 340, 733, 339)
  ctx.quadraticCurveTo(734, 326, 734, 326) // 右上
  ctx.quadraticCurveTo(727, 328, 724, 323)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 一番下の結び目
  ctx.moveTo(720, 336) // 左上
  ctx.quadraticCurveTo(714, 350, 714, 350) // 左下
  ctx.quadraticCurveTo(725, 350, 733, 339) // 右上
  ctx.quadraticCurveTo(725, 342, 720, 336)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const knotDownward = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 紐部分
  ctx.beginPath()
  ctx.moveTo(167, 283) // 左上
  ctx.quadraticCurveTo(151, 314, 143, 379) // 左下
  ctx.quadraticCurveTo(152, 384, 152, 384)
  ctx.quadraticCurveTo(155, 331, 179, 289) // 右上
  ctx.quadraticCurveTo(167, 283, 167, 283)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 紐先端 側面ライン
  ctx.moveTo(174, 289) // 右上
  ctx.quadraticCurveTo(154, 330, 149, 382) // 下
  ctx.stroke()

  // 結び目左
  ctx.beginPath()
  ctx.moveTo(168, 268) // 左上
  ctx.quadraticCurveTo(160, 281, 169, 285) // 左下
  ctx.quadraticCurveTo(174, 269, 174, 269)
  ctx.quadraticCurveTo(173, 266, 168, 268)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目右
  ctx.beginPath()
  ctx.moveTo(176, 265) // 左上
  ctx.quadraticCurveTo(167, 277, 172, 287) // 左下
  ctx.quadraticCurveTo(178, 290, 178, 290)
  ctx.quadraticCurveTo(186, 271, 188, 267)
  ctx.quadraticCurveTo(180, 262, 176, 265)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目右 側面ライン
  ctx.beginPath()
  ctx.moveTo(184, 267) // 右上
  ctx.quadraticCurveTo(177, 276, 178, 290) // 下
  ctx.stroke()
}
