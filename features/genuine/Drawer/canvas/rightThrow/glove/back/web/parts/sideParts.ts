import { connectWebToIndex, connectWebToIndexTop, connectWebToThumb, connectWebToThumbTop } from '../../lace/connectWebAndFinger'
import { webTopCross, webTopCrossSingleLeftDown, webTopCrossSingleLeftUp, webTops } from '../../lace/webTop'

export const topSidePartOfWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // 横上パーツ
  ctx.beginPath()
  ctx.moveTo(546, 85) // 横下パーツの左下
  ctx.quadraticCurveTo(650, 145, 687, 282) //右下
  ctx.quadraticCurveTo(700, 285, 704, 270) //
  ctx.quadraticCurveTo(703, 253, 721, 245) //右上
  ctx.quadraticCurveTo(706, 174, 661, 115)
  ctx.quadraticCurveTo(625, 70, 576, 44) //左上
  ctx.quadraticCurveTo(562, 43, 563, 62) //
  ctx.quadraticCurveTo(561, 79, 546, 87) //左下
  ctx.quadraticCurveTo(557, 66, 564, 52) // 左下の革紐の穴上部
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 切り込みライン
  ctx.beginPath()
  ctx.moveTo(573, 67) //左上
  ctx.quadraticCurveTo(659, 125, 700, 249) //右下
  ctx.stroke()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 横向き＿上＿内側
  ctx.moveTo(570, 70) // 左上
  ctx.quadraticCurveTo(659, 132, 697, 253) // 右下
  ctx.quadraticCurveTo(704, 251, 704, 251) // 右上
  ctx.quadraticCurveTo(659, 115, 572, 63) //
  ctx.quadraticCurveTo(570, 70, 570, 70) //
  // 横向き＿上＿外側
  ctx.moveTo(565, 71) // 左上
  ctx.quadraticCurveTo(662, 140, 695, 257) // 右下
  ctx.quadraticCurveTo(709, 255, 707, 248) // 右上
  ctx.quadraticCurveTo(664, 115, 571, 59) //
  ctx.quadraticCurveTo(565, 71, 565, 71) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  // stitchここまで

  connectWebToIndexTop(ctx, laceColor, 0, 0)
  connectWebToIndex(ctx, laceColor, 45, -92) //
  connectWebToThumbTop(ctx, laceColor, 0, 0)
  connectWebToThumb(ctx, laceColor, 62, -63) //
}

export const topSidePartOfWeb2 = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // 横上パーツ
  ctx.beginPath()
  ctx.moveTo(546, 85) // 横下パーツの左下
  ctx.quadraticCurveTo(650, 145, 687, 282) //右下
  ctx.quadraticCurveTo(700, 285, 704, 270) //
  ctx.quadraticCurveTo(703, 253, 721, 245) //右上
  ctx.quadraticCurveTo(706, 174, 661, 115)
  ctx.quadraticCurveTo(625, 70, 576, 44) //左上
  ctx.quadraticCurveTo(562, 43, 563, 62) //
  ctx.quadraticCurveTo(561, 79, 546, 87) //左下
  ctx.quadraticCurveTo(557, 66, 564, 52) // 左下の革紐の穴上部
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 切り込みライン
  ctx.beginPath()
  ctx.moveTo(564, 66) //左上
  ctx.quadraticCurveTo(662, 125, 702, 263) //右下
  ctx.stroke()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])

  // 横向き＿内側
  ctx.moveTo(575, 66) // 左上
  ctx.quadraticCurveTo(667, 127, 702, 253) // 右下
  ctx.quadraticCurveTo(707, 251, 707, 251) // 右上
  ctx.quadraticCurveTo(662, 115, 575, 61) //
  ctx.quadraticCurveTo(575, 66, 575, 66) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  // stitchここまで

  // laceここから
  // webTops(ctx, laceColor, 25, 80) // 右＿親指から1番目
  // webTops(ctx, laceColor, 17, 60) // 右＿親指から2番目
  // webTops(ctx, laceColor, 10, 37) // 右＿親指から3番目
  // webTops(ctx, laceColor, 0, 16) // 右＿親指から4番目
  // webTops(ctx, laceColor, -12, -7) // 右＿親指から5番目
  // webTops(ctx, laceColor, -24, -25) // 右＿親指から6番目
  // webTops(ctx, laceColor, -38, -42) // 右＿親指から7番目
  // webTops(ctx, laceColor, -50, -57) // 右＿親指から8番目
  // webTops(ctx, laceColor, -68, -73) // 右＿親指から8番目
  // webTops(ctx, laceColor, -83, -85) // 右＿親指から8番目
  // webTops(ctx, laceColor, -100, -95) // 右＿親指から8番目
  connectWebToIndexTop(ctx, laceColor, 0, 0)
  connectWebToIndex(ctx, laceColor, 45, -92) //
  connectWebToThumbTop(ctx, laceColor, 0, 0)
  connectWebToThumb(ctx, laceColor, 62, -63) //
}

