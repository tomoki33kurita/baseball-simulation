import { laceParts0, laceParts1, laceParts2, laceParts3, laceParts4, laceParts5 } from './parts/laceParts'
import { topSidePartOfWeb } from './parts/sideParts'
import { verticalPartsForBasNet } from './parts/verticalParts'

export const basNetWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  laceParts4(ctx, laceColor, 13, -40) // 上0
  laceParts4(ctx, laceColor, 13, -15) // 上0
  laceParts4(ctx, laceColor, 13, 12) // 上0
  laceParts4(ctx, laceColor, 13, 40) // 上0
  laceParts4(ctx, laceColor, 13, 59) // 上0

  laceParts3(ctx, laceColor, 60, 43) // 上5
  laceParts3(ctx, laceColor, 52, 19) // 上4
  laceParts3(ctx, laceColor, 43, -8) // 上3
  laceParts3(ctx, laceColor, 32, -38) // 上2
  laceParts3(ctx, laceColor, 23, -66) // 上1

  // ウェブ_縦
  verticalPartsForBasNet(ctx, webColor, web2Color, stitchColor) // ウェブ_縦
  // ウェブ先端
  // laceここから
  laceParts2(ctx, laceColor, -22, -23)
  laceParts2(ctx, laceColor, -12, 0)
  laceParts2(ctx, laceColor, 2, 30)
  laceParts2(ctx, laceColor, 15, 60)
  laceParts2(ctx, laceColor, 30, 90)

  laceParts5(ctx, laceColor, 2, -30) // 上1
  laceParts5(ctx, laceColor, 10, 0) // 上2
  laceParts5(ctx, laceColor, 21, 27) // 上3
  laceParts5(ctx, laceColor, 31, 55) // 上4
  laceParts5(ctx, laceColor, 39, 83) // 上5

  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
}
