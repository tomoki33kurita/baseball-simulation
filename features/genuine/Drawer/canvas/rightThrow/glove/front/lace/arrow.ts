export const arrow1 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  // 左下
  ctx.beginPath()
  ctx.moveTo(322 + x, 236 + y) // 左上
  ctx.quadraticCurveTo(319 + x, 248 + y, 319 + x, 248 + y) // 左下
  ctx.quadraticCurveTo(323 + x, 255 + y, 327 + x, 251 + y) // 右下
  ctx.quadraticCurveTo(330 + x, 246 + y, 329 + x, 241 + y) // 右上
  ctx.quadraticCurveTo(327 + x, 237 + y, 322 + x, 236 + y) //
  ctx.fill()
  ctx.moveTo(323 + x, 236 + y) // 左上
  ctx.quadraticCurveTo(323 + x, 245 + y, 320 + x, 250 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // 右上
  ctx.beginPath()
  ctx.moveTo(327 + x, 239 + y) // 左下
  ctx.quadraticCurveTo(333 + x, 239 + y, 334 + x, 229 + y) // 左上
  ctx.quadraticCurveTo(337 + x, 227 + y, 338 + x, 231 + y) // 右上
  ctx.quadraticCurveTo(339 + x, 240 + y, 334 + x, 241 + y) // 右下
  ctx.quadraticCurveTo(327 + x, 239 + y, 327 + x, 239 + y)
  ctx.fill()
  ctx.moveTo(329 + x, 239 + y) // 左下
  ctx.quadraticCurveTo(335 + x, 239 + y, 335 + x, 229 + y) // 左上
  ctx.stroke()
  ctx.closePath()
}

export const arrow2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor

  // 上
  ctx.beginPath()
  ctx.moveTo(276 + x, 269 + y) // 左上
  ctx.quadraticCurveTo(280 + x, 278 + y, 283 + x, 288 + y) // 左下
  ctx.quadraticCurveTo(289 + x, 288 + y, 289 + x, 288 + y) // 右下
  ctx.quadraticCurveTo(290 + x, 278 + y, 285 + x, 270 + y) // 右上
  ctx.quadraticCurveTo(280 + x, 267 + y, 276 + x, 269 + y) // 左上
  ctx.fill()
  ctx.moveTo(277 + x, 269 + y) // 左上
  ctx.quadraticCurveTo(285 + x, 278 + y, 284 + x, 288 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // 下
  ctx.beginPath()
  ctx.moveTo(281 + x, 287 + y) // 左上
  ctx.quadraticCurveTo(277 + x, 291 + y, 277 + x, 303 + y) // 左下
  ctx.quadraticCurveTo(282 + x, 306 + y, 285 + x, 303 + y) // 右下
  ctx.quadraticCurveTo(283 + x, 293 + y, 283 + x, 287 + y) // 右上
  ctx.quadraticCurveTo(281 + x, 287 + y, 281 + x, 287 + y) // 左上
  ctx.fill()
  ctx.moveTo(283 + x, 287 + y) // 左上
  ctx.quadraticCurveTo(280 + x, 306 + y, 285 + x, 303 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const laceOfLiningAllow = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.lineWidth = 0.8
  // 右
  ctx.beginPath()
  ctx.moveTo(278 + x, 216 + y) // 左上
  ctx.quadraticCurveTo(278 + x, 222 + y, 281 + x, 229 + y) // 左下
  ctx.quadraticCurveTo(287 + x, 234 + y, 298 + x, 233 + y) // 右下
  ctx.quadraticCurveTo(299 + x, 227 + y, 295 + x, 226 + y) // 右上
  ctx.quadraticCurveTo(287 + x, 226 + y, 278 + x, 216 + y) // 左上
  ctx.fill()
  // // 下側面
  ctx.moveTo(280 + x, 220 + y) // 右上
  ctx.quadraticCurveTo(287 + x, 229 + y, 298 + x, 228 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  // 左
  ctx.beginPath()
  ctx.moveTo(278 + x, 215 + y) // 右上
  ctx.quadraticCurveTo(284 + x, 224 + y, 284 + x, 224 + y) // 右上_2
  ctx.quadraticCurveTo(283 + x, 232 + y, 276 + x, 238 + y) // 左上
  ctx.quadraticCurveTo(278 + x, 243 + y, 278 + x, 243 + y) // 左下
  ctx.quadraticCurveTo(293 + x, 232 + y, 288 + x, 222 + y) // 右上＿右
  ctx.quadraticCurveTo(286 + x, 215 + y, 278 + x, 215 + y) // 右上
  ctx.fill()
  ctx.moveTo(280 + x, 216 + y) // 右上
  ctx.quadraticCurveTo(293 + x, 227 + y, 277 + x, 239 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}
