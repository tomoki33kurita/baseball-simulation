import { middleSidePartOfWeb, topSidePartOfWeb } from './parts/sideParts'
import { verticalPartsOfWeb } from './parts/verticalParts'

export const dragonfly2Web = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  // ウェブ_縦
  verticalPartsOfWeb(ctx, web2Color, stitchColor) // ウェブ_縦
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
  // ウェブ_横＿中間
  middleSidePartOfWeb(ctx, webColor, stitchColor, 0, -10)
  middleSidePartOfWeb(ctx, webColor, stitchColor, 35, 40)
}
