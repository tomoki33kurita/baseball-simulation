export const weltingOfFirstBack = (ctx: CanvasRenderingContext2D, hamidashiColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = hamidashiColor

  // 親指
  ctx.beginPath()
  ctx.moveTo(737, 279) // 上_左
  ctx.quadraticCurveTo(619, 401, 562, 556) // 下_左
  ctx.quadraticCurveTo(568, 550, 569, 550) // 下_右
  ctx.quadraticCurveTo(625, 401, 739, 283) // 上_右
  ctx.quadraticCurveTo(737, 279, 737, 279) // 上_左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 人差指
  ctx.beginPath()
  ctx.moveTo(510, 20) // 左上
  ctx.quadraticCurveTo(455, 114, 430, 225) // 左下
  ctx.quadraticCurveTo(435, 225, 435, 225) // 右下
  ctx.quadraticCurveTo(461, 112, 515, 20) // 右上
  ctx.quadraticCurveTo(510, 20, 510, 20) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 中指
  ctx.beginPath()
  ctx.moveTo(372, 39) // 左上
  ctx.quadraticCurveTo(279, 390, 402, 603) // 左下
  ctx.quadraticCurveTo(405, 592, 403, 592) // 右下
  ctx.quadraticCurveTo(287, 390, 377, 36) // 右上
  ctx.quadraticCurveTo(372, 39, 372, 39) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 薬指
  ctx.beginPath()
  ctx.moveTo(276, 94) // 左上
  ctx.quadraticCurveTo(228, 410, 348, 590) // 左下
  ctx.quadraticCurveTo(355, 589, 355, 589) // 右下
  ctx.quadraticCurveTo(232, 410, 282, 88) // 右上
  ctx.quadraticCurveTo(276, 94, 276, 94) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 小指
  ctx.beginPath()
  ctx.moveTo(213, 150) // 小指先端左
  ctx.quadraticCurveTo(157, 394, 342, 590) // 小指末端左
  ctx.quadraticCurveTo(344, 590, 344, 590) // 小指末端右
  ctx.quadraticCurveTo(164, 394, 216, 150) // 小指先端右
  ctx.quadraticCurveTo(213, 150, 213, 150) // 小指先端左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
