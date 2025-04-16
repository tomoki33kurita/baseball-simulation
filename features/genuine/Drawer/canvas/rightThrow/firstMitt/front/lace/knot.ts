export const knot = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 紐先端＿上
  ctx.moveTo(212 + locationX, 292 + locationY) //
  ctx.quadraticCurveTo(241 + locationX, 366 + locationY, 241 + locationX, 366 + locationY) // 左下
  ctx.quadraticCurveTo(252 + locationX, 374 + locationY, 255 + locationX, 375 + locationY) // 右下
  ctx.quadraticCurveTo(238 + locationX, 331 + locationY, 223 + locationX, 292 + locationY) // 右上
  ctx.quadraticCurveTo(213 + locationX, 287 + locationY, 213 + locationX, 287 + locationY) // 左上
  ctx.quadraticCurveTo(212 + locationX, 292 + locationY, 212 + locationX, 292 + locationY) //
  ctx.fill()
  // 側面ライン
  ctx.moveTo(212 + locationX, 292 + locationY) // 左上
  ctx.quadraticCurveTo(220 + locationX, 295 + locationY, 220 + locationX, 295 + locationY) // 右下
  ctx.quadraticCurveTo(249 + locationX, 372 + locationY, 249 + locationX, 372 + locationY) // 右下
  ctx.moveTo(222 + locationX, 291 + locationY) // 左上
  ctx.lineTo(221 + locationX, 295 + locationY) // 右下
  ctx.stroke()
  ctx.closePath()

  // 結び目中央＿左
  ctx.beginPath()
  ctx.moveTo(239 + locationX, 360 + locationY) // 左上
  ctx.quadraticCurveTo(233 + locationX, 362 + locationY, 240 + locationX, 379 + locationY) // 左下
  ctx.quadraticCurveTo(248 + locationX, 388 + locationY, 257 + locationX, 390 + locationY) // 右下
  ctx.quadraticCurveTo(265 + locationX, 392 + locationY, 266 + locationX, 390 + locationY) //
  ctx.quadraticCurveTo(259 + locationX, 375 + locationY, 241 + locationX, 367 + locationY) // 右上
  ctx.quadraticCurveTo(239 + locationX, 360 + locationY, 239 + locationX, 360 + locationY) // 右上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(236 + locationX, 368 + locationY) // 左上
  ctx.quadraticCurveTo(260 + locationX, 380 + locationY, 265 + locationX, 390 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()

  // 結び目中央_右上
  ctx.beginPath()
  ctx.moveTo(255 + locationX, 349 + locationY) // 左上
  ctx.quadraticCurveTo(245 + locationX, 352 + locationY, 252 + locationX, 360 + locationY) // 左下
  ctx.quadraticCurveTo(254 + locationX, 374 + locationY, 254 + locationX, 374 + locationY) //
  ctx.quadraticCurveTo(258 + locationX, 376 + locationY, 257 + locationX, 369 + locationY) // 右下
  ctx.quadraticCurveTo(253 + locationX, 362 + locationY, 256 + locationX, 354 + locationY) // 右上
  ctx.quadraticCurveTo(255 + locationX, 349 + locationY, 255 + locationX, 349 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(253 + locationX, 351 + locationY) // 上
  ctx.quadraticCurveTo(249 + locationX, 360 + locationY, 254 + locationX, 371 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()

  // 結び目中央_右
  ctx.beginPath()
  ctx.moveTo(258 + locationX, 361 + locationY) // 左上
  ctx.quadraticCurveTo(256 + locationX, 376 + locationY, 256 + locationX, 376 + locationY) // 左下
  ctx.quadraticCurveTo(261 + locationX, 378 + locationY, 265 + locationX, 386 + locationY) // 右下
  ctx.quadraticCurveTo(268 + locationX, 383 + locationY, 267 + locationX, 375 + locationY) // 右上
  ctx.quadraticCurveTo(263 + locationX, 361 + locationY, 258 + locationX, 361 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(261 + locationX, 362 + locationY) // 上
  ctx.quadraticCurveTo(261 + locationX, 370 + locationY, 259 + locationX, 378 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()

  // 結び目中央＿下
  ctx.beginPath()
  ctx.moveTo(247 + locationX, 387 + locationY) // 左上
  ctx.quadraticCurveTo(263 + locationX, 403 + locationY, 261 + locationX, 403 + locationY) // 左下
  ctx.quadraticCurveTo(277 + locationX, 404 + locationY, 275 + locationX, 392 + locationY) // 右下
  ctx.quadraticCurveTo(271 + locationX, 379 + locationY, 269 + locationX, 376 + locationY) // 右上
  ctx.quadraticCurveTo(271 + locationX, 398 + locationY, 247 + locationX, 387 + locationY) // 右上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(253 + locationX, 393 + locationY) // 左上
  ctx.quadraticCurveTo(271 + locationX, 402 + locationY, 273 + locationX, 382 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()

  // 紐先端＿下
  ctx.beginPath()
  ctx.moveTo(260 + locationX, 401 + locationY) // 左上
  ctx.quadraticCurveTo(271 + locationX, 425 + locationY, 276 + locationX, 453 + locationY) // 左下
  ctx.quadraticCurveTo(285 + locationX, 455 + locationY, 285 + locationX, 455 + locationY) // 右下
  ctx.quadraticCurveTo(279 + locationX, 425 + locationY, 272 + locationX, 403 + locationY) // 右上
  ctx.quadraticCurveTo(268 + locationX, 406 + locationY, 260 + locationX, 401 + locationY) // 右上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(270 + locationX, 404 + locationY) // 左上
  ctx.quadraticCurveTo(277 + locationX, 430 + locationY, 284 + locationX, 456 + locationY) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const singleKnot = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 紐先端＿上
  ctx.moveTo(141 + locationX, 229 + locationY) //
  ctx.quadraticCurveTo(140 + locationX, 234 + locationY, 145 + locationX, 242 + locationY) // 左下
  ctx.quadraticCurveTo(173 + locationX, 233 + locationY, 200 + locationX, 230 + locationY) // 右下
  ctx.quadraticCurveTo(203 + locationX, 226 + locationY, 201 + locationX, 221 + locationY) // 右上
  ctx.quadraticCurveTo(189 + locationX, 214 + locationY, 141 + locationX, 229 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(142 + locationX, 233 + locationY) // 左上
  ctx.quadraticCurveTo(187 + locationX, 220 + locationY, 202 + locationX, 223 + locationY) // 右下
  ctx.stroke()

  // 結び目＿中央
  ctx.moveTo(198 + locationX, 220 + locationY) //
  ctx.quadraticCurveTo(207 + locationX, 226 + locationY, 198 + locationX, 232 + locationY) // 左下
  ctx.quadraticCurveTo(202 + locationX, 240 + locationY, 211 + locationX, 241 + locationY) // 右下
  ctx.quadraticCurveTo(217 + locationX, 228 + locationY, 215 + locationX, 220 + locationY) // 右上
  ctx.quadraticCurveTo(197 + locationX, 210 + locationY, 198 + locationX, 220 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(205 + locationX, 215 + locationY) // 左上
  ctx.quadraticCurveTo(206 + locationX, 230 + locationY, 200 + locationX, 235 + locationY) // 右下
  // 結び目＿下
  ctx.moveTo(195 + locationX, 232 + locationY) // 左＿内
  ctx.quadraticCurveTo(212 + locationX, 255 + locationY, 218 + locationX, 235 + locationY) // 右＿外
  ctx.quadraticCurveTo(215 + locationX, 233 + locationY, 215 + locationX, 233 + locationY) // 右＿内
  ctx.quadraticCurveTo(211 + locationX, 247 + locationY, 198 + locationX, 232 + locationY) // 左＿内
  ctx.quadraticCurveTo(195 + locationX, 232 + locationY, 195 + locationX, 232 + locationY) // 左＿外
  ctx.fill()
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}
