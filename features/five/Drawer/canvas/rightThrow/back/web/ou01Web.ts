import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWeb } from './parts/sideParts'
import { verticalPartOfWeb2 } from './parts/verticalParts'

export const ou01Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // 縦パーツ
  verticalPartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // laceここから
  webKnots(ctx, laceColor, -110, 120) // 捕球面上のウェブ結び目
}
