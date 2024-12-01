import { webKnots } from '@/util/canvas/lace/webKnots'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'
import { topSidePartOfWebForPitcher } from './parts/sideParts'

export const flat2Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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
  ctx.quadraticCurveTo(531, 117, 531, 117) //
  ctx.quadraticCurveTo(562, 149, 558, 149) //
  ctx.quadraticCurveTo(521, 144, 521, 144) //
  ctx.quadraticCurveTo(505, 180, 505, 180) //
  ctx.quadraticCurveTo(536, 210, 536, 210) //
  ctx.quadraticCurveTo(492, 212, 492, 212) //
  ctx.quadraticCurveTo(482, 247, 482, 247) // 左下1
  ctx.quadraticCurveTo(509, 255, 509, 255) // 左下2
  ctx.quadraticCurveTo(491, 276, 491, 276) //
  ctx.quadraticCurveTo(516, 326, 565, 357) // 右下1
  ctx.quadraticCurveTo(569, 360, 569, 360) // 右下2
  ctx.quadraticCurveTo(576, 335, 576, 335) //
  ctx.quadraticCurveTo(592, 351, 592, 351) //
  ctx.quadraticCurveTo(615, 340, 615, 340) //
  ctx.quadraticCurveTo(613, 304, 613, 304) //
  ctx.quadraticCurveTo(631, 328, 631, 328) //
  ctx.quadraticCurveTo(653, 312, 653, 312) //
  ctx.quadraticCurveTo(649, 277, 649, 277)
  ctx.quadraticCurveTo(667, 300, 667, 300) //
  ctx.quadraticCurveTo(637, 324, 693, 280) // 右上
  ctx.quadraticCurveTo(660, 140, 549, 81) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(552, 87) // 左上
  ctx.quadraticCurveTo(537, 119, 537, 119) //
  ctx.quadraticCurveTo(553, 130, 562, 153) //
  ctx.quadraticCurveTo(522, 149, 522, 149) //
  ctx.quadraticCurveTo(508, 178, 508, 178) //
  ctx.quadraticCurveTo(543, 213, 543, 213) //
  ctx.quadraticCurveTo(494, 217, 494, 217) //
  ctx.quadraticCurveTo(487, 245, 487, 245) //
  ctx.quadraticCurveTo(514, 255, 514, 255) //
  ctx.quadraticCurveTo(495, 278, 495, 278) //
  ctx.quadraticCurveTo(522, 328, 567, 353) //
  ctx.quadraticCurveTo(576, 331, 576, 331) //
  ctx.quadraticCurveTo(594, 346, 594, 346) //
  ctx.quadraticCurveTo(613, 337, 613, 337) //
  ctx.quadraticCurveTo(610, 297, 610, 297) //
  ctx.quadraticCurveTo(633, 324, 633, 324) //
  ctx.quadraticCurveTo(651, 311, 651, 311) //
  ctx.quadraticCurveTo(646, 269, 646, 269) //
  ctx.quadraticCurveTo(669, 296, 669, 296) //
  ctx.quadraticCurveTo(690, 278, 690, 278) //
  ctx.quadraticCurveTo(655, 146, 552, 87) // 上のライン

  // 内側
  ctx.moveTo(555, 87) // 左上
  ctx.quadraticCurveTo(540, 119, 540, 119) //
  ctx.quadraticCurveTo(555, 130, 568, 156) //
  ctx.quadraticCurveTo(524, 152, 524, 152) //
  ctx.quadraticCurveTo(512, 178, 512, 178) //
  ctx.quadraticCurveTo(547, 214, 547, 214) //
  ctx.quadraticCurveTo(495, 220, 495, 220) //
  ctx.quadraticCurveTo(491, 243, 491, 243) //
  ctx.quadraticCurveTo(519, 253, 519, 253) //
  ctx.quadraticCurveTo(498, 278, 498, 278) //
  ctx.quadraticCurveTo(524, 325, 565, 349) //
  ctx.quadraticCurveTo(574, 328, 574, 328) //
  ctx.quadraticCurveTo(593, 342, 593, 342) //
  ctx.quadraticCurveTo(610, 335, 610, 335) //
  ctx.quadraticCurveTo(608, 295, 608, 295) //
  ctx.quadraticCurveTo(634, 318, 634, 318) //
  ctx.quadraticCurveTo(648, 309, 648, 309) //
  ctx.quadraticCurveTo(642, 261, 642, 261) //
  ctx.quadraticCurveTo(669, 292, 669, 292) //
  ctx.quadraticCurveTo(687, 274, 687, 274) //
  // ctx.quadraticCurveTo() //
  // ctx.quadraticCurveTo() //
  // ctx.quadraticCurveTo() //
  // ctx.quadraticCurveTo() //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  // stitchここまで
  ctx.strokeStyle = laceColor
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
