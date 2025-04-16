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
  ctx.strokeStyle = '#282828'
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
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 左＿外
  ctx.moveTo(276, 178) // 上
  ctx.quadraticCurveTo(297, 219, 297, 219) //
  ctx.quadraticCurveTo(281, 213, 281, 213) //
  ctx.quadraticCurveTo(303, 257, 321, 282) //
  ctx.quadraticCurveTo(306, 278, 306, 278) //
  ctx.quadraticCurveTo(327, 325, 327, 325) //
  ctx.quadraticCurveTo(325, 334, 325, 334) //
  ctx.quadraticCurveTo(296, 273, 296, 273) //
  ctx.quadraticCurveTo(307, 272, 307, 272) //
  ctx.quadraticCurveTo(269, 203, 269, 203) //
  ctx.quadraticCurveTo(284, 207, 284, 207) //
  ctx.quadraticCurveTo(272, 184, 272, 184) //
  // ctx.quadraticCurveTo() //

  // // 左上＿内
  // ctx.moveTo() // 上
  // ctx.quadraticCurveTo() // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
  // stitchここまで
}
