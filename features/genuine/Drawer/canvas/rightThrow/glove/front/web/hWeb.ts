import { hWebCrossUpperLeft, hWebCrossUpperLeft2, hWebCrossUpperRight } from '../lace/hWebCross'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'

export const hWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
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
  ctx.fillStyle = web2Color
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
  ctx.moveTo(245, 232) // 上
  ctx.quadraticCurveTo(265, 267, 265, 267)
  ctx.moveTo(246, 227) // 上
  ctx.quadraticCurveTo(266, 262, 266, 262)

  // // 縦＿右
  ctx.moveTo(280, 174) // 上
  ctx.quadraticCurveTo(298, 225, 298, 225)
  ctx.moveTo(277, 174) // 上
  ctx.quadraticCurveTo(295, 225, 295, 225)
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