export const topSidePartOfWebForPitcher = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // 横上パーツ
  ctx.beginPath()
  ctx.moveTo(546, 85) // 横下パーツの左下
  ctx.quadraticCurveTo(645, 135, 687, 282) //右下
  ctx.quadraticCurveTo(700, 285, 704, 270) //
  ctx.quadraticCurveTo(703, 253, 721, 245) //右上
  ctx.quadraticCurveTo(706, 174, 661, 115)
  ctx.quadraticCurveTo(625, 70, 576, 44) //左上
  ctx.quadraticCurveTo(562, 43, 563, 62) //
  ctx.quadraticCurveTo(561, 79, 546, 87) //左下
  ctx.quadraticCurveTo(557, 66, 564, 52) // 左下の革紐の穴上部
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 横向き＿上＿内側
  ctx.moveTo(560, 83) // 左上
  ctx.quadraticCurveTo(656, 130, 694, 271) // 右下
  ctx.quadraticCurveTo(701, 272, 701, 272) // 右上
  ctx.quadraticCurveTo(659, 127, 563, 77) //
  ctx.quadraticCurveTo(560, 81, 560, 83) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  // stitchここまで

  // laceここから
  // webTops(ctx, laceColor, 25, 80) // 右＿親指から1番目
  // webTops(ctx, laceColor, 17, 60) // 右＿親指から2番目
  // webTops(ctx, laceColor, 10, 37) // 右＿親指から3番目
  // webTops(ctx, laceColor, 0, 16) // 右＿親指から4番目
  // webTops(ctx, laceColor, -12, -7) // 右＿親指から5番目
  // webTops(ctx, laceColor, -24, -25) // 右＿親指から6番目
  // webTops(ctx, laceColor, -38, -42) // 右＿親指から7番目
  // webTops(ctx, laceColor, -50, -57) // 右＿親指から8番目
  // webTops(ctx, laceColor, -68, -73) // 右＿親指から8番目
  // webTops(ctx, laceColor, -83, -85) // 右＿親指から8番目
  // webTops(ctx, laceColor, -100, -95) // 右＿親指から8番目
  connectWebToIndexTop(ctx, laceColor, 0, 0)
  connectWebToIndex(ctx, laceColor, 45, -92) //
  connectWebToThumbTop(ctx, laceColor, 0, 0)
  connectWebToThumb(ctx, laceColor, 62, -63) //
}

const jointParts = (ctx: CanvasRenderingContext2D, webColorSecond: string, x: number, y: number, numerator?: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColorSecond
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(602 + x, 94 + y) //左上
  ctx.quadraticCurveTo(590 + x, 92 + y, 581 + x, 107 + y) //左下
  ctx.quadraticCurveTo(595 + x, 116 + y, 608 + x, 134 + y) //右下
  ctx.quadraticCurveTo(618 + x, 127 + y, 620 + x, 113 + y) //右上
  ctx.quadraticCurveTo(611 + x, 99 + y, 602 + x, 94 + y) //左上
  ctx.stroke()
  ctx.fill()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}

