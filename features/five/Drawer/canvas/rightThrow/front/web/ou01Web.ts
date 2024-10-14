import { topSidePartOfWeb } from './parts/sideParts'
import { verticalPartsOfWeb } from './parts/verticalParts'

export const ou01Web = (ctx: CanvasRenderingContext2D, laceColor: string, stitchColor: string, webColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  // ウェブ_縦
  verticalPartsOfWeb(ctx, webColor, stitchColor)
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
}
