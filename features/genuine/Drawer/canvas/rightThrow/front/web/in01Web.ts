import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'
import { verticalPartsOfWebWithCenterStitch } from './parts/verticalParts'

export const in01Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  verticalPartsOfWebWithCenterStitch(ctx, webColor, stitchColor) // ウェブ_縦
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor) // ウェブ先端
  middleSidePartOfWeb(ctx, webColor, stitchColor, 5, 30) // ウェブ_横＿中間
}
