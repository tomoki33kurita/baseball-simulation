import { webKnots } from '@/util/canvas/lace/webKnots'
import { middleSidePartOfWeb, topSidePartOfWeb2 } from './parts/sideParts'
import { verticalPartOfWeb } from './parts/verticalParts'

export const dragonflyWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb(ctx, webColor, laceColor, stitchColor, -20, 35, -5, 1.02)
  middleSidePartOfWeb(ctx, webColor, laceColor, stitchColor, 70, 175, -5, 0.8)
  // 縦パーツ
  verticalPartOfWeb(ctx, web2Color, laceColor, stitchColor)
  // laceここから
  webKnots(ctx, laceColor, -110, 120) // 捕球面上のウェブ結び目
}