const sidePartsOfUnderJoinnt = (ctx: CanvasRenderingContext2D, webColorSecond: string): void => {
  // 横パーツ＿ジョイントの下
  ctx.beginPath()
  ctx.fillStyle = webColorSecond

  ctx.moveTo(550, 80) // 左上
  ctx.quadraticCurveTo(541, 98, 541, 98) //左下
  ctx.quadraticCurveTo(629, 164, 672, 288) //右下
  ctx.quadraticCurveTo(684, 289, 690, 282) //右上
  ctx.quadraticCurveTo(646, 148, 550, 80) // 左上
  ctx.fill()
  // 左側面の断面
  ctx.moveTo(550, 80) // 左上
  ctx.quadraticCurveTo(554, 90, 541, 98) //左下
  // ctx.stroke()
  ctx.closePath()
}

export const topSidePartOfWebWithJoint = (
  ctx: CanvasRenderingContext2D,
  webColorFirst: string,
  webColorSecond: string,
  laceColor: string,
  stitchColor: string
): void => {
  ctx.strokeStyle = '#282828'
  // 親指への革紐
  connectWebToThumbTop(ctx, laceColor, 0, 0)
  connectWebToThumb(ctx, laceColor, 62, -63) //
  connectWebToThumb(ctx, laceColor, 47, -55) //
  ctx.fillStyle = webColorFirst
  // 横パーツ＿ジョイントの上
  ctx.beginPath()
  ctx.moveTo(550, 80) // 横下パーツの左下
  ctx.quadraticCurveTo(640, 142, 690, 280) //右下
  ctx.quadraticCurveTo(700, 285, 704, 270) //
  ctx.quadraticCurveTo(703, 253, 721, 245) //右上
  ctx.quadraticCurveTo(706, 174, 661, 115)
  ctx.quadraticCurveTo(625, 70, 576, 44) //左上
  ctx.quadraticCurveTo(562, 43, 563, 62) //
  ctx.quadraticCurveTo(561, 79, 550, 80) //左下
  ctx.quadraticCurveTo(557, 66, 564, 52) // 左下の革紐の穴上部
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 切り込みライン
  ctx.beginPath()
  ctx.moveTo(563, 62) //左上
  ctx.quadraticCurveTo(659, 125, 702, 263) //右下
  ctx.stroke()
  ctx.closePath()

  // ジョイントパーツ切り込み
  jointParts(ctx, webColorSecond, 0, 0, 0) // 左
  jointParts(ctx, webColorSecond, 57, -27, 7) // 中
  jointParts(ctx, webColorSecond, 110, -105, 18) // 右
  sidePartsOfUnderJoinnt(ctx, webColorSecond)

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 横向き＿ジョイントの上
  ctx.moveTo(575, 65) // 左上
  ctx.quadraticCurveTo(664, 124, 702, 248) // 右下
  ctx.quadraticCurveTo(707, 246, 707, 246) // 右上
  ctx.quadraticCurveTo(662, 114, 575, 59) //
  ctx.quadraticCurveTo(575, 65, 575, 65) //
  // 横向き＿ジョイントの下
  ctx.moveTo(553, 86) // 左上
  ctx.quadraticCurveTo(555, 89, 551, 93) // 左下
  ctx.quadraticCurveTo(641, 167, 681, 284) // 右下
  ctx.quadraticCurveTo(686, 280, 686, 280) // 右上
  ctx.quadraticCurveTo(642, 153, 553, 86) // 左上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  // stitchここまで

  connectWebToIndexTop(ctx, laceColor, 0, 0)
  connectWebToIndex(ctx, laceColor, 45, -92) //
  connectWebToThumbTop(ctx, laceColor, 0, 0)
  connectWebToThumb(ctx, laceColor, 62, -63) //
}

