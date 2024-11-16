export const thumbMachi = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(115, 321) // 左上
  ctx.quadraticCurveTo(154, 430, 245, 522) //
  ctx.quadraticCurveTo(330, 603, 476, 628) //
  ctx.quadraticCurveTo(533, 625, 564, 606) // 右下
  ctx.quadraticCurveTo(560, 590, 534, 583) //
  ctx.quadraticCurveTo(395, 567, 308, 484) //
  ctx.quadraticCurveTo(238, 412, 190, 327) //
  ctx.quadraticCurveTo(180, 308, 165, 296) //
  ctx.quadraticCurveTo(150, 283, 148, 296) // 右上
  ctx.quadraticCurveTo(130, 305, 115, 321) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
