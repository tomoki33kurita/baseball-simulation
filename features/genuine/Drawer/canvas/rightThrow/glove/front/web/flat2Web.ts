import { topSidePartOfWeb } from './parts/sideParts'

const horizontalLace = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  // laceここから
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.lineWidth = 1.0
  ctx.moveTo(315 + x, 180 + y)
  ctx.quadraticCurveTo(316 + x, 184 + y, 323 + x, 185 + y) //
  ctx.quadraticCurveTo(336 + x, 175 + y, 345 + x, 161 + y) //
  ctx.quadraticCurveTo(347 + x, 154 + y, 343 + x, 155 + y) //
  ctx.quadraticCurveTo(315 + x, 180 + y, 315 + x, 180 + y) //
  // ctx.quadraticCurveTo() //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(315 + x, 180 + y)
  ctx.quadraticCurveTo(325 + x, 177 + y, 343 + x, 155 + y) //
  ctx.stroke()
  ctx.closePath()
}

const horizontalLace2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  // laceここから
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.lineWidth = 1.0
  ctx.moveTo(348, 253)
  ctx.quadraticCurveTo(342, 255, 351, 265) //
  ctx.quadraticCurveTo(366, 266, 366, 266) //
  ctx.quadraticCurveTo(368, 255, 368, 255) //
  ctx.quadraticCurveTo(348, 253, 348, 253) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(348, 263)
  ctx.quadraticCurveTo(358, 260, 366, 266) //
  ctx.stroke()
  ctx.closePath()
}

const horizontalLace3 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  // laceここから
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.lineWidth = 1.0
  ctx.moveTo(300 + x, 349 + y)
  ctx.quadraticCurveTo(298 + x, 359 + y, 304 + x, 360 + y) //
  ctx.quadraticCurveTo(316 + x, 339 + y, 316 + x, 339 + y) //
  ctx.quadraticCurveTo(319 + x, 329 + y, 313 + x, 327 + y) //
  ctx.quadraticCurveTo(300 + x, 349 + y, 300 + x, 349 + y) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  // ctx.moveTo(348, 263)
  // ctx.quadraticCurveTo(358, 260, 366, 266) //
  ctx.stroke()
  ctx.closePath()
}

const verticalLace = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  // laceここから
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.lineWidth = 1.0
  ctx.moveTo(339 + x, 123 + y)
  ctx.quadraticCurveTo(342 + x, 142 + y, 342 + x, 142 + y) //
  ctx.quadraticCurveTo(348 + x, 144 + y, 349 + x, 136 + y) //
  ctx.quadraticCurveTo(345 + x, 117 + y, 345 + x, 117 + y) //
  ctx.quadraticCurveTo(340 + x, 117 + y, 339 + x, 123 + y) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(340 + x, 121 + y)
  ctx.quadraticCurveTo(345 + x, 132 + y, 342 + x, 142 + y) //
  ctx.stroke()
  ctx.closePath()
}

const verticalLace2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  // laceここから
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.lineWidth = 1.0
  ctx.moveTo(339 + x, 115 + y)
  ctx.quadraticCurveTo(342 + x, 129 + y, 342 + x, 129 + y) //
  ctx.quadraticCurveTo(348 + x, 131 + y, 349 + x, 123 + y) //
  ctx.quadraticCurveTo(345 + x, 110 + y, 345 + x, 110 + y) //
  ctx.quadraticCurveTo(340 + x, 110 + y, 339 + x, 115 + y) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(341 + x, 113 + y)
  ctx.quadraticCurveTo(347 + x, 122 + y, 342 + x, 129 + y) //
  ctx.stroke()
  ctx.closePath()
}

export const flat2Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
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

  horizontalLace(ctx, laceColor, 0, 0)
  horizontalLace(ctx, laceColor, 10, 65)
  horizontalLace2(ctx, laceColor, 0, 0)
  horizontalLace3(ctx, laceColor, 0, -2)
  horizontalLace3(ctx, laceColor, 30, -50)

  verticalLace(ctx, laceColor, 0, 0)
  verticalLace(ctx, laceColor, 10, 60)
  verticalLace2(ctx, laceColor, 20, 125)
}
