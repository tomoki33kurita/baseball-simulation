import { webKnots } from '@/util/canvas/lace/webKnots'
import { middleSidePartOfWeb3, topSidePartOfWeb2 } from './parts/sideParts'
import { verticalPartOfWeb2 } from './parts/verticalParts'

export const in01Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb3(ctx, webColor, laceColor, stitchColor, -10, 10, 1, 1)
  // 縦パーツ
  verticalPartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // laceここから
  webKnots(ctx, laceColor, -135, 145) // 捕球面上のウェブ結び目
}
