import { webKnots } from '@/util/canvas/lace/webKnots'
import { webToCatchFaceConnect } from '../lace/webToCatchFaceConnect'
import { middleSidePartOfWeb2, topSidePartOfWeb2 } from './parts/sideParts'

export const cross3Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  // 横上パーツ
  topSidePartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // 横下パーツ
  middleSidePartOfWeb2(ctx, webColor, laceColor, stitchColor, -10, 10, 1, 1)
  // 縦パーツ
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(627, 117) //左上
  ctx.quadraticCurveTo(607, 176, 571, 220) //左下
  ctx.quadraticCurveTo(591, 240, 607, 280) //右下
  ctx.quadraticCurveTo(658, 233, 672, 184) //右上
  ctx.quadraticCurveTo(650, 141, 627, 115) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 左
  ctx.moveTo(645, 137)
  ctx.quadraticCurveTo(624, 183, 604, 204)
  ctx.quadraticCurveTo(628, 204, 628, 204)
  ctx.quadraticCurveTo(590, 243, 590, 243)
  // 右
  ctx.moveTo(651, 149)
  ctx.quadraticCurveTo(642, 173, 625, 193)
  ctx.quadraticCurveTo(647, 191, 647, 191)
  ctx.quadraticCurveTo(624, 224, 595, 252)
  // ctx.quadraticCurveTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  ctx.fillStyle = webColor
  // stitchここまで

  // laceここから
  webToCatchFaceConnect(ctx, laceColor, -35, 15)
  webKnots(ctx, laceColor, 25, -60) // ウェブ先端寄りのウェブ結び目
  webKnots(ctx, laceColor, -25, 25) // 捕球面寄りのウェブ結び目
}
