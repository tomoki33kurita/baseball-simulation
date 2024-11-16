export const connectCatchFace = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 左_親指芯とウェブ下捕球面を繋ぐところ
  ctx.beginPath()
  ctx.moveTo(239, 347) // 左上
  ctx.quadraticCurveTo(236, 354, 236, 360) // 左下
  ctx.quadraticCurveTo(248, 360, 249, 362) // 右下
  ctx.quadraticCurveTo(249, 354, 249, 354) // 右上
  ctx.quadraticCurveTo(243, 348, 239, 347) // 左上
  ctx.fill()
  ctx.moveTo(246, 352) // 左上
  ctx.quadraticCurveTo(245, 357, 245, 360) // 左下
  ctx.stroke()
  ctx.closePath()

  // 右_小指芯とウェブ下捕球面を繋ぐところ
  ctx.beginPath()
  ctx.moveTo(371, 223) // 左上
  ctx.quadraticCurveTo(378, 231, 378, 231) // 左下
  ctx.quadraticCurveTo(395, 224, 395, 225) // 右下
  ctx.quadraticCurveTo(393, 212, 393, 213) // 右上
  ctx.quadraticCurveTo(377, 217, 371, 223) // 左上
  ctx.fill()
  ctx.moveTo(377, 229) // 左上
  ctx.quadraticCurveTo(384, 224, 396, 223) // 左下
  ctx.stroke()
  ctx.closePath()
}
