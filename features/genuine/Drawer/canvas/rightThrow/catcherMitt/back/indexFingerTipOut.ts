export const indexFingerTipOutDrawer = (ctx: CanvasRenderingContext2D, color: string, fingerType: string): void => {
  // 人差し指の穴周り＿上
  ctx.fillStyle = color
  if (fingerType !== 'indexPad') {
    ctx.beginPath()
    ctx.strokeStyle = '#383838'
    ctx.moveTo(310, 435) //左上
    ctx.quadraticCurveTo(312, 450, 312, 454) // 左下
    ctx.quadraticCurveTo(356, 446, 427, 448) // 右下
    ctx.quadraticCurveTo(422, 430, 422, 430) // 右上
    ctx.quadraticCurveTo(310, 433, 310, 433) // 左上
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  // 人差し指の穴周り＿下
  ctx.beginPath()
  ctx.moveTo(312, 455) //左上
  ctx.quadraticCurveTo(314, 467, 314, 470) // 左下
  ctx.quadraticCurveTo(430, 463, 430, 463) // 右下
  ctx.quadraticCurveTo(427, 449, 427, 449) // 右上
  ctx.quadraticCurveTo(312, 455, 312, 455) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
