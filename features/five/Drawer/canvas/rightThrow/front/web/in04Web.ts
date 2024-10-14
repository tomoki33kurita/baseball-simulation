import { hWebCrossUpperLeft, hWebCrossUpperLeft2, hWebCrossUpperRight } from '../lace/hWebCross'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'

export const in04Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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
  ctx.beginPath()
  ctx.moveTo(237, 242) // 左＿上
  ctx.quadraticCurveTo(265, 269, 265, 269) // 左＿下
  ctx.quadraticCurveTo(310, 212, 310, 212) // 右＿下
  ctx.quadraticCurveTo(303, 146, 303, 146) // 右＿上
  ctx.quadraticCurveTo(279, 165, 269, 187) // 右上_左上
  ctx.quadraticCurveTo(276, 214, 276, 214) // 中央下
  ctx.quadraticCurveTo(263, 195, 263, 195) // 左上_右上
  ctx.quadraticCurveTo(240, 207, 237, 242) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ウェブ横2
  middleSidePartOfWeb(ctx, webColor, stitchColor, 5, 30)

  // ウェブ横1(先端)
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  // stitchここから
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 縦＿左＿上
  ctx.moveTo(241, 237) // 上
  ctx.quadraticCurveTo(267, 262, 267, 262) // 下
  // 縦＿左＿下
  ctx.moveTo(239, 239) // 上
  ctx.quadraticCurveTo(265, 264, 265, 264) // 下
  // 縦＿右＿右
  ctx.moveTo(299, 151) // 上
  ctx.quadraticCurveTo(306, 212, 306, 212) // 下
  // 縦＿右＿左
  ctx.moveTo(296, 153) // 上
  ctx.quadraticCurveTo(303, 215, 303, 215) // 下
  // 内側のv字
  ctx.moveTo(260, 199) // 上
  ctx.quadraticCurveTo(279, 223, 279, 223) // 下
  ctx.quadraticCurveTo(272, 181, 272, 181) // 下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
