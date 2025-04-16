import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebWithJoint } from './parts/sideParts'

export const basket2Web = (
  ctx: CanvasRenderingContext2D,
  webColorFirst: string,
  webColorSecond: string,
  laceColor: string,
  stitchColor: string
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  topSidePartOfWebWithJoint(ctx, webColorFirst, webColorSecond, laceColor, stitchColor)

  // ウェブ-人差し指のジョイントパーツ
  jointOfIndexFinger(ctx, webColorSecond, laceColor, 3, 30)
  jointOfIndexFinger(ctx, webColorSecond, laceColor, -24, 90)
  jointOfIndexFinger(ctx, webColorSecond, laceColor, -45, 160)
  jointOfCatchFace(ctx, webColorSecond, laceColor, -10, 12)
  jointOfCatchFace(ctx, webColorSecond, laceColor, 38, 57)
  jointOfThumbFinger2(ctx, webColorSecond, laceColor, 53, -56)
  jointOfThumbFinger2(ctx, webColorSecond, laceColor, 19, -30)
  jointOfThumbFinger2(ctx, webColorSecond, laceColor, -18, -5)

  // web本体のflatパーツ
  ctx.fillStyle = webColorFirst
  ctx.beginPath()
  ctx.moveTo(541, 98) // 左上
  ctx.quadraticCurveTo(502, 166, 482, 247) // 左下1
  ctx.quadraticCurveTo(480, 256, 486, 268) // 左下2
  ctx.quadraticCurveTo(516, 326, 565, 357) // 右下1
  ctx.quadraticCurveTo(571, 362, 582, 362) // 右下2
  ctx.quadraticCurveTo(639, 320, 675, 294) // 右上
  ctx.quadraticCurveTo(630, 165, 541, 98) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
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
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 1段目
  basketCheckCellSecond(ctx, webColorSecond, 0, 0)
  basketCheckCellSecond(ctx, webColorSecond, 64, -58, 10)
  basketCheckCellSecond(ctx, webColorSecond, 119, -128, 20)
  // 2段目
  basketCheckCellSecond(ctx, webColorSecond, 22, -8, 5)
  basketCheckCellSecond(ctx, webColorSecond, 83, -75, 15)
  // 3段目
  basketCheckCellSecond(ctx, webColorSecond, -24, 42)
  basketCheckCellSecond(ctx, webColorSecond, 43, -20, 10)
  basketCheckCellSecond(ctx, webColorSecond, 100, -94, 20)
  // 4段目
  basketCheckCellSecond(ctx, webColorSecond, -3, 35, 5)
  basketCheckCellSecond(ctx, webColorSecond, 59, -10, 13)
  // 5段目
  basketCheckCellSecond(ctx, webColorSecond, -45, 80, 1)
  basketCheckCellSecond(ctx, webColorSecond, 20, 24, 10)
  basketCheckCellSecond(ctx, webColorSecond, 82, -50, 20)

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(552, 87) // 左上
  ctx.quadraticCurveTo(508, 166, 486, 252) // 左下
  ctx.quadraticCurveTo(505, 318, 581, 358) // 右下
  ctx.quadraticCurveTo(630, 326, 689, 277) //
  ctx.stroke()

  ctx.moveTo(565, 119) // 左上
  ctx.quadraticCurveTo(525, 175, 500, 238) // 左下
  ctx.quadraticCurveTo(539, 305, 577, 330) // 右下
  ctx.quadraticCurveTo(626, 293, 659, 256) // 右上
  ctx.stroke()

  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}

