import { webKnots } from '@/util/canvas/lace/webKnots'
import { crossLace } from '../lace/crossLace'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'
import { verticalPartOfWeb2 } from './parts/verticalParts'

export const in01Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb(ctx, webColor, laceColor, stitchColor, -10, 10, 1, 1)
  // 縦パーツ
  verticalPartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // laceここから
  crossLace(ctx, laceColor, 0, 0, 1, 1)
  webKnots(ctx, laceColor, -135, 145) // 捕球面上のウェブ結び目
}
