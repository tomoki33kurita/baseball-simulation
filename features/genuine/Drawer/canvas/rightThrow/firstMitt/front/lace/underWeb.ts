export const underLeft = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 右上
  ctx.moveTo(335 + locationX, 353 + locationY) // 上_左
  ctx.quadraticCurveTo(338 + locationX, 363 + locationY, 333 + locationX, 371 + locationY) // 下＿左
  ctx.quadraticCurveTo(339 + locationX, 381 + locationY, 345 + locationX, 374 + locationY) // 下＿右
  ctx.quadraticCurveTo(349 + locationX, 357 + locationY, 344 + locationX, 348 + locationY) // 上＿右
  ctx.quadraticCurveTo(341 + locationX, 339 + locationY, 335 + locationX, 353 + locationY) // 上＿左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(336 + locationX, 351 + locationY) // 左上
  ctx.quadraticCurveTo(340 + locationX, 363 + locationY, 335 + locationX, 372 + locationY) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const underCenter = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(388, 346) // 左上
  ctx.quadraticCurveTo(389, 351, 398, 350) // 左下
  ctx.quadraticCurveTo(403, 337, 414, 332) // 右下
  ctx.quadraticCurveTo(414, 323, 414, 323) // 右上
  ctx.quadraticCurveTo(396, 330, 388, 346) // 左上
  ctx.fill()
  // 側面ライン
  ctx.stroke()
  ctx.closePath()
}

export const underRight = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 右上
  ctx.moveTo(407 + locationX, 294 + locationY) // 上_左
  ctx.quadraticCurveTo(400 + locationX, 304 + locationY, 411 + locationX, 305 + locationY) // 下＿左
  ctx.quadraticCurveTo(419 + locationX, 301 + locationY, 428 + locationX, 304 + locationY) // 下＿右
  ctx.quadraticCurveTo(437 + locationX, 306 + locationY, 437 + locationX, 296 + locationY) // 上＿右
  ctx.quadraticCurveTo(427 + locationX, 289 + locationY, 407 + locationX, 294 + locationY) // 上＿左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(406 + locationX, 303 + locationY) // 左上
  ctx.quadraticCurveTo(424 + locationX, 299 + locationY, 433 + locationX, 303 + locationY) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const underWebRight = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 右上
  ctx.moveTo(435 + locationX, 238 + locationY) // 上_左
  ctx.quadraticCurveTo(434 + locationX, 247 + locationY, 434 + locationX, 247 + locationY) // 下＿左
  ctx.quadraticCurveTo(452 + locationX, 248 + locationY, 452 + locationX, 248 + locationY) // 下＿右
  ctx.quadraticCurveTo(458 + locationX, 243 + locationY, 455 + locationX, 238 + locationY) // 上＿右
  ctx.quadraticCurveTo(435 + locationX, 238 + locationY, 435 + locationX, 238 + locationY) // 上＿左
  ctx.fill()
  // 側面ライン
  ctx.moveTo(435 + locationX, 239 + locationY) // 左上
  ctx.quadraticCurveTo(444 + locationX, 240 + locationY, 454 + locationX, 238 + locationY) // 右下
  ctx.moveTo(435 + locationX, 246 + locationY) // 左上
  ctx.quadraticCurveTo(442 + locationX, 245 + locationY, 453 + locationX, 246 + locationY) // 右下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}
