import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWeb2 } from './parts/sideParts'
import { verticalPartForBasNet } from './parts/verticalParts'
import {
  lacePartsOfWeb10,
  lacePartsOfWeb11,
  lacePartsOfWeb12,
  lacePartsOfWeb3,
  lacePartsOfWeb4,
  lacePartsOfWeb5,
  lacePartsOfWeb6,
  lacePartsOfWeb7,
  lacePartsOfWeb8,
  lacePartsOfWeb9,
  upLeftDownRight,
  upLeftDownRight2,
  upRightDownLeft,
  upRightDownLeft2
} from './parts/laceParts'

export const basNetWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // 縦パーツ
  verticalPartForBasNet(ctx, webColor, web2Color, laceColor, stitchColor)
  // laceここから

  // 人差指側
  lacePartsOfWeb3(ctx, laceColor, 7, -13, 0, 1)
  lacePartsOfWeb5(ctx, laceColor, 0, 0, 0, 1)
  lacePartsOfWeb3(ctx, laceColor, -40, 108, -10, 1)
  lacePartsOfWeb5(ctx, laceColor, -5, 0, 3, 1)
  lacePartsOfWeb4(ctx, laceColor, 0, 0, 0, 1)
  lacePartsOfWeb5(ctx, laceColor, 50, 10, 7, 0.9)
  lacePartsOfWeb4(ctx, laceColor, -88, 165, -15, 1)
  lacePartsOfWeb6(ctx, laceColor, 3, 0, 0, 1)
  lacePartsOfWeb4(ctx, laceColor, -75, 240, -15, 0.9)
  lacePartsOfWeb6(ctx, laceColor, 40, 65, 0, 0.9)
  lacePartsOfWeb7(ctx, laceColor)
  lacePartsOfWeb8(ctx, laceColor)

  // 親指側
  lacePartsOfWeb11(ctx, laceColor)
  lacePartsOfWeb9(ctx, laceColor, 0, 0, 0, 1)
  lacePartsOfWeb10(ctx, laceColor, 0, 0, 0, 1)
  lacePartsOfWeb9(ctx, laceColor, -25, 30, 0, 1)
  lacePartsOfWeb10(ctx, laceColor, -40, 70, -4, 1)
  lacePartsOfWeb9(ctx, laceColor, 24, 90, 0, 0.9)
  lacePartsOfWeb10(ctx, laceColor, -17, 153, -6, 0.9)
  lacePartsOfWeb9(ctx, laceColor, 70, 70, 5, 0.85)
  lacePartsOfWeb10(ctx, laceColor, -35, 235, -9, 0.85)
  lacePartsOfWeb9(ctx, laceColor, 90, 120, 5, 0.8)
  lacePartsOfWeb10(ctx, laceColor, -75, 340, -14, 0.8)

  lacePartsOfWeb12(ctx, laceColor)

  webKnots(ctx, laceColor, 25, -65) // 捕球面上のウェブ結び目
  webKnots(ctx, laceColor, -115, 115) // 捕球面上のウェブ結び目
}
