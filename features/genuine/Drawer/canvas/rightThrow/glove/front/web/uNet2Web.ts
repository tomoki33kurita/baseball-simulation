import { GenuineState } from '@/features/genuine/types'
import { laceParts0, laceParts1, laceParts2, laceParts3, laceParts4, laceParts5, laceParts6 } from './parts/laceParts'
import { topSidePartOfWeb } from './parts/sideParts'

export const uNet2Web = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const laceColor = state.lace.color
  const stitchColor = state.stitch.color
  const webColor = state.web.color
  // lace_1
  laceParts1(ctx, laceColor, 45, 75) // 上4
  laceParts1(ctx, laceColor, 32, 50) // 上3
  laceParts1(ctx, laceColor, 20, 30) // 上2
  laceParts1(ctx, laceColor, -2, -5) // 上1

  laceParts4(ctx, laceColor, 29, 80) // 上5
  laceParts4(ctx, laceColor, 21, 57) // 上4
  laceParts4(ctx, laceColor, 11, 28) // 上3
  laceParts4(ctx, laceColor, 0, 0) // 上2
  laceParts4(ctx, laceColor, -8, -27) // 上1
  laceParts5(ctx, laceColor, -8, -30) // 上1
  laceParts5(ctx, laceColor, 0, 0) // 上2
  laceParts5(ctx, laceColor, 11, 27) // 上3
  laceParts5(ctx, laceColor, 21, 55) // 上4
  laceParts5(ctx, laceColor, 29, 83) // 上5
  laceParts4(ctx, laceColor, -10, -52) // 上0

  laceParts3(ctx, laceColor, -12, 113) // 上2
  laceParts3(ctx, laceColor, -25, 95) // 上1
  laceParts3(ctx, laceColor, -35, 77) // 上1
  laceParts3(ctx, laceColor, -45, 57) // 上3
  laceParts3(ctx, laceColor, -59, 36) // 上2
  laceParts3(ctx, laceColor, -68, 13) // 上1
  // lace_1

  ctx.lineWidth = 1.0
  ctx.fillStyle = webColor
  // ウェブ本体
  ctx.beginPath()
  ctx.moveTo(300, 376) // 左下
  ctx.quadraticCurveTo(339, 334, 373, 252) // 右下
  ctx.quadraticCurveTo(384, 159, 359, 92) // 右上＿外
  ctx.quadraticCurveTo(327, 125, 327, 125) // 右上＿内
  ctx.quadraticCurveTo(346, 192, 353, 256) // 右下＿内
  ctx.quadraticCurveTo(341, 261, 328, 261) // 中央＿右下
  ctx.quadraticCurveTo(293, 159, 292, 157) // 中央＿右上
  ctx.quadraticCurveTo(271, 179, 257, 202) // 中央＿左上
  ctx.quadraticCurveTo(304, 289, 304, 289) // 中央＿左下
  ctx.quadraticCurveTo(305, 311, 297, 338) // 左下＿内側
  ctx.quadraticCurveTo(262, 298, 235, 250) // 左上＿内側
  ctx.quadraticCurveTo(227, 268, 227, 268) // 左上＿外側
  ctx.quadraticCurveTo(300, 376, 300, 376) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 左窓周辺
  ctx.moveTo(234, 255) // 左上
  ctx.quadraticCurveTo(261, 303, 299, 343) // 左下
  ctx.quadraticCurveTo(309, 315, 307, 287) // 右下
  ctx.quadraticCurveTo(260, 201, 260, 201) // 右上
  // 右窓周辺
  ctx.moveTo(290, 162) // 左上
  ctx.quadraticCurveTo(325, 263, 325, 263) // 左下
  ctx.quadraticCurveTo(340, 267, 355, 257) // 右下
  ctx.quadraticCurveTo(348, 184, 329, 125) // 右上
  // 中央＿縦ライン
  ctx.moveTo(271, 184) // 左上
  ctx.quadraticCurveTo(312, 272, 312, 272) // 左下
  ctx.quadraticCurveTo(315, 267, 315, 267) // 右下
  ctx.quadraticCurveTo(275, 179, 275, 179) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで

  // lace_2
  laceParts2(ctx, laceColor, -12, -56)
  laceParts0(ctx, laceColor, -5, -38) // ウェブ縦左上
  laceParts0(ctx, laceColor, 5, -17) // ウェブ縦左上
  laceParts0(ctx, laceColor, 15, 2) // ウェブ縦左上
  laceParts2(ctx, laceColor, 22, 17)
  laceParts2(ctx, laceColor, 31, 34)
  laceParts2(ctx, laceColor, 40, 52)

  laceParts3(ctx, laceColor, 27, 57) // 上5
  laceParts3(ctx, laceColor, 17, 33) // 上4
  laceParts3(ctx, laceColor, 8, 13) // 上3
  laceParts3(ctx, laceColor, -3, -10) // 上2
  laceParts3(ctx, laceColor, -11, -33) // 上1
  laceParts3(ctx, laceColor, -17, -54) // 上1

  laceParts6(ctx, laceColor, -23, -48) // 上1
  laceParts6(ctx, laceColor, -20, -25) // 上1
  laceParts6(ctx, laceColor, -15, 0) // 上2
  laceParts6(ctx, laceColor, -5, 27) // 上3
  laceParts6(ctx, laceColor, 3, 55) // 上4
  laceParts6(ctx, laceColor, 13, 84) // 上5
  // lace_2

  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
}
