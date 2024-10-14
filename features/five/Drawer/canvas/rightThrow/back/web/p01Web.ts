import { webKnots } from '@/app/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'

export const p01Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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
  // 外側
  ctx.moveTo(552, 87) // 左上
  ctx.quadraticCurveTo(508, 166, 486, 252) // 左下
  ctx.quadraticCurveTo(505, 318, 581, 358) // 右下
  ctx.quadraticCurveTo(630, 326, 689, 277) //

  ctx.moveTo(555, 87)
  ctx.quadraticCurveTo(525, 143, 509, 191)
  ctx.quadraticCurveTo(516, 199, 516, 199) // 上_下_1
  ctx.quadraticCurveTo(515, 181, 529, 163) // 上_上_1
  ctx.quadraticCurveTo(528, 197, 528, 197) // 上_下_2
  ctx.quadraticCurveTo(533, 173, 545, 145) // 上_上_2
  ctx.quadraticCurveTo(545, 201, 545, 201) // 上_下_3
  ctx.quadraticCurveTo(557, 162, 572, 136) // 上_上_3
  ctx.quadraticCurveTo(569, 224, 569, 224) // 上_下_4
  ctx.quadraticCurveTo(604, 180, 650, 190) // 上_上_4 // 右の一番左上
  ctx.quadraticCurveTo(605, 219, 587, 259) // 上_下_5
  ctx.quadraticCurveTo(611, 248, 633, 257) // 上_上_5
  ctx.quadraticCurveTo(611, 263, 593, 284) // 上_下_6
  ctx.quadraticCurveTo(618, 278, 631, 293) // 上_上_6 // 右の一番上
  ctx.quadraticCurveTo(598, 284, 585, 293) // 下_下_1
  ctx.quadraticCurveTo(594, 267, 614, 257) // 下_上_1
  ctx.quadraticCurveTo(581, 262, 580, 266) // 下_下_2
  ctx.quadraticCurveTo(596, 216, 639, 192) // 下_上_2
  ctx.quadraticCurveTo(596, 194, 563, 238) // 下_下_3
  ctx.quadraticCurveTo(568, 152, 568, 152) // 下_上_3
  ctx.quadraticCurveTo(541, 231, 540, 231) // 下_下_4
  ctx.quadraticCurveTo(540, 170, 540, 170) // 下_上_4
  ctx.quadraticCurveTo(527, 216, 527, 216) // 下_下_5
  ctx.quadraticCurveTo(523, 181, 523, 181) // 下_上_5
  ctx.quadraticCurveTo(517, 213, 517, 213) // 下_下_6
  ctx.quadraticCurveTo(506, 195, 506, 195) // 下_上_6
  ctx.quadraticCurveTo(489, 251, 489, 251) // 左下
  ctx.quadraticCurveTo(500, 285, 528, 315) // 中央上
  ctx.quadraticCurveTo(551, 337, 582, 353) // 右下
  ctx.quadraticCurveTo(689, 274, 689, 274)
  ctx.quadraticCurveTo(660, 155, 555, 87)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
