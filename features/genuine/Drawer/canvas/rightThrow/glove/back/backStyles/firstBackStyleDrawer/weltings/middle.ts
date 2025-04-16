export const weltingOfFirstBackWithMiddleHole = (ctx: CanvasRenderingContext2D, hamidashiColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = hamidashiColor

  // 親指
  ctx.beginPath()
  ctx.moveTo(737, 279) // 上_左
  ctx.quadraticCurveTo(619, 401, 562, 556) // 中_左
  ctx.quadraticCurveTo(568, 550, 569, 550) // 下_右
  ctx.quadraticCurveTo(625, 401, 739, 283) // 上_右
  ctx.quadraticCurveTo(737, 279, 737, 279) // 上_左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 人差指
  ctx.beginPath()
  ctx.moveTo(510, 20) // 左上
  ctx.quadraticCurveTo(352, 300, 426, 594) // 左下
  ctx.quadraticCurveTo(432, 594, 432, 594) // 右下
  ctx.quadraticCurveTo(358, 300, 515, 20) // 右上
  ctx.quadraticCurveTo(510, 20, 510, 20) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 中指
  ctx.beginPath()
  ctx.moveTo(372, 39) // 左上
  ctx.quadraticCurveTo(342, 134, 338, 224) // 左下
  ctx.quadraticCurveTo(343, 225, 343, 225) // 右下
  ctx.quadraticCurveTo(347, 135, 379, 36) // 右上
  ctx.quadraticCurveTo(374, 39, 374, 39) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 薬指
  ctx.beginPath()
  ctx.moveTo(276, 94) // 左上
  ctx.quadraticCurveTo(228, 410, 348, 590) // 左下
  ctx.quadraticCurveTo(355, 589, 354, 589) // 右下
  ctx.quadraticCurveTo(233, 410, 283, 88) // 右上
  ctx.quadraticCurveTo(276, 94, 276, 94) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 小指
  ctx.beginPath()
  ctx.moveTo(213, 150) // 小指先端左
  ctx.quadraticCurveTo(157, 394, 342, 590) // 小指末端左
  ctx.quadraticCurveTo(344, 590, 344, 590) // 小指末端右
  ctx.quadraticCurveTo(160, 394, 216, 150) // 小指先端右
  ctx.quadraticCurveTo(213, 150, 213, 150) // 小指先端左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
