import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'
const basketCheckCellSecond = (ctx: CanvasRenderingContext2D, webColorSecond: string, x: number, y: number, numerator?: number): void => {
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColorSecond
  ctx.moveTo(563 + x, 120 + y)
  ctx.quadraticCurveTo(552 + x, 139 + y, 552 + x, 139 + y)
  ctx.quadraticCurveTo(564 + x, 147 + y, 572 + x, 158 + y)
  ctx.quadraticCurveTo(583 + x, 142 + y, 583 + x, 140 + y)
  ctx.quadraticCurveTo(575 + x, 127 + y, 563 + x, 120 + y)
  ctx.fill()
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }

  ctx.closePath()
}

export const basketWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
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
  ctx.moveTo(549, 84) // 左上
  ctx.quadraticCurveTo(502, 166, 482, 247) // 左下1
  ctx.quadraticCurveTo(480, 256, 486, 268) // 左下2
  ctx.quadraticCurveTo(516, 326, 565, 357) // 右下1
  ctx.quadraticCurveTo(571, 362, 582, 362) // 右下2
  ctx.quadraticCurveTo(639, 320, 690, 285) // 右上
  ctx.quadraticCurveTo(655, 145, 549, 84) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(582, 139) // 左上
  ctx.quadraticCurveTo(600, 148, 606, 169)
  ctx.moveTo(624, 196) // 左上
  ctx.quadraticCurveTo(638, 202, 644, 227)
  ctx.moveTo(564, 120) // 左上
  ctx.quadraticCurveTo(535, 161, 503, 229)
  ctx.moveTo(583, 140) // 左上
  ctx.quadraticCurveTo(533, 229, 533, 229)
  ctx.moveTo(608, 166) // 左上
  ctx.quadraticCurveTo(575, 205, 536, 260)
  ctx.moveTo(625, 193) // 左上
  ctx.quadraticCurveTo(569, 260, 566, 269)
  ctx.moveTo(644, 225) // 左上
  ctx.quadraticCurveTo(608, 253, 568, 299)
  ctx.moveTo(654, 252) // 左上
  ctx.quadraticCurveTo(622, 289, 578, 320)
  ctx.moveTo(523, 248) // 左上
  ctx.quadraticCurveTo(536, 262, 536, 262)
  ctx.moveTo(552, 283) // 左上
  ctx.quadraticCurveTo(566, 302, 566, 302)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 1段目
  basketCheckCellSecond(ctx, webColor, 0, 0)
  basketCheckCellSecond(ctx, webColor, 64, -58, 10)
  basketCheckCellSecond(ctx, webColor, 119, -128, 20)
  // 2段目
  basketCheckCellSecond(ctx, webColor, 22, -8, 5)
  basketCheckCellSecond(ctx, webColor, 83, -75, 15)
  // 3段目
  basketCheckCellSecond(ctx, webColor, -24, 42)
  basketCheckCellSecond(ctx, webColor, 43, -20, 10)
  basketCheckCellSecond(ctx, webColor, 100, -94, 20)
  // 4段目
  basketCheckCellSecond(ctx, webColor, -3, 35, 5)
  basketCheckCellSecond(ctx, webColor, 59, -10, 13)
  // 5段目
  basketCheckCellSecond(ctx, webColor, -45, 80, 1)
  basketCheckCellSecond(ctx, webColor, 20, 24, 10)
  basketCheckCellSecond(ctx, webColor, 82, -50, 20)

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(552, 87) // 左上
  ctx.quadraticCurveTo(508, 166, 486, 252) // 左下
  ctx.quadraticCurveTo(505, 318, 581, 358) // 右下
  ctx.quadraticCurveTo(630, 326, 689, 277) //
  // バスケットの周り
  // 内側
  ctx.moveTo(560, 113) //左上
  ctx.quadraticCurveTo(527, 172, 500, 243) // 左下
  ctx.quadraticCurveTo(572, 335, 577, 335) // 右下
  ctx.quadraticCurveTo(632, 295, 673, 254) // 右上
  ctx.quadraticCurveTo(635, 161, 560, 113) // 左上
  // 外側
  ctx.moveTo(558, 107) //左上
  ctx.quadraticCurveTo(527, 172, 496, 243) // 左下
  ctx.quadraticCurveTo(572, 345, 575, 340) // 右下
  ctx.quadraticCurveTo(633, 303, 677, 253) // 右上
  ctx.quadraticCurveTo(635, 155, 558, 107) // 左上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
