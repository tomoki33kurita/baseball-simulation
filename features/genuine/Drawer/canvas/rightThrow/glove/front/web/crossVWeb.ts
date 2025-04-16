import { hWebCrossUpperLeft, hWebCrossUpperLeft2, hWebCrossUpperRight } from '../lace/hWebCross'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'

export const crossVWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // ウェブ_縦
  verticalPartOfVWeb(ctx, web2Color, stitchColor)
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // ウェブ_横
  middleSidePartOfWeb(ctx, webColor, stitchColor, 5, 10)
}

const verticalPartOfVWeb = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string) => {
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // ウェブ_縦
  ctx.beginPath()
  ctx.moveTo(238, 237) // 左＿上
  ctx.quadraticCurveTo(266, 287, 317, 352) // 左＿下
  ctx.quadraticCurveTo(333, 324, 333, 324) // 右＿下
  ctx.quadraticCurveTo(284, 257, 263, 189) // 右＿上
  ctx.quadraticCurveTo(235, 234, 238, 237) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(302, 145) // 左＿上
  ctx.quadraticCurveTo(321, 206, 333, 325) // 左＿下
  ctx.quadraticCurveTo(353, 288, 353, 288) // 右＿下
  ctx.quadraticCurveTo(352, 175, 337, 115) // 右＿上
  ctx.quadraticCurveTo(319, 124, 302, 145) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.2
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 左＿左
  ctx.moveTo(240, 233) // 上
  ctx.quadraticCurveTo(267, 282, 313, 342) // 下
  // 左＿右
  ctx.moveTo(263, 198) // 上
  ctx.quadraticCurveTo(280, 261, 324, 319) // 下
  // 右＿左
  ctx.moveTo(306, 144) // 上
  ctx.quadraticCurveTo(325, 215, 332, 309) // 下
  // 右＿右
  ctx.moveTo(333, 121) // 上
  ctx.quadraticCurveTo(348, 184, 349, 279) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}
