export const webTop = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 右から２番目
  ctx.moveTo(202 + x, 199 + y) // 左上
  ctx.quadraticCurveTo(205 + x, 202 + y, 207 + x, 202 + y) // 左下
  ctx.quadraticCurveTo(210 + x, 195 + y, 229 + x, 214 + y)
  ctx.quadraticCurveTo(228 + x, 189 + y, 205 + x, 190 + y)
  ctx.quadraticCurveTo(202 + x, 190 + y, 202 + x, 199 + y)
  ctx.fill()
  // 側面ライン
  ctx.moveTo(203 + x, 197 + y) // 左上
  ctx.quadraticCurveTo(216 + x, 192 + y, 229 + x, 214 + y) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const webTop2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 右から２番目
  ctx.moveTo(285 + x, 80 + y) // 左上_上
  ctx.quadraticCurveTo(285 + x, 85 + y, 285 + x, 85 + y) // 左上_下
  ctx.quadraticCurveTo(291 + x, 94 + y, 289 + x, 112 + y) // 左下
  ctx.quadraticCurveTo(294 + x, 107 + y, 295 + x, 107 + y)
  ctx.quadraticCurveTo(304 + x, 92 + y, 294 + x, 77 + y)
  ctx.quadraticCurveTo(290 + x, 75 + y, 285 + x, 80 + y)
  ctx.fill()
  // 側面ライン
  ctx.moveTo(287 + x, 80 + y) // 左上
  ctx.quadraticCurveTo(297 + x, 92 + y, 289 + x, 110 + y) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const webTopCrossLeftDown = (
  ctx: CanvasRenderingContext2D,
  laceColor: string,
  x: number,
  y: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  // 長方形＿巻き込みパーツ＿
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.beginPath()
  ctx.moveTo(208 + x, 190 + y) // 左上
  ctx.quadraticCurveTo(213 + x, 200 + y, 212 + x, 222 + y) // 左下1
  ctx.quadraticCurveTo(218 + x, 218 + y, 221 + x, 211 + y) // 右下
  ctx.quadraticCurveTo(221 + x, 191 + y, 216 + x, 188 + y) // 右上
  ctx.quadraticCurveTo(216 + x, 186 + y, 208 + x, 190 + y) // 左上＿右
  ctx.fill()
  // 側面ライン
  ctx.moveTo(210 + x, 190 + y) // 左上
  ctx.quadraticCurveTo(216 + x, 200 + y, 215 + x, 219 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const webTopCrossLeftUp = (
  ctx: CanvasRenderingContext2D,
  laceColor: string,
  x: number,
  y: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  // 長方形＿巻き込みパーツ＿
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.beginPath()
  ctx.moveTo(200 + x, 213 + y) // 左上奥_左
  ctx.quadraticCurveTo(202 + x, 213 + y, 200 + x, 213 + y) // 左上奥_右
  ctx.quadraticCurveTo(205 + x, 201 + y, 226 + x, 207 + y) // 右下＿左
  ctx.quadraticCurveTo(234 + x, 201 + y, 229 + x, 197 + y) // 右下＿右
  ctx.quadraticCurveTo(213 + x, 192 + y, 207 + x, 198 + y) // 左上＿右
  ctx.quadraticCurveTo(197 + x, 213 + y, 200 + x, 213 + y) // 左上奥＿左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(201 + x, 207 + y) // 左上
  ctx.quadraticCurveTo(211 + x, 197 + y, 228 + x, 204 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  if (numerator !== undefined) {
    ctx.restore()
  }
}
