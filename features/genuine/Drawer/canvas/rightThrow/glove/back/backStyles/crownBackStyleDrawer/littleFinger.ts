export const littleFingerRight = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(218, 150) // 左上
  ctx.quadraticCurveTo(170, 413, 321, 590) // 下＿ベルトヘリ革の左
  ctx.quadraticCurveTo(277, 516, 263, 458)
  ctx.quadraticCurveTo(265, 440, 272, 427)
  ctx.quadraticCurveTo(222, 292, 241, 165)
  ctx.quadraticCurveTo(240, 152, 226, 147) // 頂点
  ctx.quadraticCurveTo(218, 150, 218, 150) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const littleFingerLeft = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(218, 150) // 上
  ctx.quadraticCurveTo(182, 287, 213, 401) //
  ctx.quadraticCurveTo(234, 498, 320, 589) // 下
  ctx.quadraticCurveTo(170, 415, 218, 150) // 上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