const basketCheckCellSecond = (ctx: CanvasRenderingContext2D, webColorSecond: string, x: number, y: number, numerator?: number): void => {
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.strokeStyle = '#282828'
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

// 左Y軸用
const jointOfIndexFinger = (ctx: CanvasRenderingContext2D, webColorFirst: string, laceColor: string, x: number, y: number) => {
  // 指袋とウェブのジョイント
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColorFirst
  ctx.moveTo(510 + x, 86 + y) // 左下_1
  ctx.quadraticCurveTo(512 + x, 90 + y, 514 + x, 84 + y) // 左下内
  ctx.quadraticCurveTo(513 + x, 80 + y, 513 + x, 80 + y) // 左内
  ctx.quadraticCurveTo(524 + x, 75 + y, 527 + x, 88 + y) // 右下内
  ctx.quadraticCurveTo(530 + x, 88 + y, 528 + x, 88 + y) // 右下外
  ctx.quadraticCurveTo(534 + x, 82 + y, 545 + x, 54 + y) // 右上
  ctx.quadraticCurveTo(529 + x, 45 + y, 522 + x, 51 + y) // 左上
  ctx.quadraticCurveTo(514 + x, 72 + y, 509 + x, 77 + y) // 左下
  ctx.quadraticCurveTo(510 + x, 86 + y, 510 + x, 86 + y) // 左下_1
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 断面の白色
  ctx.beginPath()
  ctx.lineWidth = 2.0
  ctx.strokeStyle = '#eee'
  ctx.moveTo(512 + x, 87 + y) // 左下
  ctx.quadraticCurveTo(511 + x, 80 + y, 511 + x, 80 + y) // 左上
  ctx.quadraticCurveTo(525 + x, 73 + y, 528 + x, 88 + y) // 右
  ctx.stroke()
  ctx.closePath()
  // lace ここから
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = laceColor
  ctx.moveTo(513 + x, 88 + y) // 左下
  ctx.quadraticCurveTo(517 + x, 92 + y, 523 + x, 91 + y) // 右下
  ctx.quadraticCurveTo(527 + x, 87 + y, 523 + x, 83 + y) // 右上
  ctx.quadraticCurveTo(518 + x, 78 + y, 514 + x, 82 + y) // 左上
  ctx.quadraticCurveTo(513 + x, 88 + y, 513 + x, 88 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面ライン
  ctx.beginPath()
  ctx.lineWidth = 1.1
  ctx.strokeStyle = '#282828'
  ctx.moveTo(521 + x, 90 + y) // 下
  ctx.quadraticCurveTo(522 + x, 82 + y, 524 + x, 84 + y) // 上
  ctx.stroke()
  ctx.fillStyle = webColorFirst
  ctx.closePath()
}

const jointOfCatchFace = (ctx: CanvasRenderingContext2D, webColorFirst: string, laceColor: string, x: number, y: number) => {
  // 指袋とウェブのジョイント
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColorFirst
  ctx.moveTo(486 + x, 281 + y) // 左下
  ctx.quadraticCurveTo(515 + x, 315 + y, 515 + x, 315 + y) // 右下
  ctx.quadraticCurveTo(525 + x, 315 + y, 531 + x, 301 + y) // 右上
  ctx.quadraticCurveTo(500 + x, 266 + y, 500 + x, 266 + y) // 左上
  ctx.quadraticCurveTo(495 + x, 277 + y, 486 + x, 281 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // laceここから
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = laceColor
  ctx.moveTo(485 + x, 279 + y) // 左下
  ctx.quadraticCurveTo(491 + x, 279 + y, 495 + x, 272 + y) // 右下
  ctx.quadraticCurveTo(490 + x, 268 + y, 486 + x, 272 + y) // 左上
  ctx.quadraticCurveTo(485 + x, 279 + y, 485 + x, 279 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

const jointOfThumbFinger2 = (ctx: CanvasRenderingContext2D, webColorFirst: string, laceColor: string, x: number, y: number) => {
  // 指袋とウェブのジョイント
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColorFirst
  ctx.moveTo(609 + x, 370 + y) // 左下
  ctx.quadraticCurveTo(628 + x, 370 + y, 638 + x, 353 + y) // 右下
  ctx.quadraticCurveTo(641 + x, 345 + y, 635 + x, 340 + y) // 右上
  ctx.quadraticCurveTo(626 + x, 347 + y, 609 + x, 355 + y) // 左上
  ctx.quadraticCurveTo(610 + x, 352 + y, 609 + x, 370 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 断面ここから
  ctx.beginPath()
  ctx.lineWidth = 2.0
  ctx.strokeStyle = '#eee'
  ctx.moveTo(612 + x, 358 + y) // 左
  ctx.quadraticCurveTo(615 + x, 355 + y, 612 + x, 368 + y) // 右下
  ctx.stroke()
  ctx.strokeStyle = '#282828'
  ctx.closePath()
  // laceここから
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = laceColor
  ctx.moveTo(598 + x, 366 + y) //左下
  ctx.quadraticCurveTo(607 + x, 369 + y, 611 + x, 365 + y) // 右下
  ctx.quadraticCurveTo(613 + x, 359 + y, 608 + x, 359 + y) // 右上
  ctx.quadraticCurveTo(601 + x, 358 + y, 601 + x, 358 + y) // 左上
  ctx.quadraticCurveTo(597 + x, 361 + y, 598 + x, 366 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
