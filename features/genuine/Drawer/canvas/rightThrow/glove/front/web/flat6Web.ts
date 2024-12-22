import { topSidePartOfWeb } from './parts/sideParts'

const heartDesign = (ctx: CanvasRenderingContext2D, webColor: string, x: number, y: number, rotate: number): void => {
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  // ウェブ上のデザイン
  ctx.beginPath()
  ctx.moveTo(285 + x, 193 + y)
  ctx.quadraticCurveTo(298 + x, 160 + y, 306 + x, 190 + y)
  ctx.quadraticCurveTo(308 + x, 203 + y, 297 + x, 219 + y)
  ctx.quadraticCurveTo(263 + x, 204 + y, 269 + x, 193 + y)
  ctx.quadraticCurveTo(273 + x, 184 + y, 285 + x, 193 + y)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}

export const flat6Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
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

  heartDesign(ctx, webColor, 5, 10, 0)
  heartDesign(ctx, webColor, -60, -525, 90)
  heartDesign(ctx, webColor, -603, -468, 180)
  heartDesign(ctx, webColor, -537, 82, -90)

  // ctx.strokeStyle = 'blue'
  ctx.beginPath()
  ctx.moveTo(284, 195)
  ctx.quadraticCurveTo(289, 180, 301, 178)
  ctx.quadraticCurveTo(318, 182, 318, 203)
  ctx.quadraticCurveTo(346, 194, 341, 222)
  ctx.quadraticCurveTo(354, 221, 356, 240)
  ctx.quadraticCurveTo(343, 260, 328, 252)
  ctx.quadraticCurveTo(343, 262, 342, 276)
  ctx.quadraticCurveTo(334, 293, 323, 286)
  ctx.quadraticCurveTo(310, 313, 296, 298)
  ctx.quadraticCurveTo(282, 284, 289, 269)
  ctx.quadraticCurveTo(272, 283, 264, 273)
  ctx.quadraticCurveTo(257, 261, 263, 253)
  ctx.quadraticCurveTo(244, 245, 247, 235)
  ctx.quadraticCurveTo(253, 218, 273, 222)
  ctx.quadraticCurveTo(260, 209, 265, 203)
  ctx.quadraticCurveTo(267, 188, 284, 195)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()

  // 補助線
  // ctx.strokeStyle = 'red'
  // ctx.beginPath()
  // ctx.moveTo(277, 178) // 左下
  // ctx.quadraticCurveTo(336, 312, 336, 312) // 右下
  // ctx.moveTo(265, 310) // 左下
  // ctx.quadraticCurveTo(303, 234, 362, 183) // 右下
  // ctx.stroke()
  // ctx.closePath()

  ctx.strokeStyle = '#383838'
}
