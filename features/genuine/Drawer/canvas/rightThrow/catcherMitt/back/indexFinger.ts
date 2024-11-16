export const indexFingerCover = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(318, 444) // 左下
  ctx.quadraticCurveTo(327, 460, 415, 425) // 右下
  ctx.quadraticCurveTo(375, 268, 375, 268) // 右上
  ctx.quadraticCurveTo(316, 295, 300, 281) // 左上
  ctx.quadraticCurveTo(318, 444, 318, 444) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(372, 275) // 左下
  ctx.quadraticCurveTo(410, 423, 410, 423) //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}
