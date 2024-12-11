import { topSidePartOfWeb } from './parts/sideParts'

export const flat3Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // ウェブ本体
  ctx.beginPath()
  ctx.moveTo(300, 376) // 左下
  ctx.quadraticCurveTo(339, 334, 373, 252) // 右下
  ctx.quadraticCurveTo(384, 159, 359, 92) // 右上
  ctx.quadraticCurveTo(269, 153, 210, 260) // 左上
  ctx.quadraticCurveTo(280, 286, 284, 345) // 左下_間
  ctx.quadraticCurveTo(300, 376, 300, 376) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  ctx.moveTo(243, 273) // 上
  ctx.quadraticCurveTo(285, 299, 286, 343) // 下
  ctx.moveTo(239, 268) // 上
  ctx.quadraticCurveTo(291, 295, 288, 348) // 下
  // 表面のデザイン1
  ctx.moveTo(246, 221) // 上
  ctx.quadraticCurveTo(275, 191, 290, 213) // 下
  ctx.quadraticCurveTo(261, 229, 256, 277) // 下
  // 表面のデザイン2
  ctx.moveTo(260, 291) // 上
  ctx.quadraticCurveTo(292, 243, 322, 245) // 下
  ctx.quadraticCurveTo(288, 275, 280, 311)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで

  laceOfDesign(ctx, laceColor, -15, -7)
  laceOfDesign(ctx, laceColor, -3, 5)
  laceOfDesign(ctx, laceColor, 9, 24)
  laceOfDesign(ctx, laceColor, 14, 44)
  laceOfDesign(ctx, laceColor, 18, 60)
}

const laceOfDesign = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number) => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  // 上ー下
  ctx.beginPath()
  ctx.moveTo(250 + x, 282 + y) //右上
  ctx.quadraticCurveTo(260 + x, 292 + y, 260 + x, 302 + y) // 左上
  ctx.quadraticCurveTo(265 + x, 306 + y, 265 + x, 306 + y) // 左下
  ctx.quadraticCurveTo(270 + x, 297 + y, 264 + x, 289 + y) // 間
  ctx.quadraticCurveTo(258 + x, 280 + y, 250 + x, 282 + y) // 右上
  ctx.fill()
  ctx.moveTo(252 + x, 282 + y) //右上
  ctx.quadraticCurveTo(264 + x, 292 + y, 262 + x, 302 + y) // 左上
  ctx.stroke()
  ctx.closePath()
  // 左ー右
  ctx.beginPath()
  ctx.moveTo(250 + x, 282 + y) //左上
  ctx.quadraticCurveTo(262 + x, 274 + y, 267 + x, 265 + y) // 右上
  ctx.quadraticCurveTo(271 + x, 266 + y, 270 + x, 275 + y) // 右下
  ctx.quadraticCurveTo(261 + x, 285 + y, 250 + x, 282 + y) // 左上
  ctx.fill()
  ctx.moveTo(252 + x, 282 + y) //右上
  ctx.quadraticCurveTo(263 + x, 280 + y, 269 + x, 265 + y) // 右上
  ctx.stroke()
  ctx.closePath()
}
