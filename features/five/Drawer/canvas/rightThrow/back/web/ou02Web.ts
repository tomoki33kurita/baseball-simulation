import { webKnots } from '@/app/util/canvas/lace/webKnots'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'
import { verticalPartOfWeb } from './parts/verticalParts'

export const ou02Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb(ctx, webColor, laceColor, stitchColor, -20, 35, -5, 1.02)
  middleSidePartOfWeb(ctx, webColor, laceColor, stitchColor, 70, 175, -5, 0.8)
  // 縦パーツ
  verticalPartOfWeb(ctx, webColor, laceColor, stitchColor)
  // laceここから
  webKnots(ctx, laceColor, -110, 120) // 捕球面上のウェブ結び目
}
