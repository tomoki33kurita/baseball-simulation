import { topSidePartOfWeb } from './parts/sideParts'
import { verticalPartsOfWebWithCenterStitch } from './parts/verticalParts'

export const tNet2Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  // ウェブ_縦
  verticalPartsOfWebWithCenterStitch(ctx, webColor, stitchColor) // ウェブ_縦
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
}
