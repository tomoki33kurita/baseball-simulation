import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'

export const genuineWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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

  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目

  // genuine のデザイン
  ctx.strokeStyle = 'white'
  ctx.beginPath()
  ctx.moveTo(558, 118) // 左上
  ctx.quadraticCurveTo(543, 147, 537, 182) // 左下1
  ctx.quadraticCurveTo(526, 241, 537, 289)
  ctx.quadraticCurveTo(542, 312, 570, 335) // 右下
  ctx.quadraticCurveTo(579, 315, 579, 315)
  ctx.quadraticCurveTo(593, 321, 622, 298) // 右上
  ctx.quadraticCurveTo(605, 281, 579, 298)
  ctx.quadraticCurveTo(572, 292, 578, 288)
  ctx.quadraticCurveTo(579, 269, 616, 269)
  ctx.quadraticCurveTo(649, 257, 629, 215)
  ctx.quadraticCurveTo(589, 235, 563, 292)
  ctx.quadraticCurveTo(557, 267, 580, 237)
  ctx.quadraticCurveTo(617, 205, 621, 200)
  ctx.quadraticCurveTo(623, 169, 602, 152)
  ctx.quadraticCurveTo(565, 201, 553, 270)
  ctx.quadraticCurveTo(551, 275, 549, 267)
  ctx.quadraticCurveTo(550, 219, 579, 157)
  ctx.quadraticCurveTo(575, 131, 558, 118)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(552, 87) // 左上
  ctx.quadraticCurveTo(508, 163, 486, 253)
  ctx.quadraticCurveTo(515, 327, 580, 357)
  ctx.quadraticCurveTo(690, 276, 690, 276)
  // 内側
  ctx.moveTo(556, 87) // 左上
  ctx.quadraticCurveTo(510, 163, 490, 253)
  ctx.quadraticCurveTo(513, 317, 580, 353)
  ctx.quadraticCurveTo(690, 272, 690, 272)

  // genuineのデザイン
  ctx.moveTo(555, 115)
  ctx.quadraticCurveTo(518, 185, 530, 284)
  ctx.quadraticCurveTo(542, 318, 572, 340)
  ctx.quadraticCurveTo(580, 319, 580, 319)
  ctx.quadraticCurveTo(599, 322, 626, 297)
  ctx.quadraticCurveTo(603, 277, 579, 295)
  ctx.quadraticCurveTo(579, 274, 603, 273)
  ctx.quadraticCurveTo(619, 277, 636, 256)
  ctx.quadraticCurveTo(644, 239, 630, 212)
  ctx.quadraticCurveTo(585, 236, 566, 281)
  ctx.quadraticCurveTo(560, 263, 583, 238)
  ctx.quadraticCurveTo(624, 200, 624, 200)
  ctx.quadraticCurveTo(627, 165, 600, 149)
  ctx.quadraticCurveTo(560, 209, 552, 263)
  ctx.quadraticCurveTo(553, 215, 583, 157)
  ctx.quadraticCurveTo(576, 126, 555, 115)
  // ctx.quadraticCurveTo()
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}
