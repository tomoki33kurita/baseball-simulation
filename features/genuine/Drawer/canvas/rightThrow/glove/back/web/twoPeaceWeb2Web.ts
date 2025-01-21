import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'
import { connectWebToIndex, connectWebToIndexTop, connectWebToThumb, connectWebToThumbTop } from '../lace/connectWebAndFinger'

export const twoPeaceWeb2Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'

  topSidePartOfWebForPitcher(ctx, webColor, laceColor, stitchColor) // ウェブ先端
  ctx.fillStyle = webColor

  // ウェブパーツ // 先端側
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(576, 44) // 左上
  ctx.quadraticCurveTo(534, 103, 498, 211) // 左下
  ctx.quadraticCurveTo(561, 255, 605, 342) //右下
  ctx.quadraticCurveTo(630, 347, 635, 337) //
  ctx.quadraticCurveTo(703, 253, 721, 245) //右上
  // ctx.quadraticCurveTo(625, 70, 576, 44) //左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ウェブパーツ // 捕球面側
  ctx.beginPath()
  ctx.moveTo(495, 214) // 左上
  ctx.quadraticCurveTo(480, 228, 465, 263) // 左下
  ctx.quadraticCurveTo(457, 300, 490, 347) // 中央＿左
  ctx.quadraticCurveTo(528, 313, 528, 313) // 中央＿切り込み奥
  ctx.quadraticCurveTo(496, 355, 496, 355) //中央＿右
  ctx.quadraticCurveTo(527, 383, 561, 380) // 右下
  ctx.quadraticCurveTo(589, 363, 606, 345) //右上
  ctx.quadraticCurveTo(563, 255, 495, 214) //左上
  ctx.fill()
  // ctx.quadraticCurveTo(498, 211, 500, 212) // 左下の革紐の穴上部
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 横向き＿上
  ctx.moveTo(572, 60) // 左上
  ctx.quadraticCurveTo(659, 147, 708, 251) // 右下
  ctx.moveTo(570, 64) // 左上
  ctx.quadraticCurveTo(657, 151, 706, 255) // 右下
  // 中間の四角＿左辺
  ctx.moveTo(568, 74) // 左上
  ctx.quadraticCurveTo(511, 197, 511, 197) // 左下
  ctx.moveTo(571, 78) // 左上
  ctx.quadraticCurveTo(516, 198, 516, 198) // 左下
  // 中間の四角＿右辺
  ctx.moveTo(696, 250) // 左上
  ctx.quadraticCurveTo(633, 324, 633, 324) // 左下
  ctx.moveTo(698, 254) // 左上
  ctx.quadraticCurveTo(633, 331, 633, 331) // 左下
  // 中間の四角＿下辺
  ctx.moveTo(516, 198) // 左上
  ctx.quadraticCurveTo(581, 254, 633, 324) // 右下
  ctx.moveTo(511, 200) // 左上
  ctx.quadraticCurveTo(581, 261, 633, 331) // 右下
  // // V部分＿左＿外
  // ctx.moveTo(572, 74) // 左上
  // ctx.quadraticCurveTo(559, 236, 559, 236) // 左下
  // ctx.moveTo(575, 76) // 左上
  // ctx.quadraticCurveTo(562, 238, 562, 238) // 左下
  // V部分＿内
  ctx.moveTo(624, 132) // 左上
  ctx.quadraticCurveTo(620, 200, 620, 200) // 下
  ctx.quadraticCurveTo(660, 182, 660, 182) // 右上
  ctx.moveTo(620, 128) // 左上
  ctx.quadraticCurveTo(617, 205, 617, 205) // 下
  ctx.quadraticCurveTo(663, 184, 663, 184) // 右上
  // // V部分＿右＿外
  // ctx.moveTo(694, 241) // 上
  // ctx.quadraticCurveTo(599, 281, 599, 281) // 下
  // ctx.moveTo(696, 243) // 上
  // ctx.quadraticCurveTo(601, 283, 601, 283) // 下

  // ツーピース部分_外側
  ctx.moveTo(485, 233) // 左上
  ctx.quadraticCurveTo(475, 245, 467, 274) // 左下
  ctx.quadraticCurveTo(466, 306, 492, 341) // 中央＿左
  ctx.quadraticCurveTo(508, 322, 532, 310) // 中央＿頂点
  ctx.quadraticCurveTo(525, 329, 502, 354) // 中央＿右
  ctx.quadraticCurveTo(523, 376, 554, 376) // 右下
  ctx.quadraticCurveTo(567, 375, 591, 354) // 右上
  ctx.quadraticCurveTo(557, 283, 485, 233) // 左上
  ctx.stroke()
  // ツーピース部分_内側
  ctx.moveTo(486, 239) // 左上
  ctx.quadraticCurveTo(478, 245, 471, 273) // 左下
  ctx.quadraticCurveTo(466, 300, 493, 334) // 中央＿左
  ctx.quadraticCurveTo(503, 322, 535, 303) // 中央＿頂点
  ctx.quadraticCurveTo(533, 329, 508, 354) // 中央＿右
  ctx.quadraticCurveTo(523, 373, 549, 372) // 右下
  ctx.quadraticCurveTo(567, 375, 587, 353) // 右上
  ctx.quadraticCurveTo(557, 290, 486, 239) // 左上
  ctx.stroke()

  ctx.setLineDash([])
  ctx.strokeStyle = '#383838'
  ctx.closePath()
  // stitchここまで

  // laceここから
  ctx.fillStyle = laceColor
  crossJointLace(ctx, laceColor, -5, 5)
  crossJointLace(ctx, laceColor, 45, 60)
  underKnotLace(ctx, laceColor, 0, 0)
  underKnotLace(ctx, laceColor, 45, 53)

  // webTops(ctx, laceColor, 20, 82) // 右＿親指から1番目
  // webTops(ctx, laceColor, 15, 70) // 右＿親指から2番目
  // webTops(ctx, laceColor, 5, 51) // 右＿親指から3番目
  // webTops(ctx, laceColor, -7, 30) // 右＿親指から4番目
  // webTops(ctx, laceColor, -20, 10) // 右＿親指から5番目
  // webTops(ctx, laceColor, -33, -10) // 右＿親指から6番目
  // webTops(ctx, laceColor, -45, -29) // 右＿親指から7番目
  // webTops(ctx, laceColor, -58, -47) // 右＿親指から8番目
  // webTops(ctx, laceColor, -70, -63) // 右＿親指から8番目
  // webTops(ctx, laceColor, -85, -80) // 右＿親指から8番目
  // webTops(ctx, laceColor, -100, -95) // 右＿親指から8番目

  connectWebToIndexTop(ctx, laceColor, 0, 0)
  connectWebToIndex(ctx, laceColor, 45, -92) //
  connectWebToIndex(ctx, laceColor, -12, 38) //
  connectWebToIndex(ctx, laceColor, -27, 55) //
  connectWebToThumbTop(ctx, laceColor, 0, 0)
  connectWebToThumbTop(ctx, laceColor, -10, 10)
  connectWebToThumb(ctx, laceColor, 60, 30) //
  connectWebToThumb(ctx, laceColor, -5, 1) //
  connectWebToThumb(ctx, laceColor, -33, 10) //

  // V部分＿左
  allowLaneLeft(ctx, laceColor, 3, 5)
  allowLaneLeft(ctx, laceColor, 3, 28)
  allowLaneLeft(ctx, laceColor, 2, 50)
  allowLaneLeft(ctx, laceColor, 2, 75)
  allowLaneLeft(ctx, laceColor, 2, 100)
  // V部分＿右
  allowLaneRight(ctx, laceColor, 3, 3)
  allowLaneRight(ctx, laceColor, -9, 8)
  allowLaneRight(ctx, laceColor, -21, 13)
  allowLaneRight(ctx, laceColor, -33, 18)
  allowLaneRight(ctx, laceColor, -47, 29)
  // 矢印レース中央
  allowLaneCenter(ctx, laceColor, -5, 20)

  webKnots(ctx, laceColor, 30, -60) // ツーピースの間
  webKnots(ctx, laceColor, -65, 65) // ツーピースの間
  webKnots(ctx, laceColor, -120, 120) // ツーピース下
}
const allowLaneCenter = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number) => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#383838'
  // 左
  ctx.beginPath()
  ctx.moveTo(577 + x, 204 + y) //左上
  ctx.quadraticCurveTo(580 + x, 216 + y, 580 + x, 216 + y) //左下
  ctx.quadraticCurveTo(598 + x, 230 + y, 598 + x, 230 + y) //右下
  ctx.quadraticCurveTo(603 + x, 227 + y, 603 + x, 223 + y) //右上
  ctx.quadraticCurveTo(588 + x, 206 + y, 577 + x, 204 + y) //左上
  ctx.fill()
  ctx.moveTo(580 + x, 214 + y) //左下
  ctx.quadraticCurveTo(590 + x, 220 + y, 599 + x, 229 + y) //右下
  ctx.stroke()
  ctx.closePath()
  // 右
  ctx.beginPath()
  ctx.moveTo(604 + x, 224 + y) //左上
  ctx.quadraticCurveTo(598 + x, 230 + y, 598 + x, 230 + y) //左下
  ctx.quadraticCurveTo(618 + x, 247 + y, 618 + x, 247 + y) //右下
  ctx.quadraticCurveTo(628 + x, 245 + y, 628 + x, 245 + y) //右上
  ctx.quadraticCurveTo(616 + x, 228 + y, 604 + x, 224 + y) //左上
  ctx.fill()
  ctx.moveTo(598 + x, 230 + y) //左下
  ctx.quadraticCurveTo(610 + x, 233 + y, 618 + x, 247 + y) //右下
  ctx.stroke()
  ctx.closePath()
}

