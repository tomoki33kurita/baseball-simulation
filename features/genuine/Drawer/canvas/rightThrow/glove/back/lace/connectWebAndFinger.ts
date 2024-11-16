export const connectWebToIndexTop = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(539 + x, 31 + y) // 左上
  ctx.quadraticCurveTo(539 + x, 39 + y, 539 + x, 39 + y) // 左下
  ctx.quadraticCurveTo(551 + x, 36 + y, 569 + x, 60 + y) // 右下
  ctx.quadraticCurveTo(575 + x, 44 + y, 574 + x, 49 + y) // 右上
  ctx.quadraticCurveTo(556 + x, 22 + y, 539 + x, 31 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(539 + x, 39 + y) // 左上
  ctx.quadraticCurveTo(552 + x, 29 + y, 570 + x, 55 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const connectWebToIndex = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上右下方向の革紐
  ctx.beginPath()
  ctx.moveTo(508 + locationX, 158 + locationY) // 左上
  ctx.quadraticCurveTo(502 + locationX, 168 + locationY, 502 + locationX, 168 + locationY) // 左下
  ctx.quadraticCurveTo(510 + locationX, 173 + locationY, 510 + locationX, 173 + locationY) // 左下
  ctx.quadraticCurveTo(515 + locationX, 170 + locationY, 516 + locationX, 161 + locationY) // 右上
  ctx.quadraticCurveTo(514 + locationX, 156 + locationY, 508 + locationX, 158 + locationY) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(502 + locationX, 168 + locationY) // 左上
  ctx.quadraticCurveTo(506 + locationX, 168 + locationY, 512 + locationX, 171 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const connectWebToThumbTop = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(709 + x, 254 + y) // 左上
  ctx.quadraticCurveTo(713 + x, 262 + y, 714 + x, 271 + y) // 左下
  ctx.quadraticCurveTo(717 + x, 273 + y, 721 + x, 269 + y) // 右下
  ctx.quadraticCurveTo(722 + x, 256 + y, 716 + x, 248 + y) // 右上
  ctx.quadraticCurveTo(712 + x, 248 + y, 709 + x, 254 + y) // 左上
  ctx.fill()
  ctx.moveTo(711 + x, 251 + y) // 左上
  ctx.quadraticCurveTo(717 + x, 259 + y, 716 + x, 272 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const connectWebToThumb = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }

  // 左上右下方向の革紐
  ctx.moveTo(628 + locationX, 343 + locationY) // 左上
  ctx.quadraticCurveTo(629 + locationX, 350 + locationY, 629 + locationX, 350 + locationY) // 左下
  ctx.quadraticCurveTo(635 + locationX, 353 + locationY, 640 + locationX, 348 + locationY) // 右下
  ctx.quadraticCurveTo(639 + locationX, 337 + locationY, 639 + locationX, 337 + locationY) // 右上
  ctx.quadraticCurveTo(635 + locationX, 343 + locationY, 628 + locationX, 343 + locationY) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 側面ライン
  ctx.moveTo(632 + locationX, 343 + locationY) // 上
  ctx.quadraticCurveTo(634 + locationX, 352 + locationY, 634 + locationX, 352 + locationY) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }

  ctx.closePath()
}
