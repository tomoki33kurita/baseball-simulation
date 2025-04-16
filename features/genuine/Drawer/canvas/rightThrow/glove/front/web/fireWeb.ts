import { topSidePartOfWeb } from './parts/sideParts'

export const fireWeb = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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
  ctx.moveTo(264, 193) // 上
  ctx.quadraticCurveTo(276, 200, 272, 221) //
  ctx.quadraticCurveTo(264, 238, 277, 241) //
  ctx.quadraticCurveTo(280, 254, 272, 267) //
  ctx.quadraticCurveTo(278, 290, 288, 285) //
  ctx.quadraticCurveTo(272, 300, 266, 279) //
  ctx.quadraticCurveTo(268, 252, 244, 257) //
  ctx.quadraticCurveTo(263, 277, 249, 282) //

  ctx.moveTo(269, 318)
  ctx.quadraticCurveTo(278, 324, 283, 308) //
  ctx.quadraticCurveTo(288, 299, 287, 314) //
  ctx.quadraticCurveTo(286, 325, 298, 322) //
  ctx.quadraticCurveTo(309, 314, 320, 321) // 下
  ctx.quadraticCurveTo(313, 301, 321, 294) //
  ctx.quadraticCurveTo(326, 281, 345, 275) //
  ctx.quadraticCurveTo(367, 254, 358, 229) //
  ctx.quadraticCurveTo(339, 228, 349, 201) //
  ctx.quadraticCurveTo(324, 222, 331, 238) //
  ctx.quadraticCurveTo(323, 247, 323, 242) //
  ctx.quadraticCurveTo(314, 222, 309, 228) //
  ctx.quadraticCurveTo(315, 205, 305, 198) //
  ctx.quadraticCurveTo(293, 179, 313, 157) //
  ctx.quadraticCurveTo(311, 178, 321, 179) //
  ctx.quadraticCurveTo(366, 188, 307, 225) //
  ctx.quadraticCurveTo(296, 243, 309, 256) //
  ctx.quadraticCurveTo(294, 262, 294, 231) //
  ctx.quadraticCurveTo(319, 202, 283, 201) //
  ctx.quadraticCurveTo(277, 187, 264, 193) //
  // ctx.quadraticCurveTo() //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
  // stitchここまで

  ctx.strokeStyle = 'brue'

  // 補助線
  // ctx.beginPath()
  // ctx.lineWidth = 1.0
  // ctx.strokeStyle = 'red'
  // ctx.moveTo(279, 177) // 縦
  // ctx.quadraticCurveTo(337, 314, 337, 314) //
  // ctx.moveTo(266, 310) // 横
  // ctx.quadraticCurveTo(304, 236, 361, 184) //
  // ctx.stroke()
  // ctx.closePath()
  ctx.strokeStyle = '#282828'
}
