import { webKnots } from '@/app/util/canvas/lace/webKnots'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'
import { verticalPartOfWebWithLace } from './parts/verticalParts'

export const in02Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb(ctx, webColor, laceColor, stitchColor, -10, 10, 1, 1)
  // 縦パーツ
  verticalPartOfWebWithLace(ctx, webColor, laceColor, stitchColor)

  // laceここから
  webKnots(ctx, laceColor, -85, 90) // クロス中央の結び目
  webKnots(ctx, laceColor, -110, 120) // 捕球面上のウェブ結び目
}
