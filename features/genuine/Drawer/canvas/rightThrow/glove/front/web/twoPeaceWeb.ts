import { topSidePartOfWeb } from './parts/sideParts'

export const twoPeaceWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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

  // 上部
  ctx.moveTo(233, 261) // 左上
  ctx.quadraticCurveTo(270, 159, 355, 112) // 右上

  // 一番右
  ctx.moveTo(244, 231) // 左上
  ctx.quadraticCurveTo(372, 225, 372, 225) // 右下
  ctx.moveTo(244, 235) // 左上
  ctx.quadraticCurveTo(372, 229, 372, 229) // 右下

  // 中央
  ctx.moveTo(231, 273) // 左上
  ctx.quadraticCurveTo(365, 266, 365, 268) // 右下
  ctx.moveTo(240, 277) // 左上
  ctx.quadraticCurveTo(361, 272, 361, 272) // 右下

  // 一番左
  ctx.moveTo(266, 313) // 左上
  ctx.quadraticCurveTo(339, 309, 339, 309) // 右下
  ctx.moveTo(269, 318) // 左上
  ctx.quadraticCurveTo(337, 314, 337, 314) // 右下

  // 星
  ctx.moveTo(315, 141) // 左下
  ctx.quadraticCurveTo(315, 149, 315, 149)
  ctx.quadraticCurveTo(292, 170, 292, 170)
  ctx.quadraticCurveTo(319, 174, 319, 174)
  ctx.quadraticCurveTo(315, 200, 315, 200)
  ctx.quadraticCurveTo(331, 178, 331, 178)
  ctx.quadraticCurveTo(357, 181, 357, 181)
  ctx.quadraticCurveTo(338, 161, 338, 161)
  ctx.quadraticCurveTo(348, 129, 348, 129)
  ctx.quadraticCurveTo(330, 142, 330, 142)
  ctx.quadraticCurveTo(324, 132, 324, 132)

  // 流れ星みたいなデザイン
  ctx.moveTo(328, 193)
  ctx.quadraticCurveTo(362, 218, 362, 218)
  ctx.quadraticCurveTo(343, 191, 343, 191)
  ctx.quadraticCurveTo(356, 191, 356, 191)
  ctx.quadraticCurveTo(336, 181, 336, 181)
  ctx.quadraticCurveTo(337, 188, 337, 188)
  ctx.quadraticCurveTo(328, 193, 328, 193)
  // ctx.quadraticCurveTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}
