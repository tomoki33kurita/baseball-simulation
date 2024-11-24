import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWeb2 } from './parts/sideParts'
import { verticalPartOfOutfielderWeb, verticalPartOfWebWithLace } from './parts/verticalParts'

const laceOfLoopOfNet3 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(625 + x, 240 + y) // 左＿左
  ctx.quadraticCurveTo(630 + x, 243 + y, 630 + x, 243 + y) // 左＿右
  ctx.quadraticCurveTo(641 + x, 254 + y, 622 + x, 301 + y) // 右＿左
  ctx.quadraticCurveTo(620 + x, 320 + y, 631 + x, 320 + y) // 右＿右
  ctx.quadraticCurveTo(630 + x, 312 + y, 629 + x, 310 + y) // 右＿上
  ctx.quadraticCurveTo(655 + x, 253 + y, 635 + x, 237 + y) // 左＿上
  ctx.quadraticCurveTo(627 + x, 233 + y, 625 + x, 240 + y) // 左＿左
  ctx.fill()
  // 右側面
  ctx.moveTo(638 + x, 285 + y) //
  ctx.quadraticCurveTo(626 + x, 304 + y, 629 + x, 319 + y) //
  // // 左側面
  ctx.moveTo(626 + x, 238 + y) //
  ctx.quadraticCurveTo(646 + x, 246 + y, 631 + x, 279 + y) //
  ctx.stroke()
}

const laceOfLoopOfNet4 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(618 + x, 249 + y) // 左＿左
  ctx.quadraticCurveTo(614 + x, 250 + y, 621 + x, 255 + y) // 左＿右
  ctx.quadraticCurveTo(656 + x, 265 + y, 660 + x, 297 + y) // 右＿左
  ctx.quadraticCurveTo(670 + x, 292 + y, 665 + x, 283 + y) // 右＿右
  ctx.quadraticCurveTo(651 + x, 253 + y, 628 + x, 251 + y) // 左＿上
  ctx.quadraticCurveTo(618 + x, 249 + y, 618 + x, 249 + y) // 左＿左
  ctx.fill()
  // 左側面
  ctx.moveTo(617 + x, 250 + y) //
  ctx.quadraticCurveTo(629 + x, 251 + y, 649 + x, 260 + y) //
  // 右側面
  ctx.moveTo(645 + x, 268 + y) //
  ctx.quadraticCurveTo(660 + x, 277 + y, 662 + x, 295 + y) //
  ctx.stroke()
}

const laceOfAroundThumbFinger = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(672 + x, 280 + y) // 左上
  ctx.quadraticCurveTo(667 + x, 276 + y, 665 + x, 285 + y) // 左下
  ctx.quadraticCurveTo(669 + x, 290 + y, 667 + x, 303 + y) // 右下
  ctx.quadraticCurveTo(670 + x, 305 + y, 676 + x, 300 + y) // 右上
  ctx.quadraticCurveTo(677 + x, 290 + y, 672 + x, 280 + y) // 左上
  ctx.fill()
  ctx.moveTo(667 + x, 283 + y) // 左上
  ctx.quadraticCurveTo(673 + x, 295 + y, 668 + x, 302 + y) // 左下
  ctx.stroke()
}

const laceOfVerticalWebPartsRight = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(644 + x, 186 + y) // 左上
  ctx.quadraticCurveTo(640 + x, 187 + y, 641 + x, 193 + y) // 左下
  ctx.quadraticCurveTo(653 + x, 202 + y, 658 + x, 202 + y) // 右下
  ctx.quadraticCurveTo(664 + x, 200 + y, 662 + x, 195 + y) // 右上
  ctx.quadraticCurveTo(644 + x, 186 + y, 644 + x, 186 + y) // 左上
  ctx.fill()
  ctx.moveTo(643 + x, 186 + y) // 左上
  ctx.quadraticCurveTo(654 + x, 196 + y, 662 + x, 195 + y) // 左下
  ctx.stroke()
}

