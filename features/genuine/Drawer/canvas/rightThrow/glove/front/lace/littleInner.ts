export const littleInner = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(690 + locationX, 246 + locationY) // 左上
  ctx.quadraticCurveTo(671 + locationX, 266 + locationY, 674 + locationX, 290 + locationY) // 左下
  ctx.quadraticCurveTo(678 + locationX, 295 + locationY, 678 + locationX, 295 + locationY) // 右下
  ctx.quadraticCurveTo(681 + locationX, 271 + locationY, 692 + locationX, 255 + locationY) // 右上
  ctx.quadraticCurveTo(695 + locationX, 247 + locationY, 690 + locationX, 246 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(692 + locationX, 252 + locationY) // 右上
  ctx.quadraticCurveTo(675 + locationX, 271 + locationY, 678 + locationX, 295 + locationY) // 右下
  ctx.stroke()
  ctx.closePath()
}