const allowLaneRight = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number) => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(663 + x, 198 + y) //左上
  ctx.quadraticCurveTo(658 + x, 195 + y, 658 + x, 202 + y) //左下
  ctx.quadraticCurveTo(678 + x, 232 + y, 676 + x, 232 + y) //右下
  ctx.quadraticCurveTo(682 + x, 232 + y, 682 + x, 229 + y) //右上
  ctx.quadraticCurveTo(675 + x, 210 + y, 663 + x, 198 + y) //左上
  ctx.fill()
  ctx.moveTo(660 + x, 202 + y) //左下
  ctx.quadraticCurveTo(673 + x, 217 + y, 678 + x, 232 + y) //右下
  ctx.stroke()
  ctx.closePath()
}

const allowLaneLeft = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number) => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(584 + x, 101 + y) //左上
  ctx.quadraticCurveTo(580 + x, 105 + y, 582 + x, 110 + y) //左下
  ctx.quadraticCurveTo(606 + x, 131 + y, 606 + x, 131 + y) //右下
  ctx.quadraticCurveTo(608 + x, 125 + y, 608 + x, 122 + y) //右上
  ctx.quadraticCurveTo(594 + x, 107 + y, 584 + x, 101 + y) //左上
  ctx.fill()
  ctx.moveTo(582 + x, 109 + y) //左下
  ctx.quadraticCurveTo(590 + x, 111 + y, 606 + x, 131 + y) //右下
  ctx.stroke()
  ctx.closePath()
}

