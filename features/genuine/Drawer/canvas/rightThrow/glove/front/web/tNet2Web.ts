import { laceOfLiningAllow } from '../lace/arrow'
import { laceParts0, laceParts1, laceParts2, laceParts3, laceParts4, laceParts5 } from './parts/laceParts'
import { topSidePartOfWeb } from './parts/sideParts'

export const tNet2Web = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  // ウェブ_縦
  ctx.fillStyle = web2Color
  ctx.beginPath()
  ctx.moveTo(250, 212) // 左＿上
  ctx.quadraticCurveTo(273, 285, 313, 354) // 左＿下
  ctx.quadraticCurveTo(343, 305, 343, 305) // 右＿下
  ctx.quadraticCurveTo(313, 241, 293, 150) // 右＿上
  ctx.quadraticCurveTo(265, 189, 251, 212) // 左＿上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.fillStyle = webColor

  // stitchここから
  ctx.lineWidth = 1.1
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 縦＿左＿外
  ctx.moveTo(253, 212) // 右上
  ctx.quadraticCurveTo(273, 277, 315, 353) // 左下
  // 縦＿左＿内
  ctx.moveTo(256, 209) // 右上
  ctx.quadraticCurveTo(276, 277, 318, 353) // 左下
  // 縦＿右＿外
  ctx.moveTo(291, 157) // 右上
  ctx.quadraticCurveTo(307, 234, 340, 308) // 左下
  // 縦＿右＿内
  ctx.moveTo(288, 159) // 右上
  ctx.quadraticCurveTo(304, 234, 337, 311) // 左下
  // 縦＿中央＿左
  ctx.moveTo(266, 186) // 右上
  ctx.quadraticCurveTo(277, 246, 322, 335) // 左下
  // 縦＿中央＿右
  ctx.moveTo(280, 179) // 右上
  ctx.quadraticCurveTo(291, 246, 331, 326) // 左下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  // laceここから
  laceParts0(ctx, laceColor, -5, -17) // ウェブ縦左上
  laceParts0(ctx, laceColor, 2, 5) // ウェブ縦左上
  laceParts2(ctx, laceColor, 10, 23)
  laceParts2(ctx, laceColor, 18, 40)
  laceParts2(ctx, laceColor, 29, 60)
  laceParts2(ctx, laceColor, 37, 80)
  laceParts1(ctx, laceColor, 45, 75) // 上4
  laceParts1(ctx, laceColor, 32, 50) // 上3
  laceParts1(ctx, laceColor, 20, 30) // 上2
  laceParts1(ctx, laceColor, -2, -5) // 上1
  laceParts3(ctx, laceColor, 25, 73) // 上5
  laceParts3(ctx, laceColor, 17, 49) // 上4
  laceParts3(ctx, laceColor, 8, 22) // 上3
  laceParts3(ctx, laceColor, -3, -8) // 上2
  laceParts3(ctx, laceColor, -12, -36) // 上1
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
  // laceParts6(ctx, laceColor, 0, 0) // 上2
  // 縦パーツ中央の革紐
  laceOfLiningAllow(ctx, laceColor, -9, -28)
  laceOfLiningAllow(ctx, laceColor, 0, 0)
  laceOfLiningAllow(ctx, laceColor, 10, 29)
  laceOfLiningAllow(ctx, laceColor, 19, 54)
  laceOfLiningAllow(ctx, laceColor, 31, 81)

  ctx.fillStyle = webColor
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)
}
