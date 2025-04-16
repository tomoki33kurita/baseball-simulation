import { topSidePartOfWeb } from './parts/sideParts'

export const flat4Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor

  // ウェブ本体
  ctx.beginPath()
  ctx.moveTo(300, 376) // 左下
  ctx.quadraticCurveTo(339, 334, 373, 252) // 右下
  ctx.quadraticCurveTo(384, 159, 359, 92) // 右上
  ctx.quadraticCurveTo(269, 153, 210, 260) // 左上
  ctx.quadraticCurveTo(300, 376, 300, 376) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
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
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  ctx.strokeStyle = '#282828'
}