const crossJointLace = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number) => {
  // 左下→右上
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(518 + x, 235 + y) //左上
  ctx.quadraticCurveTo(513 + x, 237 + y, 518 + x, 245 + y) //左下
  ctx.quadraticCurveTo(552 + x, 241 + y, 555 + x, 245 + y) //右下
  ctx.quadraticCurveTo(558 + x, 237 + y, 554 + x, 235 + y) //右上
  ctx.quadraticCurveTo(518 + x, 233 + y, 518 + x, 235 + y) //左上
  ctx.fill()
  ctx.moveTo(518 + x, 243 + y) //左下
  ctx.quadraticCurveTo(552 + x, 237 + y, 555 + x, 243 + y) //右下
  ctx.stroke()
  ctx.closePath()

  // 左上→右下
  ctx.beginPath()
  ctx.moveTo(530 + x, 215 + y) //左上
  ctx.quadraticCurveTo(523 + x, 214 + y, 527 + x, 224 + y) //左下
  ctx.quadraticCurveTo(537 + x, 236 + y, 540 + x, 260 + y) //右下左
  ctx.quadraticCurveTo(546 + x, 261 + y, 547 + x, 261 + y) //右下右
  ctx.quadraticCurveTo(550 + x, 235 + y, 530 + x, 215 + y) //左上
  ctx.fill()
  ctx.moveTo(525 + x, 220 + y) //左上
  ctx.quadraticCurveTo(537 + x, 220 + y, 542 + x, 260 + y) //右下左
  ctx.stroke()
  ctx.closePath()
}

const underKnotLace = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number) => {
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(483 + x, 287 + y) //左上
  ctx.quadraticCurveTo(474 + x, 292 + y, 477 + x, 297 + y) //左下
  ctx.quadraticCurveTo(494 + x, 315 + y, 494 + x, 315 + y) //右下
  ctx.quadraticCurveTo(502 + x, 314 + y, 502 + x, 307 + y) //右上
  ctx.quadraticCurveTo(494 + x, 297 + y, 483 + x, 287 + y) //左上
  ctx.fill()
  ctx.moveTo(477 + x, 295 + y) //左下
  ctx.quadraticCurveTo(480 + x, 295 + y, 496 + x, 314 + y) //右下
  ctx.stroke()
  ctx.closePath()
}
