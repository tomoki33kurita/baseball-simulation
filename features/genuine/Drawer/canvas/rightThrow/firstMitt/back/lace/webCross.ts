export const webCross = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 左下＿右上
  ctx.beginPath()
  ctx.moveTo(496 + x, 191 + y) // 左下
  ctx.quadraticCurveTo(521 + x, 208 + y, 521 + x, 208 + y) // 右下
  ctx.quadraticCurveTo(539 + x, 210 + y, 549 + x, 221 + y) // 右下
  ctx.quadraticCurveTo(558 + x, 223 + y, 558 + x, 214 + y) // 右上
  ctx.quadraticCurveTo(546 + x, 199 + y, 523 + x, 194 + y) //
  ctx.quadraticCurveTo(504 + x, 184 + y, 501 + x, 186 + y) // 左上
  ctx.quadraticCurveTo(496 + x, 191 + y, 496 + x, 191 + y) // 左下
  ctx.fill()
  ctx.moveTo(496 + x, 192 + y) // 左
  ctx.quadraticCurveTo(528 + x, 205 + y, 550 + x, 220 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // 左上＿右下
  ctx.beginPath()
  ctx.moveTo(512 + x, 174 + y) // 左上
  ctx.quadraticCurveTo(523 + x, 206 + y, 524 + x, 225 + y) // 左下
  ctx.quadraticCurveTo(528 + x, 230 + y, 536 + x, 225 + y) // 右下
  ctx.quadraticCurveTo(535 + x, 197 + y, 521 + x, 171 + y) // 右上
  ctx.quadraticCurveTo(514 + x, 166 + y, 512 + x, 174 + y) // 左上
  ctx.fill()
  ctx.moveTo(514 + x, 172 + y) // 左上
  ctx.quadraticCurveTo(528 + x, 198 + y, 526 + x, 227 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}