const upRightDownLeft = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.fillStyle = laceColor
  // 左下→右上
  ctx.moveTo(476 + x, 282 + y) //左上
  ctx.quadraticCurveTo(475 + x, 285 + y, 483 + x, 290 + y) //左下
  ctx.quadraticCurveTo(527 + x, 258 + y, 532 + x, 262 + y) //右上＿下
  ctx.quadraticCurveTo(532 + x, 255 + y, 528 + x, 255 + y) //右上＿上
  ctx.quadraticCurveTo(500 + x, 254 + y, 476 + x, 282 + y) //
  ctx.fill()
  ctx.moveTo(481 + x, 290 + y) //左上
  ctx.quadraticCurveTo(505 + x, 260 + y, 532 + x, 262 + y) //左下
  ctx.stroke()
  ctx.closePath()
}

const laceOfLoopOfNet1 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(525 + x, 139 + y) // 左＿左
  ctx.quadraticCurveTo(527 + x, 150 + y, 538 + x, 149 + y) // 左＿右
  ctx.quadraticCurveTo(580 + x, 151 + y, 600 + x, 168 + y) // 右＿左
  ctx.quadraticCurveTo(605 + x, 175 + y, 605 + x, 175 + y) // 右＿右
  ctx.quadraticCurveTo(611 + x, 170 + y, 608 + x, 165 + y) // 右＿右＿上
  ctx.quadraticCurveTo(583 + x, 140 + y, 525 + x, 139 + y) // 左＿左
  ctx.fill()
  // 右側面
  ctx.moveTo(573 + x, 154 + y) //
  ctx.quadraticCurveTo(604 + x, 160 + y, 607 + x, 174 + y) //
  // 左側面
  ctx.moveTo(526 + x, 142 + y) //
  ctx.quadraticCurveTo(530 + x, 142 + y, 560 + x, 143 + y) //
  ctx.stroke()
}

const laceOfLoopOfNet2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(523 + x, 128 + y) // 左＿左
  ctx.quadraticCurveTo(532 + x, 130 + y, 532 + x, 128 + y) // 左＿右
  ctx.quadraticCurveTo(547 + x, 128 + y, 561 + x, 144 + y) // 中間＿左
  ctx.quadraticCurveTo(567 + x, 173 + y, 566 + x, 201 + y) // 右＿左
  ctx.quadraticCurveTo(569 + x, 210 + y, 579 + x, 210 + y) // 右＿右
  ctx.quadraticCurveTo(576 + x, 204 + y, 576 + x, 204 + y) // 右＿奥
  ctx.quadraticCurveTo(577 + x, 176 + y, 574 + x, 154 + y) // 中間＿右
  ctx.quadraticCurveTo(568 + x, 122 + y, 537 + x, 118 + y) // 左＿上
  ctx.quadraticCurveTo(528 + x, 117 + y, 523 + x, 128 + y) // 左＿上
  ctx.fill()
  // 右側面
  ctx.moveTo(524 + x, 127 + y) //
  ctx.quadraticCurveTo(540 + x, 121 + y, 555 + x, 138 + y) //
  // // 左側面
  ctx.moveTo(571 + x, 154 + y) //
  ctx.quadraticCurveTo(574 + x, 203 + y, 574 + x, 203 + y) //
  ctx.quadraticCurveTo(573 + x, 207 + y, 577 + x, 209 + y) //
  ctx.stroke()
}

const laceOfAroundIndexFinger = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(527 + x, 105 + y) // 左上
  ctx.quadraticCurveTo(523 + x, 107 + y, 525 + x, 113 + y) // 左下
  ctx.quadraticCurveTo(547 + x, 111 + y, 547 + x, 111 + y) // 右下
  ctx.quadraticCurveTo(552 + x, 105 + y, 551 + x, 103 + y) // 右上
  ctx.quadraticCurveTo(537 + x, 100 + y, 527 + x, 105 + y) // 左上
  ctx.fill()
  ctx.moveTo(526 + x, 111 + y) // 左上
  ctx.quadraticCurveTo(538 + x, 108 + y, 548 + x, 110 + y) // 左下
  ctx.stroke()
}

const laceOfVerticalWebPartsLeft = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(611 + x, 145 + y) // 左上
  ctx.quadraticCurveTo(607 + x, 150 + y, 607 + x, 153 + y) // 左下
  ctx.quadraticCurveTo(608 + x, 159 + y, 620 + x, 167 + y) // 右下
  ctx.quadraticCurveTo(623 + x, 162 + y, 624 + x, 162 + y) // 右上
  ctx.quadraticCurveTo(615 + x, 150 + y, 611 + x, 145 + y) // 左上
  ctx.fill()
  ctx.moveTo(611 + x, 147 + y) // 左上
  ctx.quadraticCurveTo(615 + x, 156 + y, 624 + x, 164 + y) // 左下
  ctx.stroke()
}

