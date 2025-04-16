import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'

export const p04Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  // web先端の革パーツ
  topSidePartOfWebForPitcher(ctx, webColor, laceColor, stitchColor)
  // ウェブ-人差し指のジョイントパーツ
  jointOfIndexFinger(ctx, webColor, laceColor, 3, 30)
  jointOfIndexFinger(ctx, webColor, laceColor, -24, 90)
  jointOfIndexFinger(ctx, webColor, laceColor, -45, 160)
  jointOfCatchFace(ctx, webColor, laceColor, -10, 12)
  jointOfCatchFace(ctx, webColor, laceColor, 38, 57)
  jointOfThumbFinger2(ctx, webColor, laceColor, 53, -56)
  jointOfThumbFinger2(ctx, webColor, laceColor, 19, -30)
  jointOfThumbFinger2(ctx, webColor, laceColor, -18, -5)
  // web本体のflatパーツ
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(549, 81) // 左上
  ctx.quadraticCurveTo(502, 166, 482, 247) // 左下1
  ctx.quadraticCurveTo(480, 256, 486, 268) // 左下2
  ctx.quadraticCurveTo(516, 326, 565, 357) // 右下1
  ctx.quadraticCurveTo(571, 362, 582, 362) // 右下2
  ctx.quadraticCurveTo(637, 324, 693, 280) // 右上
  ctx.quadraticCurveTo(660, 140, 549, 81) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側_外
  ctx.moveTo(552, 87) // 左上
  ctx.quadraticCurveTo(508, 166, 486, 252) // 左下
  ctx.quadraticCurveTo(505, 318, 581, 358) // 右下
  ctx.quadraticCurveTo(630, 326, 689, 277) //
  // 外側_内
  ctx.moveTo(555, 87) // 左上
  ctx.quadraticCurveTo(511, 166, 489, 252) // 左下
  ctx.quadraticCurveTo(505, 313, 581, 353) // 右下
  ctx.quadraticCurveTo(627, 323, 686, 277) //

  ctx.moveTo(527, 144)
  ctx.lineTo(592, 130)
  ctx.lineTo(525, 197)
  ctx.lineTo(638, 180)
  ctx.lineTo(524, 265)
  ctx.lineTo(668, 236)
  ctx.lineTo(583, 308)
  ctx.lineTo(658, 299)

  ctx.moveTo(527, 147) // 左
  ctx.lineTo(582, 134) // 右
  ctx.lineTo(511, 205) // 左
  ctx.lineTo(627, 184) // 右
  ctx.lineTo(504, 275) // 左
  ctx.lineTo(655, 242) // 右
  ctx.lineTo(558, 318) // 左
  ctx.lineTo(658, 302) // 右

  ctx.moveTo(555, 87) // 左上
  ctx.quadraticCurveTo(669, 166, 687, 276) // 右上

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
