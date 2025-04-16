export const webTop1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 親指
  ctx.beginPath()
  ctx.moveTo(93 + x, 252 + y) // 左下＿奥
  ctx.quadraticCurveTo(94 + x, 248 + y, 121 + x, 262 + y) // 右下
  ctx.quadraticCurveTo(125 + x, 259 + y, 129 + x, 252 + y) //
  ctx.quadraticCurveTo(110 + x, 240 + y, 94 + x, 236 + y) //
  ctx.quadraticCurveTo(94 + x, 241 + y, 90 + x, 246 + y) // 左下
  ctx.quadraticCurveTo(93 + x, 247 + y, 93 + x, 252 + y) // 左下奥
  ctx.fill()
  ctx.moveTo(90 + x, 244 + y) // 左
  ctx.quadraticCurveTo(106 + x, 249 + y, 123 + x, 260 + y) // 右
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const webTop2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 親指
  ctx.beginPath()
  ctx.moveTo(114 + x, 223 + y) // 左上奥
  ctx.quadraticCurveTo(119 + x, 209 + y, 145 + x, 226 + y) // 右下
  ctx.quadraticCurveTo(155 + x, 218 + y, 155 + x, 211 + y) // 右上
  ctx.quadraticCurveTo(132 + x, 198 + y, 119 + x, 205 + y) // 左上
  ctx.quadraticCurveTo(118 + x, 211 + y, 112 + x, 214 + y) // 左下
  ctx.quadraticCurveTo(111 + x, 218 + y, 114 + x, 223 + y) // 左下奥
  ctx.fill()
  ctx.moveTo(112 + x, 214 + y) // 左
  ctx.quadraticCurveTo(121 + x, 207 + y, 149 + x, 223 + y) // 右
  ctx.moveTo(119 + x, 207 + y) // 左
  ctx.quadraticCurveTo(131 + x, 200 + y, 154 + x, 212 + y) // 右
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const webTop3 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 親指
  ctx.beginPath()
  ctx.moveTo(271, 71) // 左上
  ctx.quadraticCurveTo(282, 95, 282, 95) // 左下
  ctx.quadraticCurveTo(295, 95, 295, 95) // 右下
  ctx.quadraticCurveTo(288, 76, 280, 65) // 右上
  ctx.quadraticCurveTo(271, 71, 271, 71) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const webTopCrossLace = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, rotate: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)

  // 左上-右下
  ctx.beginPath()
  ctx.moveTo(114 + x, 223 + y) // 左上奥
  ctx.quadraticCurveTo(119 + x, 209 + y, 145 + x, 226 + y) // 右下
  ctx.quadraticCurveTo(155 + x, 218 + y, 155 + x, 211 + y) // 右上
  ctx.quadraticCurveTo(132 + x, 198 + y, 119 + x, 205 + y) // 左上
  ctx.quadraticCurveTo(118 + x, 211 + y, 112 + x, 214 + y) // 左下
  ctx.quadraticCurveTo(111 + x, 218 + y, 114 + x, 223 + y) // 左下奥
  ctx.fill()
  ctx.moveTo(112 + x, 214 + y) // 左
  ctx.quadraticCurveTo(121 + x, 207 + y, 149 + x, 223 + y) // 右
  ctx.moveTo(119 + x, 207 + y) // 左
  ctx.quadraticCurveTo(131 + x, 200 + y, 154 + x, 212 + y) // 右
  ctx.stroke()
  ctx.closePath()

  // 右上-左下
  ctx.beginPath()
  ctx.moveTo(124 + x, 205 + y) // 左上
  ctx.quadraticCurveTo(130 + x, 218 + y, 128 + x, 233 + y) // 左下
  ctx.quadraticCurveTo(140 + x, 230 + y, 141 + x, 226 + y) // 右下
  ctx.quadraticCurveTo(146 + x, 208 + y, 135 + x, 189 + y) // 右上
  ctx.quadraticCurveTo(125 + x, 193 + y, 124 + x, 205 + y) // 左上
  ctx.fill()
  ctx.moveTo(126 + x, 205 + y) // 上
  ctx.quadraticCurveTo(132 + x, 218 + y, 130 + x, 233 + y) // 下
  ctx.moveTo(134 + x, 189 + y) // 上
  ctx.quadraticCurveTo(140 + x, 207 + y, 141 + x, 226 + y) // 下
  ctx.stroke()
  ctx.restore()
  // ctx.quadraticCurveTo()

  ctx.closePath()
}
