import { hWebCrossUpperLeft, hWebCrossUpperLeft2, hWebCrossUpperRight } from '../lace/hWebCross'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'

export const cross3Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  // 捕球面とウェブ横2を繋ぐ革紐
  hWebCrossUpperLeft(ctx, laceColor, 0, 0) // クロス部分の右
  hWebCrossUpperLeft(ctx, laceColor, -3, 3) // クロス部分の右
  hWebCrossUpperRight(ctx, laceColor, 0, 0) // クロス部分の右
  hWebCrossUpperRight(ctx, laceColor, -3, 3) // クロス部分の右
  hWebCrossUpperLeft2(ctx, laceColor, 0, 0) // クロス部分の左
  hWebCrossUpperLeft2(ctx, laceColor, -3, 3) // クロス部分の左
  // ウェブ縦
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(240, 233) // 左＿上
  ctx.quadraticCurveTo(263, 274, 263, 274) // 左＿下
  ctx.quadraticCurveTo(301, 221, 301, 221) // 右＿下
  ctx.quadraticCurveTo(283, 168, 283, 168) // 右＿上
  ctx.quadraticCurveTo(254, 199, 240, 233) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ウェブ横2
  middleSidePartOfWeb(ctx, webColor, stitchColor, 5, 30)

  // ウェブ横1(先端)
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  // stitchここから
  ctx.lineWidth = 1.2
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.setLineDash([3, 3])
  // // 縦＿左
  ctx.moveTo(266, 191) // 上
  ctx.quadraticCurveTo(289, 222, 289, 222)
  ctx.quadraticCurveTo(265, 224, 265, 224)
  ctx.quadraticCurveTo(283, 242, 283, 242)
  ctx.moveTo(261, 199) // 上
  ctx.quadraticCurveTo(273, 215, 273, 215)
  ctx.quadraticCurveTo(251, 217, 251, 217)
  ctx.quadraticCurveTo(276, 249, 276, 249)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
