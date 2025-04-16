export const underBoomerang = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 左上＿右下
  ctx.beginPath()
  ctx.moveTo(355, 144) // 左
  ctx.quadraticCurveTo(361, 146, 365, 141) // 左下
  ctx.quadraticCurveTo(365, 141, 375, 139) // 右下
  ctx.quadraticCurveTo(391, 128, 391, 128) // 右上
  ctx.quadraticCurveTo(364, 128, 355, 144) // 右上
  ctx.moveTo(378, 137) // 右上
  ctx.quadraticCurveTo(368, 135, 358, 140) // 左下

  ctx.moveTo(391, 128) // 右上
  ctx.quadraticCurveTo(354, 152, 348, 181) // 左下
  ctx.quadraticCurveTo(356, 184, 356, 182) // 右下
  ctx.quadraticCurveTo(367, 158, 387, 143) //
  ctx.quadraticCurveTo(391, 128, 391, 128) // 右上
  ctx.fill()
  ctx.moveTo(388, 137) // 右上
  ctx.quadraticCurveTo(363, 155, 356, 182) // 左下
  ctx.stroke()
}
