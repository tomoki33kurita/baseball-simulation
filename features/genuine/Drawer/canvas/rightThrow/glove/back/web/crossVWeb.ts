import { webKnots } from '@/util/canvas/lace/webKnots'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'
import { verticalPartOfVWeb } from './parts/verticalParts'

export const crossVWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor

  // 横上パーツ
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb(ctx, webColor, laceColor, stitchColor, -10, 10, 1, 1)
  // 縦パーツ
  verticalPartOfVWeb(ctx, web2Color || webColor, laceColor, stitchColor)
  // 捕球面上のウェブ結び目
  webKnots(ctx, laceColor, -120, 120)
}
