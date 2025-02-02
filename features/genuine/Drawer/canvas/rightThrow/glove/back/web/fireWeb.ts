import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'
import { generateLiningsGradient } from '@/util/canvas'

export const fireWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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
  ctx.moveTo(521, 190) // 左
  ctx.quadraticCurveTo(528, 206, 514, 217)
  ctx.quadraticCurveTo(498, 232, 502, 255)
  ctx.quadraticCurveTo(505, 265, 524, 274)
  ctx.quadraticCurveTo(541, 283, 531, 304) // 中央下
  ctx.quadraticCurveTo(540, 299, 565, 322)
  ctx.quadraticCurveTo(583, 331, 582, 310)
  ctx.quadraticCurveTo(583, 300, 591, 307)
  ctx.quadraticCurveTo(640, 326, 634, 268)
  ctx.quadraticCurveTo(632, 258, 650, 255) // 右
  ctx.quadraticCurveTo(624, 250, 620, 270)
  ctx.quadraticCurveTo(612, 300, 594, 290)
  ctx.quadraticCurveTo(584, 279, 595, 277)
  ctx.quadraticCurveTo(612, 283, 615, 249)
  ctx.quadraticCurveTo(621, 229, 633, 230)
  ctx.quadraticCurveTo(641, 222, 635, 198)
  ctx.quadraticCurveTo(633, 183, 639, 179)
  ctx.quadraticCurveTo(622, 174, 618, 192)
  ctx.quadraticCurveTo(609, 212, 595, 214)
  ctx.quadraticCurveTo(574, 199, 571, 236)
  ctx.quadraticCurveTo(569, 248, 557, 247)
  ctx.quadraticCurveTo(542, 243, 552, 229)
  ctx.quadraticCurveTo(567, 215, 565, 208)
  ctx.quadraticCurveTo(558, 217, 544, 210)
  ctx.quadraticCurveTo(537, 224, 530, 219)
  ctx.quadraticCurveTo(533, 192, 521, 190)
  // ctx.quadraticCurveTo()

  // ctx.moveTo() // 左上
  // ctx.quadraticCurveTo()
  ctx.stroke()

  const coordinates = { x0: 0, y0: 0, x1: 700, y1: 500 }
  const gradient = generateLiningsGradient(ctx, webColor, coordinates)
  ctx.fillStyle = gradient
  ctx.fill()
  ctx.stroke()

  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(561, 201) // 下
  ctx.quadraticCurveTo(575, 180, 591, 184)
  ctx.quadraticCurveTo(602, 183, 605, 162)
  ctx.quadraticCurveTo(578, 178, 570, 169)
  ctx.quadraticCurveTo(560, 168, 550, 182)
  ctx.quadraticCurveTo(545, 200, 561, 201)
  // ctx.quadraticCurveTo()
  // ctx.quadraticCurveTo()

  // ctx.moveTo() // 左上
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.fillStyle = gradient

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
  ctx.moveTo(518, 185) // 左
  ctx.quadraticCurveTo(524, 212, 506, 219)
  ctx.quadraticCurveTo(491, 244, 502, 265)
  ctx.quadraticCurveTo(523, 277, 523, 277)
  ctx.quadraticCurveTo(537, 291, 526, 307)
  ctx.quadraticCurveTo(538, 302, 558, 320)
  ctx.quadraticCurveTo(584, 338, 584, 316)
  ctx.quadraticCurveTo(585, 304, 594, 311)
  ctx.quadraticCurveTo(624, 323, 635, 298)
  ctx.quadraticCurveTo(638, 282, 636, 270)
  ctx.quadraticCurveTo(636, 259, 654, 254)
  ctx.quadraticCurveTo(637, 246, 628, 253)
  ctx.quadraticCurveTo(620, 256, 613, 279)
  ctx.quadraticCurveTo(602, 296, 594, 285)
  ctx.quadraticCurveTo(589, 278, 601, 281)
  ctx.quadraticCurveTo(616, 274, 616, 259)
  ctx.quadraticCurveTo(620, 236, 630, 232)
  ctx.quadraticCurveTo(644, 229, 640, 210)
  ctx.quadraticCurveTo(634, 189, 645, 176)
  ctx.quadraticCurveTo(624, 169, 616, 185)
  ctx.quadraticCurveTo(606, 215, 593, 208)
  ctx.quadraticCurveTo(577, 201, 569, 219)
  ctx.quadraticCurveTo(569, 247, 559, 242)
  ctx.quadraticCurveTo(544, 240, 557, 228)
  ctx.quadraticCurveTo(573, 217, 567, 203)
  ctx.quadraticCurveTo(553, 217, 542, 204)
  ctx.quadraticCurveTo(537, 225, 533, 214)
  ctx.quadraticCurveTo(530, 185, 518, 185)

  // genuineのデザイン
  ctx.moveTo(563, 202) // 左
  ctx.quadraticCurveTo(578, 184, 592, 187)
  ctx.quadraticCurveTo(610, 181, 605, 158)
  ctx.quadraticCurveTo(575, 176, 571, 165)
  ctx.quadraticCurveTo(551, 168, 546, 182)
  ctx.quadraticCurveTo(540, 207, 563, 202)
  // ctx.quadraticCurveTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
}
