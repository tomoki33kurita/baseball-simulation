import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'

const verticalPartOfVWeb = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string) => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // ウェブ_縦
  ctx.beginPath()
  ctx.moveTo(238, 237) // 左＿上
  ctx.quadraticCurveTo(310, 358, 310, 358) // 左＿下
  ctx.quadraticCurveTo(328, 330, 328, 330) // 右＿下
  ctx.quadraticCurveTo(261, 196, 261, 196) // 右＿上
  ctx.quadraticCurveTo(238, 237, 238, 237) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(293, 156) // 左＿上
  ctx.quadraticCurveTo(345, 305, 345, 305) // 左＿下
  ctx.quadraticCurveTo(364, 273, 364, 273) // 右＿下
  ctx.quadraticCurveTo(323, 128, 323, 128) // 右＿上
  ctx.quadraticCurveTo(293, 156, 293, 156) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 左＿左
  ctx.moveTo(240, 233) // 上
  ctx.quadraticCurveTo(311, 351, 311, 351) // 下
  // 左＿右
  ctx.moveTo(259, 202) // 上
  ctx.quadraticCurveTo(323, 328, 323, 328) // 下
  // 右＿左
  ctx.moveTo(298, 157) // 上
  ctx.quadraticCurveTo(346, 296, 346, 296) // 下
  // 右＿右
  ctx.moveTo(320, 133) // 上
  ctx.quadraticCurveTo(358, 267, 358, 267) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

export const ladderWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  // ウェブ_縦
  verticalPartOfVWeb(ctx, webColor, stitchColor)
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // ウェブ_横＿中間
  middleSidePartOfWeb(ctx, webColor, stitchColor, 0, -10)
  middleSidePartOfWeb(ctx, webColor, stitchColor, 35, 40)
}
