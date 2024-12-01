import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWeb2, topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'
import { GenuineState } from '@/features/genuine/types'
import { laceOfLacingWebLeft1, laceOfLacingWebLeft2, laceOfLacingWebRight1, laceOfLacingWebRight2 } from '../lace/uNetLace'

export const uNet2Web = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const laceColor = state.lace.color
  const stitchColor = state.stitch.color
  const webColor = state.web.color

  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  // web先端の革パーツ
  topSidePartOfWeb2(ctx, webColor, laceColor, stitchColor)
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
  ctx.quadraticCurveTo(637, 324, 692, 280) // 右上_外
  ctx.quadraticCurveTo(692, 264, 680, 237) // 右上_内
  ctx.quadraticCurveTo(632, 286, 582, 318) // 右下_内
  ctx.quadraticCurveTo(578, 298, 581, 284) // 中央＿右下
  ctx.quadraticCurveTo(663, 193, 661, 196) // 中央＿右上
  ctx.quadraticCurveTo(648, 168, 628, 148) // 中央＿左上
  ctx.quadraticCurveTo(543, 243, 543, 243) // 中央＿左下
  ctx.quadraticCurveTo(527, 245, 510, 241) // 左下＿内
  ctx.quadraticCurveTo(554, 159, 590, 110) // 左上＿内
  ctx.quadraticCurveTo(561, 87, 549, 81) // 左上＿外
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(550, 87) // 左上
  ctx.quadraticCurveTo(508, 166, 486, 252) // 左下
  ctx.quadraticCurveTo(505, 318, 581, 358) // 右下
  ctx.quadraticCurveTo(630, 326, 689, 277) //
  // 内側
  ctx.moveTo(554, 87) // 左上
  ctx.quadraticCurveTo(513, 166, 489, 250) // 左下
  ctx.quadraticCurveTo(507, 315, 581, 354) // 右下
  ctx.quadraticCurveTo(626, 324, 687, 275) //
  // 左窓周辺
  ctx.moveTo(553, 88) // 左上
  ctx.quadraticCurveTo(583, 111, 583, 111) // 左上
  ctx.quadraticCurveTo(543, 167, 505, 243) // 左下
  ctx.quadraticCurveTo(524, 250, 546, 246) // 右下
  ctx.quadraticCurveTo(633, 146, 628, 153) // 中央＿左上
  ctx.quadraticCurveTo(656, 185, 656, 195) // 中央＿右上
  ctx.quadraticCurveTo(577, 282, 577, 282) // 中央＿右下
  ctx.quadraticCurveTo(574, 301, 580, 323) // 右下＿内
  ctx.quadraticCurveTo(636, 286, 679, 243) // 右上＿内
  ctx.quadraticCurveTo(690, 275, 690, 275) // 右上＿外
  // 中央＿縦ライン
  ctx.moveTo(641, 173) // 左上
  ctx.quadraticCurveTo(562, 254, 564, 254) // 左下
  ctx.quadraticCurveTo(566, 258, 566, 258) // 右下
  ctx.quadraticCurveTo(645, 175, 645, 175) // 右上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで

  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
  //
  laceOfLacingWebLeft1(ctx, laceColor, -7, -148, 10, 1.1)
  laceOfLacingWebLeft2(ctx, laceColor, -7, -148, 10, 1.1)
  //
  laceOfLacingWebLeft1(ctx, laceColor, 5, -77, 5, 1.05)
  laceOfLacingWebLeft2(ctx, laceColor, 5, -77, 5, 1.05)
  //
  laceOfLacingWebLeft1(ctx, laceColor, 10, -10, 0, 1)
  laceOfLacingWebLeft2(ctx, laceColor, 10, -10, 0, 1)
  //
  laceOfLacingWebLeft1(ctx, laceColor, 0, 7, 0, 1)
  laceOfLacingWebLeft2(ctx, laceColor, 0, 7, 0, 1)
  //
  laceOfLacingWebLeft1(ctx, laceColor, -12, 24, 0, 1)
  laceOfLacingWebLeft2(ctx, laceColor, -12, 24, 0, 1)
  //
  laceOfLacingWebLeft1(ctx, laceColor, 7, 42, 0, 0.95)
  laceOfLacingWebLeft2(ctx, laceColor, 7, 42, 0, 0.95)
  //
  laceOfLacingWebLeft1(ctx, laceColor, -4, 60, 0, 0.95)
  laceOfLacingWebLeft2(ctx, laceColor, -8, 60, 0, 0.95)

  //
  laceOfLacingWebRight1(ctx, laceColor, 73, -216, 15, 1)
  laceOfLacingWebRight2(ctx, laceColor, 67, -336, 25, 1)
  //
  laceOfLacingWebRight1(ctx, laceColor, -7, -145, 10, 1.1)
  laceOfLacingWebRight2(ctx, laceColor, 65, -259, 20, 1)
  //
  laceOfLacingWebRight1(ctx, laceColor, 43, -132, 10, 1)
  laceOfLacingWebRight2(ctx, laceColor, 58, -243, 20, 1)
  //
  laceOfLacingWebRight1(ctx, laceColor, 34, -118, 10, 1)
  laceOfLacingWebRight2(ctx, laceColor, 50, -226, 20, 1)
  //
  laceOfLacingWebRight1(ctx, laceColor, 60, -102, 10, 0.95)
  laceOfLacingWebRight2(ctx, laceColor, 75, -210, 20, 0.95)
  //
  laceOfLacingWebRight1(ctx, laceColor, 50, -85, 10, 0.95)
  laceOfLacingWebRight2(ctx, laceColor, 68, -193, 20, 0.95)
  //
  laceOfLacingWebRight1(ctx, laceColor, 35, -72, 10, 0.95)
  laceOfLacingWebRight2(ctx, laceColor, 58, -175, 20, 0.95)
  //
  webKnots(ctx, laceColor, 30, -70, 1) // ウェブ先端寄りのウェブ結び目
}
