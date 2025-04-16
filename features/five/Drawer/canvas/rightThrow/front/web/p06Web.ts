import { topSidePartOfWeb } from './parts/sideParts'

export const p06Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // ウェブ本体
  ctx.beginPath()
  ctx.moveTo(300, 376) // 左下
  ctx.quadraticCurveTo(339, 334, 373, 252) // 右下
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
  ctx.moveTo(303, 148) // 右上
  ctx.quadraticCurveTo(366, 226, 366, 226) // 右下
  ctx.quadraticCurveTo(316, 243, 316, 243) // 上
  ctx.quadraticCurveTo(365, 255, 365, 255) // 右下
  ctx.quadraticCurveTo(312, 257, 267, 267) // 左下
  ctx.quadraticCurveTo(337, 213, 337, 213) // 右下
  ctx.quadraticCurveTo(318, 206, 318, 206) // 右下
  ctx.quadraticCurveTo(265, 226, 265, 226) // 左上
  ctx.quadraticCurveTo(302, 191, 302, 191) // 右上
  ctx.quadraticCurveTo(269, 191, 269, 191) // 左上

  ctx.moveTo(301, 151)
  ctx.quadraticCurveTo(355, 222, 355, 222)
  ctx.quadraticCurveTo(306, 242, 306, 242)
  ctx.quadraticCurveTo(330, 252, 330, 252)
  ctx.quadraticCurveTo(285, 257, 285, 257) // 左下
  ctx.quadraticCurveTo(342, 213, 342, 213) // 右下
  ctx.quadraticCurveTo(319, 199, 319, 199) // 右下
  ctx.quadraticCurveTo(289, 210, 289, 210) // 左上
  ctx.quadraticCurveTo(310, 190, 310, 190) // 右上
  ctx.quadraticCurveTo(271, 181, 271, 181)
  // ctx.quadraticCurveTo()

  // 上部
  ctx.moveTo(233, 261) // 左上
  ctx.quadraticCurveTo(270, 159, 355, 112) // 右上

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}
