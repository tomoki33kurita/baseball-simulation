import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { connectWebToIndex, connectWebToIndexTop, connectWebToThumb, connectWebToThumbTop } from '../lace/connectWebAndFinger'

export const twoPeaceWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = webColor
  ctx.strokeStyle = '#282828'
  // ウェブパーツ // 先端側
  topSidePartOfWebForPitcher(ctx, webColor, laceColor, stitchColor) // ウェブ先端
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(576, 44) // 左上
  ctx.quadraticCurveTo(534, 103, 498, 211) // 左下
  ctx.quadraticCurveTo(561, 255, 605, 342) //右下
  ctx.quadraticCurveTo(630, 347, 635, 337) //
  ctx.quadraticCurveTo(703, 253, 721, 245) //右上
  ctx.quadraticCurveTo(625, 70, 576, 44) //左上
  ctx.fill()
  // ctx.stroke()
  ctx.quadraticCurveTo(498, 211, 500, 212) // 左下の革紐の穴上部

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
  // 中間の四角＿上辺
  ctx.moveTo(557, 103) // 左上
  ctx.quadraticCurveTo(636, 173, 682, 268) // 左下
  ctx.moveTo(554, 106) // 左上
  ctx.quadraticCurveTo(633, 177, 679, 272) // 左下
  // 中間の四角＿左辺
  ctx.moveTo(557, 103) // 左上
  ctx.quadraticCurveTo(529, 160, 529, 160) // 左下
  ctx.moveTo(560, 105) // 左上
  ctx.quadraticCurveTo(533, 160, 533, 160) // 左下
  // 中間の四角＿右辺
  ctx.moveTo(682, 268) // 左上
  ctx.quadraticCurveTo(642, 318, 642, 318) // 左下
  ctx.moveTo(678, 268) // 左上
  ctx.quadraticCurveTo(638, 318, 638, 318) // 左下
  // 中間の四角＿下辺
  ctx.moveTo(529, 160) // 左上
  ctx.quadraticCurveTo(615, 240, 642, 318) // 右下
  ctx.moveTo(528, 163) // 左上
  ctx.quadraticCurveTo(602, 235, 641, 322) // 右下
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
  ctx.strokeStyle = '#282828'
  ctx.closePath()
  // stitchここまで

  // laceここから
  // 左上
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(577, 100) // 左上
  ctx.quadraticCurveTo(589, 131, 602, 168) //左下
  ctx.quadraticCurveTo(610, 165, 610, 165) //右下
  ctx.quadraticCurveTo(605, 116, 588, 98) //右上
  ctx.quadraticCurveTo(581, 93, 577, 100) //右上
  ctx.fill()
  ctx.moveTo(578, 97) // 左上
  ctx.quadraticCurveTo(595, 128, 605, 168) //左下
  ctx.stroke()
  ctx.closePath()

  // 左下
  ctx.beginPath()
  ctx.moveTo(536, 187) // 左上
  ctx.quadraticCurveTo(536, 198, 536, 198) //左下
  ctx.quadraticCurveTo(560, 210, 591, 215) //右下
  ctx.quadraticCurveTo(591, 205, 591, 204) //右上
  ctx.quadraticCurveTo(561, 198, 536, 187) //左上
  ctx.fill()
  ctx.moveTo(536, 196) // 左
  ctx.quadraticCurveTo(561, 208, 591, 213) //右
  ctx.stroke()
  ctx.closePath()

  // 右上
  ctx.beginPath()
  ctx.moveTo(635, 199) // 左上
  ctx.quadraticCurveTo(634, 208, 634, 208) //左下
  ctx.quadraticCurveTo(663, 226, 680, 237) //右下
  ctx.quadraticCurveTo(683, 233, 681, 223) //右上
  ctx.quadraticCurveTo(654, 205, 635, 199) //左上
  ctx.fill()
  ctx.moveTo(634, 207) //左下
  ctx.quadraticCurveTo(656, 216, 682, 235) //右下
  ctx.stroke()
  ctx.closePath()

  // 右下
  ctx.beginPath()
  ctx.moveTo(609, 237) // 左下
  ctx.quadraticCurveTo(615, 267, 620, 303) //右下
  ctx.quadraticCurveTo(624, 305, 630, 299) //右上
  ctx.quadraticCurveTo(627, 264, 618, 235) //左上
  ctx.quadraticCurveTo(613, 231, 609, 237) //左下
  ctx.fill()
  ctx.moveTo(610, 237) // 上
  ctx.quadraticCurveTo(620, 268, 622, 303) //下
  ctx.stroke()
  ctx.closePath()

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
  webKnots(ctx, laceColor, -65, 65) // ツーピースの間
  webKnots(ctx, laceColor, -120, 120) // ツーピース下
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
