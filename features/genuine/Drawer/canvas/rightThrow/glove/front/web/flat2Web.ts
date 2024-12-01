import { topSidePartOfWeb } from './parts/sideParts'

export const flat2Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = webColor
  // ウェブ本体
  ctx.beginPath()
  ctx.moveTo(300, 376) // 左下
  ctx.quadraticCurveTo(362, 269, 362, 269) //
  ctx.quadraticCurveTo(355, 250, 373, 252) // 右下
  ctx.quadraticCurveTo(378, 225, 378, 225) //
  ctx.quadraticCurveTo(310, 255, 370, 195) //
  ctx.quadraticCurveTo(361, 169, 361, 169) //
  ctx.quadraticCurveTo(295, 190, 360, 140) //
  ctx.quadraticCurveTo(384, 159, 359, 92) // 右上
  ctx.quadraticCurveTo(269, 153, 210, 260) // 左上
  ctx.quadraticCurveTo(300, 376, 300, 376) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(351, 110) // 右上
  ctx.quadraticCurveTo(355, 139, 355, 139) //
  ctx.quadraticCurveTo(290, 193, 359, 174) //
  ctx.quadraticCurveTo(362, 199, 362, 199) //
  ctx.quadraticCurveTo(315, 250, 368, 233) //
  ctx.quadraticCurveTo(371, 247, 371, 250) //
  ctx.quadraticCurveTo(352, 248, 360, 271) //
  // ctx.quadraticCurveTo() //
  // 外側
  ctx.moveTo(348, 110) // 右上
  ctx.quadraticCurveTo(352, 139, 352, 139) //
  ctx.quadraticCurveTo(287, 195, 356, 178) //
  ctx.quadraticCurveTo(359, 197, 359, 197) //
  ctx.quadraticCurveTo(312, 252, 365, 236) //
  ctx.quadraticCurveTo(368, 245, 368, 248) //
  ctx.quadraticCurveTo(349, 245, 357, 274) //
  // ctx.quadraticCurveTo() //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  // stitchここまで
}
