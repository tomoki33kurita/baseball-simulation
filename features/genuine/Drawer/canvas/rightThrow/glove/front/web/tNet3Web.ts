import { middleSidePartOfDoubleWeb, middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'

const verticalPartsOfWebWithBinding = (ctx: CanvasRenderingContext2D, webColor: string, bindingColor: string, stitchColor: string): void => {
  // ウェブ_縦
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(250, 212) // 左＿上
  ctx.quadraticCurveTo(273, 285, 314, 355) // 左＿下
  ctx.quadraticCurveTo(322, 355, 342, 307) // 右＿下
  ctx.quadraticCurveTo(313, 241, 293, 150) // 右＿上
  ctx.quadraticCurveTo(265, 189, 251, 212) // 左＿上
  ctx.fill()
  ctx.closePath()
  // ヘリ革左ここから
  ctx.fillStyle = bindingColor
  ctx.beginPath()
  ctx.moveTo(250, 212) // 上＿外
  ctx.quadraticCurveTo(273, 285, 313, 355) // 左＿下
  ctx.quadraticCurveTo(316, 353, 317, 348) // 下＿内
  ctx.quadraticCurveTo(275, 267, 257, 205) // 上＿内
  ctx.quadraticCurveTo(250, 212, 250, 212) // 上＿外
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ヘリ革右ここから
  ctx.beginPath()
  ctx.moveTo(287, 163) // 上＿内
  ctx.quadraticCurveTo(301, 229, 338, 315) // 下＿内
  ctx.quadraticCurveTo(342, 305, 342, 305) // 右＿下
  ctx.quadraticCurveTo(313, 241, 293, 150) // 上＿外
  ctx.quadraticCurveTo(287, 163, 287, 163) // 上＿内
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ヘリ革ここまで

  // stitchここから
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 縦＿左
  ctx.moveTo(259, 203) // 右上
  ctx.quadraticCurveTo(283, 276, 317, 343) // 左下
  // 縦＿右
  ctx.moveTo(284, 166) // 右上
  ctx.quadraticCurveTo(304, 243, 334, 314) // 左下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = '#383838'
  ctx.closePath()
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

  ctx.lineWidth = 1.3
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

export const tNet3Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  // ウェブ_縦
  verticalPartOfVWeb(ctx, webColor, stitchColor)
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // ウェブ_横＿中間
  middleSidePartOfWeb(ctx, webColor, stitchColor, 10, 10)

  onCatchFaceParts(ctx, webColor)
}
