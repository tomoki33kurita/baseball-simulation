import { topSidePartOfWeb } from './parts/sideParts'

export const basketWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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
  // 下段
  ctx.moveTo(233, 261) // 左上
  ctx.quadraticCurveTo(253, 266, 278, 296) // 中央
  ctx.quadraticCurveTo(301, 313, 324, 311) // 左下
  ctx.quadraticCurveTo(285, 281, 260, 227) // 上
  ctx.quadraticCurveTo(296, 257, 307, 254) // 下
  ctx.quadraticCurveTo(291, 231, 293, 231) // 上
  ctx.quadraticCurveTo(284, 212, 287, 189) // 頂点
  ctx.quadraticCurveTo(302, 194, 309, 215) // 上
  ctx.quadraticCurveTo(318, 239, 317, 245) // 下
  ctx.quadraticCurveTo(327, 215, 318, 170) // 上
  ctx.quadraticCurveTo(351, 250, 343, 289) // 下
  ctx.quadraticCurveTo(361, 256, 353, 195) // 中央
  ctx.quadraticCurveTo(347, 156, 356, 115)

  // 上段
  ctx.moveTo(235, 257) // 左上
  ctx.quadraticCurveTo(255, 262, 280, 292) // 中央
  ctx.quadraticCurveTo(303, 309, 326, 307) // 左下
  ctx.quadraticCurveTo(287, 277, 262, 223) // 上
  ctx.quadraticCurveTo(298, 253, 309, 250) // 下
  ctx.quadraticCurveTo(293, 227, 295, 227) // 上
  ctx.quadraticCurveTo(286, 208, 289, 185) // 頂点
  ctx.quadraticCurveTo(310, 199, 310, 199) // 上
  ctx.quadraticCurveTo(320, 235, 317, 241) // 下
  ctx.quadraticCurveTo(323, 213, 315, 164) // 上
  ctx.quadraticCurveTo(355, 246, 347, 282) // 下
  ctx.quadraticCurveTo(365, 252, 357, 188) // 中央
  ctx.quadraticCurveTo(349, 152, 358, 108)

  ctx.moveTo(233, 261) // 左上
  ctx.quadraticCurveTo(270, 159, 355, 112) // 右上
  // ctx.quadraticCurveTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
  // stitchここまで
}
