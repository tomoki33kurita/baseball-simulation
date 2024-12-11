import { webKnots } from '@/util/canvas/lace/webKnots'
import { webToCatchFaceConnect } from '../lace/webToCatchFaceConnect'
import { connectWebToIndex, connectWebToIndexTop, connectWebToThumb, connectWebToThumbTop } from '../lace/connectWebAndFinger'

export const onePeaceWeb = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.fillStyle = webColor
  ctx.strokeStyle = '#383838'
  // ウェブパーツ
  ctx.beginPath()
  ctx.moveTo(576, 44) // 左上
  ctx.quadraticCurveTo(534, 103, 498, 211) // 左下
  ctx.quadraticCurveTo(561, 255, 605, 342) //右下
  ctx.quadraticCurveTo(630, 347, 635, 337) //
  ctx.quadraticCurveTo(703, 253, 721, 245) //右上
  ctx.quadraticCurveTo(720, 150, 576, 44) //左上
  ctx.fill()
  ctx.quadraticCurveTo(498, 211, 500, 212) // 左下の革紐の穴上部
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
  ctx.moveTo(557, 96) // 左上
  ctx.quadraticCurveTo(636, 173, 685, 272) // 左下
  ctx.moveTo(554, 100) // 左上
  ctx.quadraticCurveTo(633, 177, 682, 276) // 左下
  // 中間の四角＿左辺
  ctx.moveTo(557, 103) // 左上
  ctx.quadraticCurveTo(547, 122, 541, 137) // 左下
  ctx.moveTo(560, 105) // 左上
  ctx.quadraticCurveTo(551, 124, 544, 139) // 左下
  // 中間の四角＿下辺
  ctx.moveTo(541, 137) // 左上
  ctx.quadraticCurveTo(614, 217, 660, 304) // 右下
  ctx.moveTo(541, 132) // 左上
  ctx.quadraticCurveTo(614, 212, 660, 298) // 右下
  // 中間の四角＿右辺
  ctx.moveTo(685, 272) // 左上
  ctx.quadraticCurveTo(673, 284, 660, 304) // 左下
  ctx.moveTo(680, 272) // 左上
  ctx.quadraticCurveTo(670, 282, 657, 300) // 左下

  // 横向き＿下
  ctx.moveTo(526, 152) // 左上
  ctx.quadraticCurveTo(615, 240, 647, 325) // 右下
  ctx.moveTo(525, 154) // 左上
  ctx.quadraticCurveTo(602, 235, 646, 326) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = '#383838'
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
  ctx.moveTo(546, 157) // 左上
  ctx.quadraticCurveTo(546, 168, 546, 168) //左下
  ctx.quadraticCurveTo(570, 180, 601, 185) //右下
  ctx.quadraticCurveTo(601, 175, 601, 174) //右上
  ctx.quadraticCurveTo(571, 168, 546, 157) //左上
  ctx.fill()
  ctx.moveTo(546, 166) // 左
  ctx.quadraticCurveTo(571, 178, 601, 183) //右
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
  ctx.moveTo(624, 217) // 左下
  ctx.quadraticCurveTo(630, 247, 635, 283) //右下
  ctx.quadraticCurveTo(639, 285, 645, 279) //右上
  ctx.quadraticCurveTo(642, 244, 633, 215) //左上
  ctx.quadraticCurveTo(628, 211, 624, 217) //左下
  ctx.fill()
  ctx.moveTo(625, 217) // 上
  ctx.quadraticCurveTo(635, 248, 637, 283) //下
  ctx.stroke()
  ctx.closePath()

  webToCatchFaceConnect(ctx, laceColor, -35, 17)
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
  connectWebToIndex(ctx, laceColor, 10, -15) //
  connectWebToIndex(ctx, laceColor, -12, 38) //
  connectWebToThumbTop(ctx, laceColor, 0, 0)
  connectWebToThumbTop(ctx, laceColor, -10, 10)
  connectWebToThumb(ctx, laceColor, 60, 30) //
  connectWebToThumb(ctx, laceColor, 20, -25) //
  connectWebToThumb(ctx, laceColor, -5, 1) //
  webKnots(ctx, laceColor, -50, 50) // 捕球面寄りのウェブ結び目
}
