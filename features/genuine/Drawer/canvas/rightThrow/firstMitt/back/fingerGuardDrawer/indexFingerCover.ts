export const indexFingerCover = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(358, 377) // 左下
  ctx.quadraticCurveTo(358, 395, 366, 416) // 中央下＿左
  ctx.quadraticCurveTo(395, 425, 409, 409) // 中央下＿右
  ctx.quadraticCurveTo(422, 393, 422, 377) // 右下
  ctx.quadraticCurveTo(404, 270, 404, 275) // 右上
  ctx.quadraticCurveTo(393, 255, 375, 255) // 中央上
  ctx.quadraticCurveTo(360, 255, 352, 278) // 左上
  ctx.quadraticCurveTo(358, 377, 358, 377) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(360, 374) // 左下
  ctx.quadraticCurveTo(355, 278, 355, 278) // 左上
  ctx.quadraticCurveTo(360, 263, 373, 257) // 中央上
  ctx.quadraticCurveTo(390, 258, 401, 275) // 右上
  ctx.quadraticCurveTo(418, 374, 418, 374) // 右下
  // 内側
  ctx.moveTo(356, 278) // 左下
  ctx.quadraticCurveTo(360, 266, 373, 260) // 中央上
  ctx.quadraticCurveTo(387, 258, 398, 275) // 右上
  ctx.quadraticCurveTo(415, 374, 415, 374) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}
