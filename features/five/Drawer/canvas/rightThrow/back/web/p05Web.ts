import { webKnots } from '@/app/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'

export const p05Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
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

  // 斜線_1
  ctx.moveTo(491, 224)
  ctx.quadraticCurveTo(672, 222, 672, 222)

  // 斜線_2
  ctx.moveTo(493, 271)
  ctx.quadraticCurveTo(687, 264, 687, 264)

  // 斜線_3
  ctx.moveTo(521, 318)
  ctx.quadraticCurveTo(650, 308, 650, 308)

  // 星
  ctx.moveTo(608, 128)
  ctx.lineTo(599, 132)
  ctx.lineTo(575, 113)
  ctx.lineTo(583, 133)
  ctx.lineTo(556, 140)
  ctx.lineTo(587, 148)
  ctx.lineTo(595, 181)
  ctx.lineTo(606, 156)
  ctx.lineTo(630, 160)
  ctx.lineTo(613, 143)
  ctx.lineTo(620, 134)

  // 雷
  ctx.moveTo(571, 150)
  ctx.quadraticCurveTo(536, 159, 536, 159)
  ctx.quadraticCurveTo(554, 161, 554, 161)
  ctx.quadraticCurveTo(516, 210, 516, 210)
  ctx.quadraticCurveTo(588, 165, 588, 165)
  ctx.quadraticCurveTo(568, 163, 568, 163)
  ctx.quadraticCurveTo(571, 150, 571, 150)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
