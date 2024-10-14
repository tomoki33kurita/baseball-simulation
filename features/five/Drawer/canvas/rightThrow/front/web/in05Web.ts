import { hWebCrossUpperLeft, hWebCrossUpperLeft2, hWebCrossUpperRight } from '../lace/hWebCross'
import { laceParts6 } from './parts/laceParts'
import { topSidePartOfWeb } from './parts/sideParts'

export const in05Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // ウェブ先端
  ctx.beginPath()
  ctx.moveTo(194, 245) // 左＿左上
  ctx.quadraticCurveTo(225, 242, 230, 262) // 左＿右下
  ctx.quadraticCurveTo(271, 320, 271, 330) // 左＿左下
  ctx.quadraticCurveTo(305, 250, 370, 210) // 右＿右下
  ctx.quadraticCurveTo(354, 104, 354, 104) // 右＿下
  ctx.quadraticCurveTo(352, 87, 352, 68) // 右＿下
  ctx.quadraticCurveTo(351, 58, 343, 52) // 右＿上
  ctx.quadraticCurveTo(223, 110, 194, 245) // 右＿下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  hWebCrossUpperLeft(ctx, laceColor, 0, 0) // クロス部分の右
  hWebCrossUpperLeft(ctx, laceColor, -3, 3) // クロス部分の右
  hWebCrossUpperRight(ctx, laceColor, 0, 0) // クロス部分の右
  hWebCrossUpperRight(ctx, laceColor, -3, 3) // クロス部分の右
  hWebCrossUpperLeft2(ctx, laceColor, 0, 0) // クロス部分の左
  hWebCrossUpperLeft2(ctx, laceColor, -3, 3) // クロス部分の左

  // stitchここから
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // ウェブ上部＿横ライン
  ctx.moveTo(337, 87) // 右上
  ctx.quadraticCurveTo(250, 140, 231, 218) // 左下
  ctx.moveTo(339, 91) // 右上
  ctx.quadraticCurveTo(245, 153, 227, 248) // 左下
  ctx.moveTo(339, 94) // 右上
  ctx.quadraticCurveTo(245, 158, 230, 255) // 左下

  // 中央の四角_上辺
  ctx.moveTo(232, 266) // 左下
  ctx.quadraticCurveTo(273, 160, 350, 113) // 右上
  ctx.moveTo(235, 270) // 左下
  ctx.quadraticCurveTo(275, 165, 350, 116) // 右上

  // 中央の四角_右辺
  ctx.moveTo(350, 110) // 右上
  ctx.quadraticCurveTo(356, 171, 357, 171) // 左下
  ctx.moveTo(346, 113) // 右上
  ctx.quadraticCurveTo(352, 174, 353, 174) // 左下

  // 中央の四角_下辺
  ctx.moveTo(256, 297) // 右上
  ctx.quadraticCurveTo(277, 233, 355, 168) // 左下
  ctx.moveTo(258, 300) // 右上
  ctx.quadraticCurveTo(280, 240, 355, 172) // 左下

  // 一番したの横ライン
  ctx.moveTo(266, 308) // 左上
  ctx.quadraticCurveTo(302, 233, 362, 196) // 右上
  ctx.moveTo(268, 312) // 左上
  ctx.quadraticCurveTo(304, 237, 364, 200) // 右上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
