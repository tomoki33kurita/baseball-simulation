export const thumbAndListBelt = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(291, 490) // ベルト左上
  ctx.quadraticCurveTo(319, 538, 340, 588) // ベルト左下
  ctx.quadraticCurveTo(428, 599, 528, 586) // ベルト右下
  ctx.quadraticCurveTo(600, 529, 633, 453)
  ctx.quadraticCurveTo(684, 376, 731, 319)
  ctx.quadraticCurveTo(757, 283, 715, 260) // 親指頂点
  ctx.quadraticCurveTo(605, 318, 500, 434) // 折り返し右下
  ctx.quadraticCurveTo(487, 457, 458, 470) //
  ctx.quadraticCurveTo(291, 490, 291, 490) // ベルト左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitch
  ctx.lineWidth = 1.2
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 手口
  ctx.moveTo(340, 587) // 手口＿左
  ctx.quadraticCurveTo(430, 598, 529, 585) // 手口＿右
  ctx.stroke()
  ctx.setLineDash([])
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.closePath()
  // stitch
}

export const thumbOut = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(739, 283) // 左上
  ctx.quadraticCurveTo(625, 401, 569, 550) // 左下
  ctx.quadraticCurveTo(612, 505, 633, 452) // 右上中間
  ctx.quadraticCurveTo(673, 393, 730, 320) //
  ctx.quadraticCurveTo(748, 295, 739, 283) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}