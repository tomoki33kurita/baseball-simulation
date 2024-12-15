import { webKnots } from '@/util/canvas/lace/webKnots'
import { iNetTopLace, iNetTopRollLace, lacePartsOfWeb1, lacePartsOfWeb2, upLeftDownRight3, upRightDownLeft3 } from './parts/laceParts'
import { verticalPartsOfWebCircleEndWithEdge } from './parts/verticalParts'

export const iNetWeb = (ctx: CanvasRenderingContext2D, webColor: string, bindingColor: string, laceColor: string, stitchColor: string): void => {
  verticalPartsOfWebCircleEndWithEdge(ctx, webColor, bindingColor, stitchColor, 17, -37, 3)

  lacePartsOfWeb1(ctx, laceColor, 15, -22, 0, 1)
  iNetTopRollLace(ctx, laceColor, -80, -50)
  iNetTopRollLace(ctx, laceColor, -70, -46)
  iNetTopRollLace(ctx, laceColor, -59, -39)
  iNetTopRollLace(ctx, laceColor, -48, -32)
  iNetTopRollLace(ctx, laceColor, -38, -28)
  iNetTopRollLace(ctx, laceColor, -28, -23)
  iNetTopRollLace(ctx, laceColor, -20, -15)
  iNetTopRollLace(ctx, laceColor, -12, -6)
  iNetTopRollLace(ctx, laceColor, -4, 3)
  iNetTopLace(ctx, laceColor) // 中央

  lacePartsOfWeb1(ctx, laceColor, -3, 2, 0, 1)
  lacePartsOfWeb1(ctx, laceColor, -20, 34, 0, 1)
  lacePartsOfWeb1(ctx, laceColor, -43, 64, 0, 1)
  lacePartsOfWeb1(ctx, laceColor, -28, 92, 1, 0.95)
  lacePartsOfWeb1(ctx, laceColor, -13, 132, 1, 0.9)

  upRightDownLeft3(ctx, laceColor, 35, -45)
  iNetTopRollLace(ctx, laceColor, 48, 63)
  iNetTopRollLace(ctx, laceColor, 54, 77)
  iNetTopRollLace(ctx, laceColor, 60, 91)
  iNetTopRollLace(ctx, laceColor, 66, 105)
  iNetTopRollLace(ctx, laceColor, 72, 119)
  iNetTopRollLace(ctx, laceColor, 78, 133)
  iNetTopRollLace(ctx, laceColor, 86, 157)
  iNetTopRollLace(ctx, laceColor, 84, 147)
  lacePartsOfWeb2(ctx, laceColor, -35, -30, -1, 1.08)

  lacePartsOfWeb2(ctx, laceColor, -33, -5, -1, 1.05)
  lacePartsOfWeb2(ctx, laceColor, -21, 26, -1, 1)
  lacePartsOfWeb2(ctx, laceColor, -5, 68, -1, 0.95)
  lacePartsOfWeb2(ctx, laceColor, 7, 108, -1, 0.9)
  upLeftDownRight3(ctx, laceColor)

  webKnots(ctx, laceColor, -105, 105) // 捕球面折り返し上
}
