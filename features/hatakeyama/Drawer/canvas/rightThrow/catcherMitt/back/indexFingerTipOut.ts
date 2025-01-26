export const indexFingerTipOutDrawer = (ctx: CanvasRenderingContext2D, tipOutColor: string, liningLeatherColor: string, fingerType: string): void => {
  // 裏革
  ctx.fillStyle = liningLeatherColor
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.moveTo(312, 452) //左
  ctx.quadraticCurveTo(313, 455, 313, 455) // 左下
  ctx.quadraticCurveTo(428, 450, 428, 450) // 右下
  ctx.quadraticCurveTo(426, 445, 426, 445) // 右上
  ctx.quadraticCurveTo(356, 440, 312, 452) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 人差し指の穴周り＿上
  ctx.fillStyle = tipOutColor
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
