import { webTop, webTop2 } from '../../lace/webTop'

export const topSidePartOfWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // ウェブ先端
  ctx.beginPath()
  ctx.moveTo(194, 245) // 左＿左上
  ctx.quadraticCurveTo(225, 242, 230, 262) // 左＿右下
  ctx.quadraticCurveTo(257, 173, 354, 104) // 右＿下
  ctx.quadraticCurveTo(352, 87, 352, 68) // 右＿下
  ctx.quadraticCurveTo(351, 58, 343, 52) // 右＿上
  ctx.quadraticCurveTo(223, 110, 194, 245) // 右＿下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  ctx.moveTo(337, 87) // 右上
  ctx.quadraticCurveTo(250, 140, 231, 218) // 左下
  ctx.moveTo(339, 91) // 右上
  ctx.quadraticCurveTo(245, 153, 227, 248) // 左下
  ctx.moveTo(339, 94) // 右上
  ctx.quadraticCurveTo(245, 158, 230, 255) // 左下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで

  // laceここから
  webTop(ctx, laceColor, -35, 10, -3, 1.1) // 右＿親指から1番目
  webTop(ctx, laceColor, 0, 0) // 左＿親指から2番目
  webTop(ctx, laceColor, 57, -105, 20) // 左＿親指から3番目
  webTop(ctx, laceColor, 60, -125, 20) // 右＿親指から4番目
  webTop(ctx, laceColor, 68, -180, 27) // 右＿親指から5番目
  webTop(ctx, laceColor, 70, -233, 33) // 右＿親指から6番目
  webTop(ctx, laceColor, 55, -318, 45) // 右＿親指から7番目
  webTop2(ctx, laceColor, 0, 0) // 右＿親指から8番目
  webTop2(ctx, laceColor, 16, -10) // 右＿親指から9番目
  webTop2(ctx, laceColor, 35, -22) // 右＿親指から10番目
  // laceここまで
}

export const middleSidePartOfWeb = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string, x: number, y: number): void => {
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(240 + x, 278 + y) // 左＿上
  ctx.quadraticCurveTo(255 + x, 296 + y, 261 + x, 311 + y) // 左＿右下
  ctx.quadraticCurveTo(314 + x, 206 + y, 370 + x, 183 + y) // 右＿下
  ctx.quadraticCurveTo(361 + x, 152 + y, 361 + x, 152 + y) //
  ctx.quadraticCurveTo(359 + x, 143 + y, 353 + x, 145 + y) // 右＿上
  ctx.quadraticCurveTo(273 + x, 192 + y, 240 + x, 278 + y) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  ctx.moveTo(357 + x, 164 + y) // 右上
  ctx.quadraticCurveTo(281 + x, 206 + y, 250 + x, 286 + y) // 左下
  ctx.moveTo(359 + x, 169 + y) // 右上
  ctx.quadraticCurveTo(283 + x, 215 + y, 255 + x, 290 + y) // 左下
  ctx.moveTo(357 + x, 178 + y) // 右上
  ctx.quadraticCurveTo(359 + x, 184 + y, 359 + x, 184 + y) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで
}

export const middleSidePartOfDoubleWeb = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string): void => {
  ctx.fillStyle = webColor
  // 1段目
  ctx.beginPath()
  ctx.moveTo(238, 275) // 左＿上
  ctx.quadraticCurveTo(256, 286, 262, 307) // 左＿右下
  ctx.quadraticCurveTo(299, 225, 363, 182) // 右＿下
  ctx.quadraticCurveTo(356, 142, 356, 142) //
  ctx.quadraticCurveTo(354, 136, 348, 139) // 右＿上
  ctx.quadraticCurveTo(268, 182, 238, 275) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 2段目
  ctx.beginPath()
  ctx.moveTo(263, 333) // 左＿上
  ctx.quadraticCurveTo(281, 344, 287, 365) // 左＿右下
  ctx.quadraticCurveTo(324, 283, 388, 236) // 右＿下
  ctx.quadraticCurveTo(381, 200, 381, 200) //
  ctx.quadraticCurveTo(379, 194, 373, 197) // 右＿上
  ctx.quadraticCurveTo(293, 240, 263, 333) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 1段目
  ctx.moveTo(253, 278) // 左下
  ctx.quadraticCurveTo(280, 206, 351, 162) // 右下
  ctx.moveTo(255, 282) // 左下
  ctx.quadraticCurveTo(282, 210, 353, 166) // 右下
  // 1段目
  ctx.moveTo(280, 330) // 左下
  ctx.quadraticCurveTo(300, 265, 363, 222) // 右下
  ctx.moveTo(282, 334) // 左下
  ctx.quadraticCurveTo(302, 269, 365, 226) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで
}