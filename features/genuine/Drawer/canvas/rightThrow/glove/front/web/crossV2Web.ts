import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'

export const crossV2Web = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // ウェブ_縦
  verticalPartOfVWeb(ctx, web2Color, stitchColor)
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // ウェブ_横
  middleSidePartOfWeb(ctx, webColor, stitchColor, 5, 10)

  onCatchFaceParts(ctx, webColor)
}

const verticalPartOfVWeb = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string) => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // ウェブ_縦
  ctx.beginPath()
  ctx.moveTo(238, 237) // 左＿上
  ctx.quadraticCurveTo(308, 354, 308, 354) // 左＿下
  ctx.quadraticCurveTo(325, 326, 325, 326) // 右＿下
  ctx.quadraticCurveTo(261, 196, 261, 196) // 右＿上
  ctx.quadraticCurveTo(238, 237, 238, 237) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.moveTo(293, 156) // 左＿上
  ctx.quadraticCurveTo(341, 296, 341, 296) // 左＿下
  ctx.quadraticCurveTo(360, 268, 360, 268) // 右＿下
  ctx.quadraticCurveTo(323, 128, 323, 128) // 右＿上
  ctx.quadraticCurveTo(293, 156, 293, 156) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.2
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 左＿左
  ctx.moveTo(240, 233) // 上
  ctx.quadraticCurveTo(301, 338, 303, 338) // 下
  // 左＿右
  ctx.moveTo(259, 202) // 上
  ctx.quadraticCurveTo(316, 314, 314, 314) // 下
  // 右＿左
  ctx.moveTo(298, 157) // 上
  ctx.quadraticCurveTo(339, 279, 339, 279) // 下
  // 右＿右
  ctx.moveTo(320, 133) // 上
  ctx.quadraticCurveTo(353, 259, 353, 259) // 下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

const onCatchFaceParts = (ctx: CanvasRenderingContext2D, webColor: string) => {
  ctx.fillStyle = webColor
  ctx.strokeStyle = '#383838'
  // 縦パーツ_左
  ctx.beginPath()
  ctx.moveTo(293, 360) //左上
  ctx.quadraticCurveTo(303, 376, 303, 376) //左下
  ctx.quadraticCurveTo(346, 316, 376, 253) //右下
  ctx.quadraticCurveTo(374, 235, 374, 235) //右上
  ctx.quadraticCurveTo(319, 302, 293, 360) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // // stitchここから
  // ctx.beginPath()
  // ctx.strokeStyle = stitchColor
  // ctx.setLineDash([3, 3])
  // // 縦向き＿左
  // // 左
  // ctx.moveTo(471, 274) // 左上
  // ctx.quadraticCurveTo(462, 293, 464, 293) // 左下
  // ctx.quadraticCurveTo(466, 321, 488, 349) // 中央下
  // ctx.quadraticCurveTo(516, 376, 549, 383) // 右下
  // ctx.quadraticCurveTo(557, 375, 557, 375) // 右上
  // ctx.quadraticCurveTo(505, 333, 471, 274) // 左上
  // ctx.moveTo(470, 279) // 左上
  // ctx.quadraticCurveTo(505, 336, 557, 380) // 左下
  // ctx.stroke()
  // ctx.setLineDash([])
  // ctx.strokeStyle = '#383838'
  // ctx.closePath()
  // // stitchここまで
}
