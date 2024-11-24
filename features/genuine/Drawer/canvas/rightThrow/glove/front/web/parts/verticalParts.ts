// クロスウェブ等の縦パーツ
export const verticalPartsOfWeb = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(250, 212) // 左＿上
  ctx.quadraticCurveTo(273, 285, 315, 355) // 左＿下
  ctx.quadraticCurveTo(347, 322, 347, 309) // 右＿下
  ctx.quadraticCurveTo(313, 241, 293, 150) // 右＿上
  ctx.quadraticCurveTo(265, 189, 251, 212) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 左＿外
  ctx.moveTo(255, 213) // 上
  ctx.quadraticCurveTo(272, 270, 313, 346) // 下
  // 左上＿内
  ctx.moveTo(257, 208) // 上
  ctx.quadraticCurveTo(276, 270, 316, 344) // 下
  // 右上＿外
  ctx.moveTo(291, 162) // 上
  ctx.quadraticCurveTo(303, 222, 342, 310) // 下
  // 右上＿内
  ctx.moveTo(288, 165) // 上
  ctx.quadraticCurveTo(305, 238, 339, 313) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで
}

export const verticalPartsOfWebWithCenterStitch = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 縦パーツ
  ctx.beginPath()
  ctx.moveTo(250, 212) // 左＿上
  ctx.quadraticCurveTo(273, 285, 315, 355) // 左＿下
  ctx.quadraticCurveTo(347, 322, 347, 309) // 右＿下
  ctx.quadraticCurveTo(313, 241, 293, 150) // 右＿上
  ctx.quadraticCurveTo(265, 189, 251, 212) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 左＿外
  ctx.moveTo(266, 191) // 上
  ctx.quadraticCurveTo(289, 270, 323, 332) // 下
  // 左上＿内
  ctx.moveTo(269, 188) // 上
  ctx.quadraticCurveTo(294, 275, 326, 329) // 下
  // 右上＿外
  ctx.moveTo(276, 177) // 上
  ctx.quadraticCurveTo(297, 260, 334, 322) // 下
  // 右上＿内
  ctx.moveTo(273, 180) // 上
  ctx.quadraticCurveTo(292, 258, 330, 324) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで
}
