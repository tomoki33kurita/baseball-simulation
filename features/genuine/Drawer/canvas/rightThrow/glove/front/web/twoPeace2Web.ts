import { topSidePartOfWeb } from './parts/sideParts'

export const twoPeace2Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor
  // ワンピース目
  ctx.beginPath()
  ctx.moveTo(194, 245) // 左＿左上
  ctx.quadraticCurveTo(225, 242, 230, 262) // 左＿右下
  ctx.quadraticCurveTo(271, 320, 271, 330) // 左＿左下
  ctx.quadraticCurveTo(305, 250, 370, 210) // 右＿右下
  ctx.quadraticCurveTo(354, 104, 354, 104) // 右＿下
  ctx.quadraticCurveTo(352, 87, 352, 68) // 右＿下
  ctx.quadraticCurveTo(351, 58, 343, 52) // 右＿上
  ctx.quadraticCurveTo(223, 110, 194, 245) // 右＿下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // ツーピース目
  ctx.beginPath()
  ctx.moveTo(275, 324) // 左上
  ctx.quadraticCurveTo(302, 256, 369, 213) // 右上
  ctx.quadraticCurveTo(377, 250, 377, 250) // 右下
  ctx.quadraticCurveTo(301, 377, 301, 377) // 左下
  ctx.quadraticCurveTo(275, 324, 275, 324) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  topSidePartOfWeb(ctx, webColor, laceColor, stitchColor)

  // stitchここから
  ctx.lineWidth = 1.5
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // ウェブ上部＿横ライン
  ctx.moveTo(337, 87) // 右上
  ctx.quadraticCurveTo(250, 140, 231, 218) // 左下
  ctx.moveTo(339, 91) // 右上
  ctx.quadraticCurveTo(245, 153, 227, 248) // 左下
  ctx.moveTo(339, 94) // 右上
  ctx.quadraticCurveTo(245, 158, 230, 255) // 左下

  // 中央の四角_上辺
  ctx.moveTo(232, 266) // 左下
  ctx.quadraticCurveTo(273, 160, 350, 113) // 右上
  ctx.moveTo(235, 270) // 左下
  ctx.quadraticCurveTo(275, 165, 350, 116) // 右上

  // 中央の四角_右辺
  ctx.moveTo(350, 110) // 右上
  ctx.quadraticCurveTo(359, 201, 359, 204) // 左下
  ctx.moveTo(346, 113) // 右上
  ctx.quadraticCurveTo(355, 201, 355, 201) // 左下

  // 中央の四角_下辺
  ctx.moveTo(265, 312) // 右上
  ctx.quadraticCurveTo(293, 248, 353, 201) // 左下
  ctx.moveTo(265, 318) // 右上
  ctx.quadraticCurveTo(293, 255, 356, 204) // 左下

  // // ツーピースめ部分のステッチ
  ctx.moveTo(287, 345) // 左
  ctx.quadraticCurveTo(306, 285, 364, 236) // 右上
  ctx.moveTo(289, 351) // 左上
  ctx.quadraticCurveTo(313, 282, 369, 238) // 右上
  ctx.moveTo(324, 316) // 切り込み_頂点
  ctx.quadraticCurveTo(318, 302, 331, 306) // 右上
  ctx.moveTo(326, 318) // 切り込み_頂点
  ctx.quadraticCurveTo(318, 309, 328, 308) // 右上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
