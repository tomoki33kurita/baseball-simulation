export const thumbEdge0 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(190, 201) // 左左
  ctx.quadraticCurveTo(194, 203, 194, 203) // 左下
  ctx.quadraticCurveTo(193, 193, 203, 190) //
  ctx.quadraticCurveTo(213, 186, 226, 197) // 右下
  ctx.quadraticCurveTo(225, 183, 209, 181) // 右上
  ctx.quadraticCurveTo(182, 177, 190, 201) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(190, 207) // 左上
  ctx.quadraticCurveTo(193, 174, 226, 193) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const thumbEdge1 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(215, 221) // 左上
  ctx.quadraticCurveTo(213, 228, 218, 233) // 左下
  ctx.quadraticCurveTo(242, 218, 258, 237) // 右下
  ctx.quadraticCurveTo(260, 221, 239, 214) // 右上
  ctx.quadraticCurveTo(223, 214, 215, 221) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(218, 233) // 左上
  ctx.quadraticCurveTo(245, 214, 258, 229) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const thumbEdge2 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(256 + locationX, 309 + locationY) // 左上
  ctx.quadraticCurveTo(267 + locationX, 320 + locationY, 265 + locationX, 320 + locationY) // 左下
  ctx.quadraticCurveTo(281 + locationX, 320 + locationY, 307 + locationX, 322 + locationY) // 右下
  ctx.quadraticCurveTo(313 + locationX, 318 + locationY, 305 + locationX, 307 + locationY) // 右上
  ctx.quadraticCurveTo(275 + locationX, 307 + locationY, 264 + locationX, 307 + locationY) //
  ctx.quadraticCurveTo(260 + locationX, 302 + locationY, 256 + locationX, 309 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(255 + locationX, 309 + locationY) // 左上
  ctx.quadraticCurveTo(267 + locationX, 316 + locationY, 305 + locationX, 307 + locationY) // 右下
  ctx.moveTo(280 + locationX, 322 + locationY) // 左上
  ctx.quadraticCurveTo(309 + locationX, 318 + locationY, 309 + locationX, 318 + locationY) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const thumbEdge3 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(279 + locationX, 350 + locationY) // 左上
  ctx.quadraticCurveTo(286 + locationX, 357 + locationY, 290 + locationX, 363 + locationY) // 左下
  ctx.quadraticCurveTo(306 + locationX, 370 + locationY, 328 + locationX, 362 + locationY) // 右下
  ctx.quadraticCurveTo(326 + locationX, 352 + locationY, 322 + locationX, 352 + locationY) // 右上
  ctx.quadraticCurveTo(298 + locationX, 356 + locationY, 285 + locationX, 350 + locationY) //
  ctx.quadraticCurveTo(279 + locationX, 350 + locationY, 279 + locationX, 350 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(284 + locationX, 355 + locationY) // 左上
  ctx.quadraticCurveTo(305 + locationX, 361 + locationY, 326 + locationX, 355 + locationY) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const thumbEdge4 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(344 + locationX, 493 + locationY) // 左上
  ctx.quadraticCurveTo(348 + locationX, 497 + locationY, 353 + locationX, 505 + locationY) // 左下
  ctx.quadraticCurveTo(363 + locationX, 516 + locationY, 386 + locationX, 508 + locationY) // 右下
  ctx.quadraticCurveTo(386 + locationX, 498 + locationY, 383 + locationX, 497 + locationY) // 右上
  ctx.quadraticCurveTo(356 + locationX, 503 + locationY, 350 + locationX, 492 + locationY) //
  ctx.quadraticCurveTo(344 + locationX, 489 + locationY, 344 + locationX, 493 + locationY) //
  ctx.fill()
  // 側面ライン
  ctx.moveTo(349 + locationX, 499 + locationY) // 左上
  ctx.quadraticCurveTo(362 + locationX, 507 + locationY, 384 + locationX, 499 + locationY) // 右下
  ctx.stroke()
  ctx.closePath()
}
