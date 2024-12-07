export const webTop0 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(536, 44) // 左上
  ctx.quadraticCurveTo(529, 54, 530, 62) // 左下
  ctx.quadraticCurveTo(537, 66, 541, 60) // 右下
  ctx.quadraticCurveTo(545, 57, 545, 49) // 右上
  ctx.quadraticCurveTo(541, 43, 536, 44) // 左上
  ctx.fill()
  ctx.moveTo(536, 44) // 左上
  ctx.quadraticCurveTo(534, 52, 530, 62) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const webTop1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(566 + x, 66 + y) // 左上奥
  ctx.quadraticCurveTo(574 + x, 69 + y, 571 + x, 84 + y) // 左下
  ctx.quadraticCurveTo(576 + x, 94 + y, 583 + x, 86 + y) // 右下
  ctx.quadraticCurveTo(585 + x, 80 + y, 583 + x, 72 + y) // 右上
  ctx.quadraticCurveTo(573 + x, 65 + y, 573 + x, 65 + y) // 左上
  ctx.quadraticCurveTo(570 + x, 61 + y, 566 + x, 66 + y) // 左上
  ctx.fill()
  ctx.moveTo(573 + x, 65 + y) // 左上
  ctx.quadraticCurveTo(575 + x, 76 + y, 571 + x, 84 + y) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const webTop2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(691 + x, 182 + y) // 左上奥
  ctx.quadraticCurveTo(699 + x, 187 + y, 694 + x, 195 + y) // 左下
  ctx.quadraticCurveTo(695 + x, 201 + y, 702 + x, 204 + y) // 右下
  ctx.quadraticCurveTo(705 + x, 202 + y, 706 + x, 192 + y) // 右上
  ctx.quadraticCurveTo(705 + x, 190 + y, 700 + x, 185 + y) // 左上
  ctx.quadraticCurveTo(700 + x, 180 + y, 691 + x, 182 + y) // 左上奥
  ctx.fill()
  ctx.moveTo(700 + x, 185 + y) // 左上
  ctx.quadraticCurveTo(701 + x, 195 + y, 695 + x, 200 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const webTop3 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(718, 212) // 左上奥
  ctx.quadraticCurveTo(715, 222, 715, 222) // 左下
  ctx.quadraticCurveTo(718, 228, 720, 229) // 右下
  ctx.quadraticCurveTo(725, 226, 725, 221) // 右上
  ctx.quadraticCurveTo(721, 212, 721, 212) // 左上
  ctx.quadraticCurveTo(718, 212, 718, 212) // 左上奥
  ctx.fill()
  ctx.moveTo(721, 212) // 左上
  ctx.quadraticCurveTo(720, 219, 717, 223) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const webTopCrossLace = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, rotate: number, scaleSize = 1): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 左上_右下
  ctx.beginPath()
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.scale(scaleSize, scaleSize)
  ctx.moveTo(691 + x, 182 + y) // 左上奥
  ctx.quadraticCurveTo(699 + x, 187 + y, 694 + x, 195 + y) // 左下
  ctx.quadraticCurveTo(695 + x, 201 + y, 700 + x, 204 + y) // 右下
  ctx.quadraticCurveTo(705 + x, 202 + y, 704 + x, 192 + y) // 右上
  ctx.quadraticCurveTo(705 + x, 190 + y, 700 + x, 185 + y) // 左上
  ctx.quadraticCurveTo(700 + x, 180 + y, 691 + x, 182 + y) // 左上奥
  ctx.fill()
  ctx.moveTo(700 + x, 185 + y) // 左上
  ctx.quadraticCurveTo(701 + x, 195 + y, 695 + x, 200 + y) // 左下
  ctx.stroke()
  ctx.restore()
  ctx.closePath()

  // 右上_左下
  ctx.beginPath()
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.scale(scaleSize, scaleSize)
  ctx.moveTo(706 + x, 192 + y) // 左上
  ctx.quadraticCurveTo(697 + x, 188 + y, 687 + x, 188 + y) // 左下
  ctx.quadraticCurveTo(685 + x, 192 + y, 691 + x, 197 + y) // 右下
  ctx.quadraticCurveTo(707 + x, 200 + y, 707 + x, 200 + y) // 右上
  ctx.quadraticCurveTo(713 + x, 196 + y, 706 + x, 192 + y) // 左上
  ctx.fill()
  ctx.moveTo(707 + x, 200 + y) // 左上
  ctx.quadraticCurveTo(698 + x, 195 + y, 691 + x, 197 + y) // 左下
  ctx.stroke()
  ctx.restore()
  ctx.closePath()
}

// ctx.quadraticCurveTo() //
