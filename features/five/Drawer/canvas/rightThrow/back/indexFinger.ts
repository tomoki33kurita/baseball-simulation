export const indexFingerRight = (ctx: CanvasRenderingContext2D, leatherColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor
  // 捕球面折り返しが必要なケース
  ctx.beginPath()
  ctx.moveTo(515, 20) // 左上
  ctx.quadraticCurveTo(427, 170, 403, 356) // 左下
  ctx.quadraticCurveTo(457, 369, 457, 369) // 右下
  ctx.quadraticCurveTo(485, 209, 559, 68)
  ctx.quadraticCurveTo(563, 48, 553, 32)
  ctx.quadraticCurveTo(537, 21, 515, 20)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const indexFingerLeft = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(513, 20) // 右上
  ctx.quadraticCurveTo(486, 22, 470, 41)
  ctx.quadraticCurveTo(380, 177, 377, 360) // 左下
  ctx.quadraticCurveTo(400, 357, 402, 356) // 右下
  ctx.quadraticCurveTo(424, 170, 513, 20) // 右下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
