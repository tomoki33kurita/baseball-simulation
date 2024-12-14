import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'
import { generateLiningsGradient } from '@/util/canvas'

export const cloverLeaf = (ctx: CanvasRenderingContext2D, webColor: string, stitchColor: string, x: number, y: number, rotate: number): void => {
  // クローバーの葉っぱ
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  ctx.lineWidth = 0.8
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)

  ctx.beginPath()
  ctx.moveTo(581 + x, 229 + y) // 左下
  ctx.quadraticCurveTo(553 + x, 247 + y, 530 + x, 235 + y) // 右下
  ctx.quadraticCurveTo(516 + x, 221 + y, 521 + x, 214 + y) // 右下
  ctx.quadraticCurveTo(522 + x, 206 + y, 534 + x, 202 + y) // 右下
  ctx.quadraticCurveTo(534 + x, 186 + y, 542 + x, 183 + y) // 右下
  ctx.quadraticCurveTo(552 + x, 178 + y, 563 + x, 185 + y) // 右下
  ctx.quadraticCurveTo(569 + x, 190 + y, 573 + x, 204 + y) // 右下
  ctx.quadraticCurveTo(573 + x, 222 + y, 581 + x, 229 + y) // 右下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  ctx.moveTo(576 + x, 227 + y) // 左上
  ctx.quadraticCurveTo(549 + x, 245 + y, 532 + x, 231 + y) // 右下
  ctx.quadraticCurveTo(518 + x, 216 + y, 528 + x, 209 + y) //
  ctx.quadraticCurveTo(530 + x, 205 + y, 539 + x, 204 + y) //
  ctx.quadraticCurveTo(537 + x, 188 + y, 548 + x, 187 + y) //
  ctx.quadraticCurveTo(562 + x, 179 + y, 568 + x, 201 + y) //
  ctx.quadraticCurveTo(570 + x, 220 + y, 576 + x, 227 + y) //
  //   ctx.quadraticCurveTo() //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = '#383838'
  ctx.closePath()
  // stitchここまで
  ctx.restore()
}
export const flat6Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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

  // ウェブ表面上のデザイン_下地
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(573, 190) // 左下
  ctx.quadraticCurveTo(582, 160, 599, 162) // 右下
  ctx.quadraticCurveTo(612, 162, 616, 176) // 右下
  ctx.quadraticCurveTo(640, 172, 642, 191) // 右下
  ctx.quadraticCurveTo(645, 203, 626, 219) // 右下
  ctx.quadraticCurveTo(647, 219, 655, 236) // 右下
  ctx.quadraticCurveTo(661, 262, 646, 266) // 右下
  ctx.quadraticCurveTo(648, 285, 629, 292) // 右下
  ctx.quadraticCurveTo(613, 296, 599, 279) // 右下
  ctx.quadraticCurveTo(596, 303, 580, 308) // 右下
  ctx.quadraticCurveTo(561, 312, 552, 297) // 右下
  ctx.quadraticCurveTo(526, 297, 524, 278) // 右下
  ctx.quadraticCurveTo(519, 262, 538, 248) // 右下
  ctx.quadraticCurveTo(518, 245, 514, 226) // 右下
  ctx.quadraticCurveTo(514, 205, 529, 200) // 右下
  ctx.quadraticCurveTo(529, 178, 543, 175) // 右下
  ctx.quadraticCurveTo(558, 169, 573, 190) // 右下
  //   ctx.quadraticCurveTo() // 右下
  //   ctx.quadraticCurveTo() // 右下
  const coordinates = { x0: 150, y0: 300, x1: 900, y1: 600 }
  const gradient = generateLiningsGradient(ctx, webColor, coordinates)
  ctx.fillStyle = gradient
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // クローバーの葉っぱ
  cloverLeaf(ctx, webColor, stitchColor, 0, 0, 0) // 左
  cloverLeaf(ctx, webColor, stitchColor, -352, -817, 90) // 上
  cloverLeaf(ctx, webColor, stitchColor, -1170, -465, 180) // 右
  cloverLeaf(ctx, webColor, stitchColor, -818, 354, -90) // 下

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
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
