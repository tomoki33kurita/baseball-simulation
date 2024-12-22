import { webKnots } from '@/util/canvas/lace/webKnots'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'
import { topSidePartOfWebForPitcher } from './parts/sideParts'

const leftLace1 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  // laceここから
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.moveTo(615, 86) // 右上
  ctx.quadraticCurveTo(582, 86, 558, 105) // 左上
  ctx.quadraticCurveTo(551, 113, 565, 114) // 左下
  ctx.quadraticCurveTo(600, 95, 620, 95) // 右下
  ctx.quadraticCurveTo(622, 86, 615, 84) // 右上
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(562, 112)
  ctx.quadraticCurveTo(590, 91, 620, 93) //
  // ctx.quadraticCurveTo() //
  ctx.stroke()
  ctx.closePath()
}

const leftLace2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number, numerator: number, scaleSize: number): void => {
  // laceここから
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.beginPath()
  ctx.moveTo(548 + x, 115 + y) // 左上
  ctx.quadraticCurveTo(532 + x, 135 + y, 532 + x, 135 + y) // 左下
  ctx.quadraticCurveTo(537 + x, 138 + y, 537 + x, 138 + y) //　右下
  ctx.quadraticCurveTo(557 + x, 120 + y, 557 + x, 120 + y) // 右上
  ctx.quadraticCurveTo(548 + x, 115 + y, 548 + x, 115 + y) //
  ctx.fill()
  ctx.moveTo(534 + x, 135 + y)
  ctx.quadraticCurveTo(545 + x, 121 + y, 557 + x, 120 + y) //
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(541 + x, 142 + y) // 左下
  ctx.quadraticCurveTo(565 + x, 156 + y, 565 + x, 156 + y) // 右下
  ctx.quadraticCurveTo(573 + x, 151 + y, 570 + x, 149 + y) // 右上
  ctx.quadraticCurveTo(560 + x, 136 + y, 546 + x, 136 + y) // 左上
  ctx.quadraticCurveTo(541 + x, 142 + y, 541 + x, 142 + y) // 左下
  ctx.fill()
  ctx.moveTo(541 + x, 142 + y) // 左下
  ctx.quadraticCurveTo(555 + x, 143 + y, 565 + x, 156 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(541 + x, 132 + y) // 左上
  ctx.quadraticCurveTo(529 + x, 139 + y, 524 + x, 159 + y) //
  ctx.quadraticCurveTo(528 + x, 163 + y, 532 + x, 159 + y) //
  ctx.quadraticCurveTo(536 + x, 142 + y, 547 + x, 135 + y) //
  ctx.quadraticCurveTo(541 + x, 132 + y, 541 + x, 132 + y) //
  ctx.fill()
  ctx.moveTo(545 + x, 135 + y)
  ctx.quadraticCurveTo(529 + x, 147 + y, 532 + x, 159 + y) //
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

const rightLace1 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  // laceここから
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.lineWidth = 0.8
  ctx.moveTo(692, 195) // 右上
  ctx.quadraticCurveTo(675, 263, 675, 263) //
  ctx.quadraticCurveTo(677, 278, 682, 273) //
  ctx.quadraticCurveTo(700, 237, 700, 207) //
  ctx.quadraticCurveTo(699, 190, 690, 195) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(694, 195) // 右上
  ctx.quadraticCurveTo(690, 230, 675, 263) //
  // ctx.quadraticCurveTo() //
  ctx.stroke()
  ctx.closePath()
}

const rightLace2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number, numerator: number, scaleSize: number): void => {
  // laceここから
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.beginPath()
  ctx.moveTo(666 + x, 275 + y) // 右上
  ctx.quadraticCurveTo(663 + x, 285 + y, 657 + x, 295 + y) //
  ctx.quadraticCurveTo(662 + x, 299 + y, 662 + x, 299 + y) //
  ctx.quadraticCurveTo(671 + x, 285 + y, 671 + x, 285 + y) //
  ctx.quadraticCurveTo(673 + x, 275 + y, 666 + x, 275 + y) //
  ctx.fill()
  ctx.moveTo(668 + x, 276 + y) // 右上
  ctx.quadraticCurveTo(670 + x, 284 + y, 660 + x, 296 + y) //
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(654 + x, 287 + y) // 右上
  ctx.quadraticCurveTo(645 + x, 297 + y, 636 + x, 302 + y) //
  ctx.quadraticCurveTo(639 + x, 307 + y, 641 + x, 308 + y) //
  ctx.quadraticCurveTo(658 + x, 297 + y, 658 + x, 297 + y) //
  ctx.quadraticCurveTo(660 + x, 290 + y, 654 + x, 287 + y) //
  ctx.fill()
  ctx.moveTo(656 + x, 287 + y) // 右上
  ctx.quadraticCurveTo(647 + x, 299 + y, 638 + x, 302 + y) //
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(642 + x, 259 + y) // 右上
  ctx.quadraticCurveTo(636 + x, 257 + y, 636 + x, 264 + y) //
  ctx.quadraticCurveTo(648 + x, 292 + y, 648 + x, 292 + y) //
  ctx.quadraticCurveTo(656 + x, 286 + y, 656 + x, 286 + y) //
  ctx.quadraticCurveTo(652 + x, 271 + y, 642 + x, 259 + y) //
  ctx.fill()
  ctx.moveTo(638 + x, 264 + y) // 右上
  ctx.quadraticCurveTo(652 + x, 292 + y, 648 + x, 292 + y) //
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

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
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  // stitchここまで
  ctx.lineWidth = 0.8

  // // laceここから
  // ctx.strokeStyle = laceColor
  // ctx.beginPath()
  // ctx.lineWidth = 1.0
  // ctx.moveTo(0, 0)
  // // ctx.quadraticCurveTo() //
  // // ctx.quadraticCurveTo() //
  // // ctx.quadraticCurveTo() //
  // // ctx.quadraticCurveTo() //
  // ctx.stroke()
  // ctx.closePath()

  leftLace1(ctx, laceColor, 0, 0)
  leftLace2(ctx, laceColor, 0, 0, 0.1, 1)
  leftLace2(ctx, laceColor, -25, 65, 0.1, 1)
  leftLace2(ctx, laceColor, -280, 360, -35, 1)

  rightLace1(ctx, laceColor, 0, 0)
  rightLace2(ctx, laceColor, 0, 0, 0.1, 1)
  rightLace2(ctx, laceColor, -33, 25, 0.1, 1)
  rightLace2(ctx, laceColor, -20, -50, 10, 1)

  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
