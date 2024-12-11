import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'

export const flat4Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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

  // 表面のデザイン
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.moveTo(675, 227) // 左上
  ctx.quadraticCurveTo(649, 205, 616, 211)
  ctx.quadraticCurveTo(655, 236, 671, 279)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.strokeStyle = '#FFFFFF'
  ctx.moveTo(675, 229) // 左上
  ctx.quadraticCurveTo(649, 207, 616, 213)
  ctx.quadraticCurveTo(655, 238, 671, 282)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()

  // 表面のデザイン2
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.moveTo(647, 293) // 左上
  ctx.quadraticCurveTo(609, 249, 553, 231)
  ctx.quadraticCurveTo(602, 266, 624, 308)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.strokeStyle = '#FFFFFF'
  ctx.moveTo(647, 296) // 左上
  ctx.quadraticCurveTo(609, 252, 553, 234)
  ctx.quadraticCurveTo(602, 269, 624, 311)
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

  // 表面のデザイン1
  ctx.moveTo(675, 225) // 左上
  ctx.quadraticCurveTo(649, 203, 608, 211)
  ctx.quadraticCurveTo(650, 234, 667, 279)

  // 表面のデザイン2
  ctx.moveTo(647, 291) // 左上
  ctx.quadraticCurveTo(609, 247, 546, 229)
  ctx.quadraticCurveTo(595, 270, 620, 308)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.stroke()
  ctx.closePath()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
