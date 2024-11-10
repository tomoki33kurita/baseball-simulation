export const allowLace = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 左側
  ctx.beginPath()
  ctx.moveTo(635 + x, 149 + y) // 左上
  ctx.quadraticCurveTo(642 + x, 168 + y, 632 + x, 182 + y) // 左下
  ctx.quadraticCurveTo(633 + x, 182 + y, 632 + x, 187 + y) // 右下下
  ctx.quadraticCurveTo(652 + x, 165 + y, 641 + x, 145 + y) // 右上
  ctx.quadraticCurveTo(637 + x, 142 + y, 635 + x, 149 + y) // 左上
  ctx.fill()
  // 断面ライン
  ctx.moveTo(635 + x, 149 + y) // 下
  ctx.quadraticCurveTo(649 + x, 167 + y, 632 + x, 187 + y) // 上
  ctx.stroke()
  ctx.closePath()

  // 右側
  ctx.beginPath()
  // ctx.strokeStyle = 'blue' // '#383838'
  ctx.moveTo(638 + x, 164 + y) // 左上
  ctx.quadraticCurveTo(638 + x, 173 + y, 638 + x, 173 + y) // 左下
  ctx.quadraticCurveTo(645 + x, 171 + y, 653 + x, 172 + y) // 右下
  ctx.quadraticCurveTo(655 + x, 167 + y, 653 + x, 162 + y) // 右上
  ctx.quadraticCurveTo(645 + x, 160 + y, 638 + x, 164 + y) // 左上
  ctx.fill()
  // 断面ライン
  ctx.moveTo(638 + x, 173 + y) // 下
  ctx.quadraticCurveTo(646 + x, 168 + y, 651 + x, 173 + y) // 上
  ctx.stroke()
  ctx.closePath()

  if (numerator !== undefined) {
    ctx.restore()
  }
}
