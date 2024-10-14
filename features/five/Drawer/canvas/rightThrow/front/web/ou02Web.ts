import { middleSidePartOfDoubleWeb, topSidePartOfWeb } from './parts/sideParts'
import { verticalPartsOfWeb } from './parts/verticalParts'

export const ou02Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  // ウェブ_縦
  verticalPartsOfWeb(ctx, webColor, stitchColor)
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // ウェブ_横＿中間
  middleSidePartOfDoubleWeb(ctx, webColor, stitchColor)
}
