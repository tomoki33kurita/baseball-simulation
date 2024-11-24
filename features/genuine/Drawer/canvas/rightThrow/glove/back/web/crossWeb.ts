import { webKnots } from '@/util/canvas/lace/webKnots'
import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'
import { verticalPartOfWeb } from './parts/verticalParts'

export const crossWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb(ctx, webColor, laceColor, stitchColor, -10, 10, 1, 1)
  // 縦パーツ
  verticalPartOfWeb(ctx, web2Color || webColor, laceColor, stitchColor)
  // laceここから
  // webKnots(ctx, laceColor, -40, 40) // クロス中央の結び目
  webKnots(ctx, laceColor, -110, 120) // 捕球面上のウェブ結び目
}
