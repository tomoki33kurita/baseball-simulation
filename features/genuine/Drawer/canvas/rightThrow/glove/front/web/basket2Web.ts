import { topSidePartOfWeb } from './parts/sideParts'

export const basket2Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
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
  ctx.moveTo(250, 287) // 左端
  ctx.quadraticCurveTo(313, 303, 313, 303) // 下
  ctx.quadraticCurveTo(272, 243, 272, 243) // 上
  ctx.quadraticCurveTo(347, 279, 347, 279) // 下
  ctx.quadraticCurveTo(305, 204, 305, 204) // 上
  ctx.quadraticCurveTo(361, 234, 361, 234) // 下
  ctx.quadraticCurveTo(335, 163, 335, 163) // 上
  ctx.quadraticCurveTo(363, 180, 363, 180) // 右端

  ctx.moveTo(241, 276) // 左端
  ctx.quadraticCurveTo(295, 290, 295, 290) // 下
  ctx.quadraticCurveTo(258, 232, 258, 232) // 上
  ctx.quadraticCurveTo(329, 261, 329, 261) // 下
  ctx.quadraticCurveTo(292, 193, 292, 193) // 上
  ctx.quadraticCurveTo(347, 216, 347, 216) // 下
  ctx.quadraticCurveTo(322, 144, 322, 144) // 上
  ctx.quadraticCurveTo(363, 167, 363, 167) // 右端
  // ctx.quadraticCurveTo()

  // 上部
  ctx.moveTo(233, 261) // 左上
  ctx.quadraticCurveTo(270, 159, 355, 112) // 右上

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'

  // stitchここまで
}