export const middleSidePartOfWeb = (
  ctx: CanvasRenderingContext2D,
  webColor: string,
  laceColor: string,
  stitchColor: string,
  x: number,
  y: number,
  numerator: number,
  scaleSize: number
): void => {
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  connectWebToThumb(ctx, laceColor, -10 + x, -16 + y) //
  connectWebToThumb(ctx, laceColor, 20 + x, -35 + y) //

  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(512 + x, 180 + y) // 左下
  ctx.quadraticCurveTo(587 + x, 240 + y, 612 + x, 328 + y) //右下
  ctx.quadraticCurveTo(643 + x, 320 + y, 660 + x, 300 + y) //右上
  ctx.quadraticCurveTo(628 + x, 180 + y, 537 + x, 120 + y) //左上
  ctx.quadraticCurveTo(517 + x, 148 + y, 512 + x, 180 + y) //左下
  ctx.fill()
  // ctx.quadraticCurveTo(510 +x, 161+y, 522+x, 147+y) // 左下の革紐の穴上部
  ctx.stroke()
  ctx.closePath()
  // 切り込みライン
  ctx.beginPath()
  ctx.moveTo(535 + x, 157 + y) //左上
  ctx.quadraticCurveTo(618 + x, 210 + y, 638 + x, 308 + y) //右下
  ctx.stroke()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 横向き＿下＿内側
  ctx.moveTo(530 + x, 159 + y) // 左上
  ctx.quadraticCurveTo(618 + x, 217 + y, 634 + x, 312 + y) // 左下
  ctx.quadraticCurveTo(641 + x, 310 + y, 641 + x, 310 + y) // 右下
  ctx.quadraticCurveTo(623 + x, 210 + y, 533 + x, 151 + y) // 右上
  ctx.quadraticCurveTo(530 + x, 159 + y, 530 + x, 159 + y) // 左上
  // 横向き＿下＿外側
  ctx.stroke()
  ctx.moveTo(526 + x, 160 + y) // 左上
  ctx.quadraticCurveTo(612 + x, 213 + y, 630 + x, 318 + y) // 左下
  ctx.quadraticCurveTo(651 + x, 310 + y, 645 + x, 306 + y) // 右下
  ctx.quadraticCurveTo(622 + x, 201 + y, 531 + x, 147 + y) // 右上
  ctx.quadraticCurveTo(526 + x, 160 + y, 526 + x, 160 + y) // 左上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  // stitchここまで

  // laceここから
  ctx.strokeStyle = laceColor
  connectWebToIndex(ctx, laceColor, 0 + x, 3 + y) //
  connectWebToIndex(ctx, laceColor, 14 + x, -33 + y) //
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const middleSidePartOfWeb2 = (
  ctx: CanvasRenderingContext2D,
  webColor: string,
  laceColor: string,
  stitchColor: string,
  x: number,
  y: number,
  numerator: number,
  scaleSize: number
): void => {
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  connectWebToThumb(ctx, laceColor, -10 + x, -16 + y) //
  connectWebToThumb(ctx, laceColor, 20 + x, -35 + y) //

  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(512 + x, 180 + y) // 左下
  ctx.quadraticCurveTo(587 + x, 240 + y, 612 + x, 328 + y) //右下
  ctx.quadraticCurveTo(643 + x, 320 + y, 660 + x, 300 + y) //右上
  ctx.quadraticCurveTo(628 + x, 180 + y, 537 + x, 120 + y) //左上
  ctx.quadraticCurveTo(517 + x, 148 + y, 512 + x, 180 + y) //左下
  ctx.fill()
  // ctx.quadraticCurveTo(510 +x, 161+y, 522+x, 147+y) // 左下の革紐の穴上部
  ctx.stroke()
  ctx.closePath()
  // 切り込みライン
  ctx.beginPath()
  ctx.moveTo(522 + x, 152 + y) //左上
  ctx.quadraticCurveTo(622 + x, 205 + y, 638 + x, 312 + y) //右下
  ctx.stroke()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 横向き＿下＿内側
  ctx.moveTo(527 + x, 163 + y) // 左上
  ctx.quadraticCurveTo(615 + x, 215 + y, 631 + x, 308 + y) // 左下
  ctx.quadraticCurveTo(635 + x, 307 + y, 635 + x, 307 + y) // 右下
  ctx.quadraticCurveTo(617 + x, 210 + y, 526 + x, 157 + y) // 右上
  ctx.quadraticCurveTo(527 + x, 160 + y, 527 + x, 163 + y) // 左上

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  // stitchここまで

  // laceここから
  ctx.strokeStyle = laceColor
  connectWebToIndex(ctx, laceColor, 0 + x, 3 + y) //
  connectWebToIndex(ctx, laceColor, 14 + x, -33 + y) //
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const middleSidePartOfWeb3 = (
  ctx: CanvasRenderingContext2D,
  webColor: string,
  laceColor: string,
  stitchColor: string,
  x: number,
  y: number,
  numerator: number,
  scaleSize: number
): void => {
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  connectWebToThumb(ctx, laceColor, -10 + x, -16 + y) //
  connectWebToThumb(ctx, laceColor, 20 + x, -35 + y) //

  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(512 + x, 180 + y) // 左下
  ctx.quadraticCurveTo(587 + x, 240 + y, 612 + x, 328 + y) //右下
  ctx.quadraticCurveTo(643 + x, 320 + y, 660 + x, 300 + y) //右上
  ctx.quadraticCurveTo(628 + x, 180 + y, 537 + x, 120 + y) //左上
  ctx.quadraticCurveTo(517 + x, 148 + y, 512 + x, 180 + y) //左下
  ctx.fill()
  // ctx.quadraticCurveTo(510 +x, 161+y, 522+x, 147+y) // 左下の革紐の穴上部
  ctx.stroke()
  ctx.closePath()
  // 切り込みライン
  ctx.beginPath()
  ctx.moveTo(518 + x, 156 + y) //左上
  ctx.quadraticCurveTo(614 + x, 209 + y, 634 + x, 316 + y) //右下
  ctx.stroke()

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 横向き＿下＿内側
  ctx.moveTo(527 + x, 158 + y) // 左上
  ctx.quadraticCurveTo(615 + x, 210 + y, 631 + x, 303 + y) // 左下
  ctx.quadraticCurveTo(635 + x, 302 + y, 635 + x, 302 + y) // 右下
  ctx.quadraticCurveTo(617 + x, 205 + y, 526 + x, 152 + y) // 右上
  ctx.quadraticCurveTo(527 + x, 155 + y, 527 + x, 158 + y) // 左上

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  // stitchここまで

  // laceここから
  ctx.strokeStyle = laceColor
  connectWebToIndex(ctx, laceColor, 0 + x, 3 + y) //
  connectWebToIndex(ctx, laceColor, 14 + x, -33 + y) //
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const topCrossLace = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number, numerator?: number): void => {
  webTopCrossSingleLeftDown(ctx, laceColor, -10 + x, -8 + y)
  webTopCross(ctx, laceColor, 12 + x, 10 + y) // 左1
  webTopCross(ctx, laceColor, 55 + x, -71 + y, 10) // 左2
  webTopCross(ctx, laceColor, 89 + x, -98 + y, 15) // 左2
  webTopCross(ctx, laceColor, 100 + x, -249 + y, 30) // 左2
  webTopCrossSingleLeftUp(ctx, laceColor, 145 + x, -32 + y, 15)
  connectWebToIndexTop(ctx, laceColor, 0 + x, 0 + y)
  connectWebToIndex(ctx, laceColor, 45 + x, -92 + y) //
  // connectWebToIndex(ctx, laceColor, 34 + x, -76 + y) //
}

export const topStraightLace = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number, numerator?: number): void => {
  // laceここから
  webTops(ctx, laceColor, 25 + x, 80 + y) // 右＿親指から1番目
  webTops(ctx, laceColor, 17 + x, 60 + y) // 右＿親指から2番目
  webTops(ctx, laceColor, 10 + x, 37 + y) // 右＿親指から3番目
  webTops(ctx, laceColor, 0 + x, 16 + y) // 右＿親指から4番目
  webTops(ctx, laceColor, -12 + x, -7 + y) // 右＿親指から5番目
  webTops(ctx, laceColor, -24 + x, -25 + y) // 右＿親指から6番目
  webTops(ctx, laceColor, -38 + x, -42 + y) // 右＿親指から7番目
  webTops(ctx, laceColor, -50 + x, -57 + y) // 右＿親指から8番目
  webTops(ctx, laceColor, -68 + x, -73 + y) // 右＿親指から8番目
  webTops(ctx, laceColor, -83 + x, -85 + y) // 右＿親指から8番目
  webTops(ctx, laceColor, -100 + x, -95 + y) // 右＿親指から8番目
}
