import { topSidePartOfWeb } from './parts/sideParts'

export const iNetWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
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
  ctx.moveTo(276, 327) // 左端
  ctx.quadraticCurveTo(286, 320, 303, 331) // 下
  ctx.quadraticCurveTo(300, 314, 288, 303) // 上
  ctx.quadraticCurveTo(301, 306, 316, 318) // 下
  ctx.quadraticCurveTo(313, 275, 283, 229) // 上
  ctx.quadraticCurveTo(309, 238, 333, 294) // 下
  ctx.quadraticCurveTo(335, 256, 324, 226) // 上
  ctx.quadraticCurveTo(336, 243, 342, 270) // 下
  ctx.quadraticCurveTo(350, 253, 343, 225) // 上
  ctx.quadraticCurveTo(350, 238, 354, 252) // 下
  ctx.quadraticCurveTo(364, 229, 364, 229) // 上
  ctx.quadraticCurveTo(367, 255, 367, 255)

  ctx.moveTo(362, 222) // 右端
  ctx.quadraticCurveTo(354, 238, 354, 238) // 下
  ctx.quadraticCurveTo(341, 213, 340, 202) // 上
  ctx.quadraticCurveTo(340, 244, 340, 244) // 下
  ctx.quadraticCurveTo(323, 206, 305, 200) // 上
  ctx.quadraticCurveTo(323, 230, 326, 267) // 下
  ctx.quadraticCurveTo(305, 222, 265, 212) // 上
  ctx.quadraticCurveTo(296, 259, 306, 300) // 下
  ctx.quadraticCurveTo(272, 289, 270, 292) // 上
  ctx.quadraticCurveTo(290, 316, 290, 316) // 下
  ctx.quadraticCurveTo(273, 322, 273, 322) // 左端

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで
}
