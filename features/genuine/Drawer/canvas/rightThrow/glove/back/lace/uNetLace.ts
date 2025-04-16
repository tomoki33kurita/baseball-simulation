export const laceOfLacingWebRight1 = (
  ctx: CanvasRenderingContext2D,
  laceColor: string,
  x: number,
  y: number,
  numerator: number,
  scaleSize: number
): void => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#282828'
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.scale(scaleSize, 1)
  ctx.beginPath()
  ctx.moveTo(636 + x, 231 + y) // 左上
  ctx.quadraticCurveTo(628 + x, 256 + y, 642 + x, 285 + y) // 左下
  ctx.quadraticCurveTo(650 + x, 284 + y, 650 + x, 278 + y) // 右下
  ctx.quadraticCurveTo(639 + x, 257 + y, 646 + x, 232 + y) // 右上
  ctx.quadraticCurveTo(636 + x, 231 + y, 636 + x, 231 + y) // 左上
  ctx.fill()
  ctx.moveTo(638 + x, 231 + y) // 左上
  ctx.quadraticCurveTo(630 + x, 256 + y, 644 + x, 285 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}
export const laceOfLacingWebRight2 = (
  ctx: CanvasRenderingContext2D,
  laceColor: string,
  x: number,
  y: number,
  numerator: number,
  scaleSize: number
): void => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#282828'
  // ctx.strokeStyle = 'red'
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.scale(scaleSize, 1)
  ctx.beginPath()
  ctx.moveTo(609 + x, 233 + y) // 左上
  ctx.quadraticCurveTo(602 + x, 233 + y, 603 + x, 243 + y) // 左下
  ctx.quadraticCurveTo(626 + x, 255 + y, 650 + x, 257 + y) // 右下
  ctx.quadraticCurveTo(652 + x, 249 + y, 646 + x, 247 + y) // 右上
  ctx.quadraticCurveTo(632 + x, 247 + y, 609 + x, 233 + y) // 左上
  ctx.fill()
  ctx.moveTo(603 + x, 241 + y) // 左上
  ctx.quadraticCurveTo(626 + x, 253 + y, 650 + x, 255 + y) // 右下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}
export const laceOfLacingWebLeft1 = (
  ctx: CanvasRenderingContext2D,
  laceColor: string,
  x: number,
  y: number,
  numerator: number,
  scaleSize: number
): void => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#282828'
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.scale(scaleSize, 1)

  ctx.beginPath()
  ctx.moveTo(540 + x, 158 + y) // 左上
  ctx.quadraticCurveTo(538 + x, 161 + y, 542 + x, 167 + y) // 左下
  ctx.quadraticCurveTo(583 + x, 172 + y, 592 + x, 158 + y) // 右下
  ctx.quadraticCurveTo(590 + x, 154 + y, 586 + x, 150 + y) // 右上
  ctx.quadraticCurveTo(576 + x, 163 + y, 540 + x, 158 + y) // 左上
  ctx.fill()
  ctx.moveTo(542 + x, 165 + y) // 右下
  ctx.quadraticCurveTo(583 + x, 170 + y, 592 + x, 156 + y) // 右下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}
export const laceOfLacingWebLeft2 = (
  ctx: CanvasRenderingContext2D,
  laceColor: string,
  x: number,
  y: number,
  numerator: number,
  scaleSize: number
): void => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#282828'
  // ctx.strokeStyle = 'red'
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.scale(scaleSize, 1)

  ctx.beginPath()
  ctx.moveTo(561 + x, 158 + y) // 左上
  ctx.quadraticCurveTo(568 + x, 179 + y, 587 + x, 202 + y) // 左下
  ctx.quadraticCurveTo(594 + x, 200 + y, 596 + x, 194 + y) // 右下
  ctx.quadraticCurveTo(578 + x, 178 + y, 571 + x, 157 + y) // 右上
  ctx.quadraticCurveTo(568 + x, 154 + y, 561 + x, 158 + y) // 左上
  ctx.fill()
  ctx.moveTo(563 + x, 158 + y) // 左上
  ctx.quadraticCurveTo(571 + x, 179 + y, 589 + x, 201 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}
