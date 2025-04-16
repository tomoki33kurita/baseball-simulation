import { topSidePartOfWeb } from './parts/sideParts'

export const genuineWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // ウェブ先端
  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  // // 補助線
  // ctx.strokeStyle = 'red'
  // ctx.beginPath()
  // ctx.moveTo(277, 178) // 左下
  // ctx.quadraticCurveTo(336, 312, 336, 312) // 右下
  // ctx.moveTo(265, 310) // 左下
  // ctx.quadraticCurveTo(303, 234, 362, 183) // 右下
  // ctx.stroke()
  // ctx.closePath()

  ctx.beginPath()
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  ctx.beginPath()
  ctx.moveTo(332, 143) // 右上
  ctx.quadraticCurveTo(369, 249, 329, 299) //
  ctx.quadraticCurveTo(316, 319, 298, 330) // 左下
  ctx.quadraticCurveTo(300, 309, 300, 309) //
  ctx.quadraticCurveTo(293, 308, 288, 293) //
  ctx.quadraticCurveTo(286, 267, 286, 267) //
  ctx.quadraticCurveTo(302, 261, 308, 282) //
  ctx.quadraticCurveTo(314, 265, 295, 253) //
  ctx.quadraticCurveTo(285, 255, 279, 243) // 2つ目の左上
  ctx.quadraticCurveTo(285, 211, 285, 211) //
  ctx.quadraticCurveTo(302, 225, 318, 280) //
  ctx.quadraticCurveTo(314, 237, 294, 209) // 3つ目の左上
  ctx.quadraticCurveTo(284, 187, 300, 165) //
  ctx.quadraticCurveTo(300, 175, 315, 210) //
  ctx.quadraticCurveTo(326, 244, 322, 269) //
  ctx.quadraticCurveTo(333, 235, 313, 187) // 4つ目の左上
  ctx.quadraticCurveTo(302, 170, 332, 143) //
  // ctx.quadraticCurveTo() //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
  // stitchここまで

  ctx.strokeStyle = '#282828'
}
