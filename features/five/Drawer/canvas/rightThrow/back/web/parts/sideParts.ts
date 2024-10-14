import { connectWebToIndex, connectWebToIndexTop, connectWebToThumb, connectWebToThumbTop } from '../../lace/connectWebAndFinger'
import { webTopCross, webTopCrossSingleLeftDown, webTopCrossSingleLeftUp, webTops } from '../../lace/webTop'

export const topSidePartOfWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#383838'
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

  // laceここから
  webTops(ctx, laceColor, 25, 80) // 右＿親指から1番目
  webTops(ctx, laceColor, 17, 60) // 右＿親指から2番目
  webTops(ctx, laceColor, 10, 37) // 右＿親指から3番目
  webTops(ctx, laceColor, 0, 16) // 右＿親指から4番目
  webTops(ctx, laceColor, -12, -7) // 右＿親指から5番目
  webTops(ctx, laceColor, -24, -25) // 右＿親指から6番目
  webTops(ctx, laceColor, -38, -42) // 右＿親指から7番目
  webTops(ctx, laceColor, -50, -57) // 右＿親指から8番目
  webTops(ctx, laceColor, -68, -73) // 右＿親指から8番目
  webTops(ctx, laceColor, -83, -85) // 右＿親指から8番目
  webTops(ctx, laceColor, -100, -95) // 右＿親指から8番目
  connectWebToIndexTop(ctx, laceColor, 0, 0)
  connectWebToIndex(ctx, laceColor, 45, -92) //
  connectWebToThumbTop(ctx, laceColor, 0, 0)
  connectWebToThumb(ctx, laceColor, 62, -63) //
}

export const topSidePartOfWebForPitcher = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#383838'
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
  webTops(ctx, laceColor, 25, 80) // 右＿親指から1番目
  webTops(ctx, laceColor, 17, 60) // 右＿親指から2番目
  webTops(ctx, laceColor, 10, 37) // 右＿親指から3番目
  webTops(ctx, laceColor, 0, 16) // 右＿親指から4番目
  webTops(ctx, laceColor, -12, -7) // 右＿親指から5番目
  webTops(ctx, laceColor, -24, -25) // 右＿親指から6番目
  webTops(ctx, laceColor, -38, -42) // 右＿親指から7番目
  webTops(ctx, laceColor, -50, -57) // 右＿親指から8番目
  webTops(ctx, laceColor, -68, -73) // 右＿親指から8番目
  webTops(ctx, laceColor, -83, -85) // 右＿親指から8番目
  webTops(ctx, laceColor, -100, -95) // 右＿親指から8番目
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
