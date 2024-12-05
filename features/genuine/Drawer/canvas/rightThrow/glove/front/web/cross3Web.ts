import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'

export const cross3Web = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = web2Color
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

  // ウェブ横2
  middleSidePartOfWeb(ctx, webColor, stitchColor, 5, 30)

  // ウェブ横1(先端)
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
}
