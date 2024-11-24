import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'
import { verticalPartsOfWebWithCenterStitch } from './parts/verticalParts'

export const dragonflyWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  // ウェブ_縦
  verticalPartsOfWebWithCenterStitch(ctx, webColor, stitchColor) // ウェブ_縦
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // ウェブ_横＿中間
  middleSidePartOfWeb(ctx, webColor, stitchColor, 0, -10)
  middleSidePartOfWeb(ctx, webColor, stitchColor, 35, 40)
}
