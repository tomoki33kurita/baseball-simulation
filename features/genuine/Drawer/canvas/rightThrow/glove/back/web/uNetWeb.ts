import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWeb2 } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'
import { GenuineState } from '@/features/genuine/types'
import { laceOfLacingWebLeft1, laceOfLacingWebLeft2, laceOfLacingWebRight1, laceOfLacingWebRight2 } from '../lace/uNetLace'

export const uNetWeb = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const laceColor = state.lace.color
  const stitchColor = state.stitch.color
  const webColor = state.web.color
  const web2Color = state.web2.color
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  const webColorSecond = web2Color || webColor
  // ウェブ-人差し指のジョイントパーツ
  jointOfIndexFinger(ctx, webColorSecond, laceColor, 3, 30)
  jointOfIndexFinger(ctx, webColorSecond, laceColor, -24, 90)
  jointOfIndexFinger(ctx, webColorSecond, laceColor, -45, 160)
  jointOfCatchFace(ctx, webColorSecond, laceColor, -10, 12)
  jointOfCatchFace(ctx, webColorSecond, laceColor, 38, 57)
  jointOfThumbFinger2(ctx, webColorSecond, laceColor, 53, -56)
  jointOfThumbFinger2(ctx, webColorSecond, laceColor, 19, -30)
  jointOfThumbFinger2(ctx, webColorSecond, laceColor, -18, -5)
  // web先端の革パーツ
  topSidePartOfWeb2(ctx, webColorSecond, laceColor, stitchColor)
  // web本体のflatパーツ
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(549, 81) // 左上
  ctx.quadraticCurveTo(502, 166, 482, 247) // 左下1
  ctx.quadraticCurveTo(480, 256, 486, 268) // 左下2
  ctx.quadraticCurveTo(516, 326, 565, 357) // 右下1
  ctx.quadraticCurveTo(571, 362, 582, 362) // 右下2
  ctx.quadraticCurveTo(637, 324, 693, 280) // 右上_外
  ctx.quadraticCurveTo(692, 268, 680, 237) // 右上_内
  ctx.quadraticCurveTo(632, 286, 586, 320) // 右下_内
  ctx.quadraticCurveTo(572, 323, 559, 309) // 中央＿右下
  ctx.quadraticCurveTo(663, 193, 661, 195) // 中央＿右上
  ctx.quadraticCurveTo(650, 170, 628, 148) // 中央＿左上
  ctx.quadraticCurveTo(522, 269, 522, 269) // 中央＿左下

  ctx.quadraticCurveTo(509, 254, 510, 241) // 左下＿内
  ctx.quadraticCurveTo(554, 159, 589, 109) // 左上＿内
  ctx.quadraticCurveTo(565, 89, 549, 81) // 左上＿外
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(550, 87) // 左上
  ctx.quadraticCurveTo(508, 166, 485, 252) // 左下
  ctx.quadraticCurveTo(505, 318, 578, 359) // 右下
  ctx.quadraticCurveTo(630, 326, 689, 277) //
  // 内側
  ctx.moveTo(554, 87) // 左上
  ctx.quadraticCurveTo(513, 166, 489, 250) // 左下
  ctx.quadraticCurveTo(507, 315, 578, 356) // 右下
  ctx.quadraticCurveTo(626, 324, 687, 275) //

  // 左窓周辺
  ctx.moveTo(553, 87) // 左上
  ctx.quadraticCurveTo(583, 109, 583, 109) // 左上
  ctx.quadraticCurveTo(543, 167, 505, 243) // 左下
  ctx.quadraticCurveTo(506, 260, 522, 275) // 中央＿左下
  ctx.quadraticCurveTo(633, 146, 628, 153) // 中央＿左上
  ctx.quadraticCurveTo(647, 172, 657, 195) // 中央＿右上
  ctx.quadraticCurveTo(554, 308, 554, 308) // 中央＿右下
  ctx.quadraticCurveTo(561, 321, 586, 325) // 右下＿内
  ctx.quadraticCurveTo(626, 296, 679, 243) // 右上＿内
  ctx.quadraticCurveTo(686, 256, 690, 275) // 右上＿外
  // 中央＿縦ライン
  ctx.moveTo(641, 173) // 左上
  ctx.quadraticCurveTo(538, 287, 538, 287) // 左下
  ctx.quadraticCurveTo(542, 291, 542, 291) // 右下
  ctx.quadraticCurveTo(643, 177, 643, 177) // 右上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで

  // laceここから
  webKnots(ctx, laceColor, -90, 80, 1)
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
  laceOfLacingWebLeft1(ctx, laceColor, -135, 248, -20, 0.95)

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
  laceOfLacingWebRight1(ctx, laceColor, 43, -168, 20, 0.95)
  //
  webKnots(ctx, laceColor, 30, -70, 1) // ウェブ先端寄りのウェブ結び目
}