export const tNetWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // 横上パーツ
  topSidePartOfWeb2(ctx, webColor, laceColor, stitchColor)
  // 縦パーツ
  verticalPartOfWebWithLace(ctx, webColor, laceColor, stitchColor)
  // laceここから
  // 根元
  laceOfLoopOfNet3(ctx, laceColor, -63, 64)
  laceOfLoopOfNet4(ctx, laceColor, -60, 63)
  // 5段目
  laceOfLoopOfNet3(ctx, laceColor, -39, 41)
  laceOfLoopOfNet4(ctx, laceColor, -40, 45)
  // 4段目
  laceOfLoopOfNet3(ctx, laceColor, -19, 21)
  laceOfLoopOfNet4(ctx, laceColor, -20, 21)
  // 3段目
  laceOfLoopOfNet3(ctx, laceColor, 0, 0)
  laceOfLoopOfNet4(ctx, laceColor, 0, 0)
  // 2段目
  laceOfLoopOfNet3(ctx, laceColor, 20, -18)
  laceOfLoopOfNet4(ctx, laceColor, 20, -18)
  // 1段目
  laceOfLoopOfNet3(ctx, laceColor, 38, -40)
  laceOfLoopOfNet4(ctx, laceColor, 30, -42)

  laceOfAroundThumbFinger(ctx, laceColor, 4, -8)
  laceOfAroundThumbFinger(ctx, laceColor, -15, 10)
  laceOfAroundThumbFinger(ctx, laceColor, -36, 26)
  laceOfAroundThumbFinger(ctx, laceColor, -54, 43)
  laceOfAroundThumbFinger(ctx, laceColor, -74, 62)

  laceOfVerticalWebPartsRight(ctx, laceColor, 5, 8)
  laceOfVerticalWebPartsRight(ctx, laceColor, -12, 30)
  laceOfVerticalWebPartsRight(ctx, laceColor, -30, 50)
  laceOfVerticalWebPartsRight(ctx, laceColor, -49, 71)
  laceOfVerticalWebPartsRight(ctx, laceColor, -68, 93)
  laceOfVerticalWebPartsRight(ctx, laceColor, -87, 115)
  // upLeftDownRight3(ctx, laceColor)

  // 左窓部分
  // 5段目
  upRightDownLeft(ctx, laceColor, 5, 15)
  laceOfLoopOfNet2(ctx, laceColor, -48, 94)
  laceOfLoopOfNet1(ctx, laceColor, -48, 92)
  // 4段目
  laceOfLoopOfNet2(ctx, laceColor, -29, 58)
  laceOfLoopOfNet1(ctx, laceColor, -33, 58)
  // 3段目
  laceOfLoopOfNet2(ctx, laceColor, -15, 28)
  laceOfLoopOfNet1(ctx, laceColor, -17, 28)
  // 2段目
  laceOfLoopOfNet2(ctx, laceColor, 0, 0)
  laceOfLoopOfNet1(ctx, laceColor, 0, 0)
  // 1段目
  laceOfLoopOfNet2(ctx, laceColor, 17, -25)
  laceOfLoopOfNet1(ctx, laceColor, 11, -26)
  // laceOfLoopOfNet1(ctx, laceColor, -45, 100)

  laceOfAroundIndexFinger(ctx, laceColor, 0, 2)
  laceOfAroundIndexFinger(ctx, laceColor, -12, 27)
  laceOfAroundIndexFinger(ctx, laceColor, -24, 54)
  laceOfAroundIndexFinger(ctx, laceColor, -39, 85)
  laceOfAroundIndexFinger(ctx, laceColor, -52, 120)
  laceOfVerticalWebPartsLeft(ctx, laceColor, 0, 0)
  laceOfVerticalWebPartsLeft(ctx, laceColor, -13, 23)
  laceOfVerticalWebPartsLeft(ctx, laceColor, -30, 50)
  laceOfVerticalWebPartsLeft(ctx, laceColor, -49, 77)
  laceOfVerticalWebPartsLeft(ctx, laceColor, -65, 103)
  laceOfVerticalWebPartsLeft(ctx, laceColor, -84, 128)

  webKnots(ctx, laceColor, -110, 120) // 捕球面上のウェブ結び目
}
