import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWeb } from './parts/sideParts'
import { verticalPartOfWebWithLace } from './parts/verticalParts'
import { lacePartsOfWeb1, lacePartsOfWeb2, upLeftDownRight, upLeftDownRight2, upRightDownLeft2 } from './parts/laceParts'

const upRightDownLeft = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.fillStyle = laceColor
  // 左下→右上
  ctx.moveTo(476 + x, 282 + y) //左上
  ctx.quadraticCurveTo(475 + x, 285 + y, 483 + x, 290 + y) //左下
  ctx.quadraticCurveTo(527 + x, 258 + y, 532 + x, 262 + y) //右上＿下
  ctx.quadraticCurveTo(532 + x, 255 + y, 528 + x, 255 + y) //右上＿上
  ctx.quadraticCurveTo(500 + x, 254 + y, 476 + x, 282 + y) //
  ctx.fill()
  ctx.moveTo(481 + x, 290 + y) //左上
  ctx.quadraticCurveTo(505 + x, 260 + y, 532 + x, 262 + y) //左下
  ctx.stroke()
  ctx.closePath()
}

export const tNet2Web = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  // 縦パーツ
  verticalPartOfWebWithLace(ctx, web2Color, laceColor, stitchColor)
  upLeftDownRight(ctx, laceColor, 15, -20)
  lacePartsOfWeb1(ctx, laceColor, -3, 2, 0, 1)
  lacePartsOfWeb1(ctx, laceColor, -20, 34, 0, 1)
  lacePartsOfWeb1(ctx, laceColor, -38, 64, 0, 1)
  lacePartsOfWeb1(ctx, laceColor, -23, 92, 1, 0.95)
  lacePartsOfWeb1(ctx, laceColor, -8, 132, 1, 0.9)
  upRightDownLeft(ctx, laceColor, 0, 0)

  upRightDownLeft2(ctx, laceColor, 20, -20)
  lacePartsOfWeb2(ctx, laceColor, -29, -2, -1, 1.05)
  lacePartsOfWeb2(ctx, laceColor, -18, 33, -1, 1)
  lacePartsOfWeb2(ctx, laceColor, -5, 68, -1, 0.95)
  lacePartsOfWeb2(ctx, laceColor, 7, 108, -1, 0.9)
  upLeftDownRight2(ctx, laceColor)

  // laceここから
  webKnots(ctx, laceColor, 25, -60) // ウェブ先端
  webKnots(ctx, laceColor, -85, 95) //
  webKnots(ctx, laceColor, -105, 115) // 捕球面折り返し上
  ctx.strokeStyle = '#282828'
}
