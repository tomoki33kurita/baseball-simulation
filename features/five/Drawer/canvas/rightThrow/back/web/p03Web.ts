import { webKnots } from '@/app/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'

export const p03Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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

  // 内部のステッチデザイン
  ctx.moveTo(555, 87) // 左上_下〜
  ctx.quadraticCurveTo(555, 114, 545, 138) // 左_反り部
  ctx.quadraticCurveTo(515, 212, 520, 283) // 左_中央下
  ctx.quadraticCurveTo(531, 210, 578, 147) // 左_上
  ctx.quadraticCurveTo(576, 224, 576, 224) // 左_中間
  ctx.quadraticCurveTo(584, 199, 601, 188)
  ctx.quadraticCurveTo(615, 175, 633, 179) // 中央下
  ctx.quadraticCurveTo(634, 190, 626, 207)
  ctx.quadraticCurveTo(613, 229, 597, 241) // 右_中間
  ctx.quadraticCurveTo(654, 240, 658, 234) // 右_上
  ctx.quadraticCurveTo(590, 304, 551, 317) // 右_中央下
  ctx.quadraticCurveTo(603, 315, 653, 282) // 右_反り部
  ctx.quadraticCurveTo(686, 277, 686, 277) // 右上_下
  ctx.quadraticCurveTo(690, 272, 690, 272) // 右上_上
  ctx.quadraticCurveTo(653, 278, 653, 278) // 右_反り部
  ctx.quadraticCurveTo(601, 308, 571, 312)
  ctx.quadraticCurveTo(635, 271, 666, 229) // 右_上
  ctx.quadraticCurveTo(613, 234, 610, 236)
  ctx.quadraticCurveTo(648, 189, 638, 175) // 中央上
  ctx.quadraticCurveTo(612, 167, 580, 203)
  ctx.quadraticCurveTo(582, 131, 582, 131) // 左_上
  ctx.quadraticCurveTo(535, 190, 523, 253)
  ctx.quadraticCurveTo(523, 205, 549, 138)
  ctx.quadraticCurveTo(560, 106, 557, 87)
  // ctx.quadraticCurveTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
