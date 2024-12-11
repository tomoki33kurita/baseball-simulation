import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'

export const flat3Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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
  // web本体のflatパーツ
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(549, 81) // 左上
  ctx.quadraticCurveTo(502, 166, 482, 247) // 左下1
  ctx.quadraticCurveTo(480, 256, 486, 268) // 左下2
  ctx.quadraticCurveTo(516, 326, 565, 357) // 右下1
  ctx.quadraticCurveTo(571, 362, 582, 362) // 右下2
  ctx.quadraticCurveTo(631, 277, 693, 280) // 右上
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
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(552, 87) // 左上
  ctx.quadraticCurveTo(508, 166, 486, 252) // 左下
  ctx.quadraticCurveTo(505, 318, 579, 360) // 右下
  ctx.quadraticCurveTo(627, 275, 689, 277) //
  // 内側
  ctx.moveTo(556, 87) // 左上
  ctx.quadraticCurveTo(512, 166, 490, 252) // 左下
  ctx.quadraticCurveTo(505, 310, 577, 356) // 右下
  ctx.quadraticCurveTo(626, 270, 688, 274) //
  ctx.stroke()

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

  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
  // 上1
  laceOfThmbJointBase(ctx, laceColor, 20, -10)
  laceOfThmbJointHook(ctx, laceColor, 20, -10)
  // 上2
  laceOfThmbJointBase(ctx, laceColor, -3, -5)
  laceOfThmbJointHook(ctx, laceColor, 0, -3)
  // 上3
  laceOfThmbJointBase(ctx, laceColor, -25, 4)
  laceOfThmbJointHook(ctx, laceColor, -20, 8)
  // 上4
  laceOfThmbJointBase(ctx, laceColor, -47, 22)
  laceOfThmbJointHook(ctx, laceColor, -40, 25)
  // 上5
  laceOfThmbJointBase(ctx, laceColor, -68, 45)
  laceOfThmbJointHook(ctx, laceColor, -60, 50)
}

const laceOfThmbJointBase = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(648 + x, 271 + y) // 左上
  ctx.quadraticCurveTo(655 + x, 280 + y, 657 + x, 303 + y) // 左下
  ctx.quadraticCurveTo(668 + x, 305 + y, 675 + x, 305 + y) // 右下＿左
  ctx.quadraticCurveTo(679 + x, 297 + y, 677 + x, 295 + y) // 右下＿右
  ctx.quadraticCurveTo(665 + x, 294 + y, 662 + x, 290 + y) // 内
  ctx.quadraticCurveTo(662 + x, 279 + y, 656 + x, 269 + y) // 右上
  ctx.quadraticCurveTo(651 + x, 265 + y, 648 + x, 271 + y) // 右上
  ctx.fill()
  ctx.moveTo(650 + x, 270 + y) // 左上
  ctx.quadraticCurveTo(657 + x, 280 + y, 655 + x, 289 + y) // 左下
  ctx.moveTo(663 + x, 291 + y) // 左上
  ctx.quadraticCurveTo(664 + x, 298 + y, 675 + x, 297 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

const laceOfThmbJointHook = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(667 + x, 284 + y) // 左上
  ctx.quadraticCurveTo(651 + x, 296 + y, 640 + x, 318 + y) // 左下
  ctx.quadraticCurveTo(644 + x, 321 + y, 647 + x, 318 + y) // 右下＿左
  ctx.quadraticCurveTo(655 + x, 301 + y, 670 + x, 291 + y) // 右下＿右
  ctx.quadraticCurveTo(669 + x, 285 + y, 667 + x, 284 + y) // 右上
  ctx.fill()
  ctx.moveTo(669 + x, 286 + y) // 左上
  ctx.quadraticCurveTo(652 + x, 296 + y, 641 + x, 320 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}
