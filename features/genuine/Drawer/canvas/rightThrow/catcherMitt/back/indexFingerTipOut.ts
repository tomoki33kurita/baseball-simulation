export const indexFingerTipOutDrawer = (ctx: CanvasRenderingContext2D, color: string, fingerType: string): void => {
  // 人差し指の穴周り＿上
  ctx.fillStyle = color
  if (fingerType !== 'indexPad') {
    ctx.beginPath()
    ctx.strokeStyle = '#383838'
    ctx.moveTo(310, 430) //左上
    ctx.quadraticCurveTo(312, 445, 312, 449) // 左下
    ctx.quadraticCurveTo(356, 438, 427, 440) // 右下
    ctx.quadraticCurveTo(422, 422, 422, 422) // 右上
    ctx.quadraticCurveTo(310, 428, 310, 428) // 左上
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  // 人差し指の穴周り＿下
  ctx.beginPath()
  ctx.moveTo(312, 450) //左上
  ctx.quadraticCurveTo(314, 462, 314, 465) // 左下
  ctx.quadraticCurveTo(430, 455, 430, 455) // 右下
  ctx.quadraticCurveTo(427, 441, 427, 441) // 右上
  ctx.quadraticCurveTo(312, 450, 312, 450) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
