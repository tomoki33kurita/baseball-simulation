export const reinforcementCrossLace = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  if (scaleSize !== undefined) {
    ctx.scale(scaleSize, scaleSize)
  }

  // // クロス左横
  // ctx.beginPath()
  // ctx.moveTo(493 + x, 288 + y) // 左上
  // ctx.quadraticCurveTo(486 + x, 288 + y, 486 + x, 293 + y) // 左下
  // ctx.quadraticCurveTo(510 + x, 317 + y, 510 + x, 317 + y) // 右下
  // ctx.quadraticCurveTo(513 + x, 311 + y, 519 + x, 314 + y) // 右上
  // ctx.quadraticCurveTo(510 + x, 301 + y, 493 + x, 288 + y) // 右上
  // ctx.fill()
  // // 断面ライン
  // ctx.moveTo(486 + x, 293 + y) // 下
  // ctx.quadraticCurveTo(500 + x, 302 + y, 510 + x, 317 + y) // 右下
  // ctx.stroke()
  // ctx.closePath()

  // クロス左縦
  ctx.beginPath()
  ctx.moveTo(497 + x, 263 + y) // 左上
  ctx.quadraticCurveTo(479 + x, 285 + y, 479 + x, 285 + y) // 左下
  ctx.quadraticCurveTo(484 + x, 292 + y, 486 + x, 290 + y) // 右下
  ctx.quadraticCurveTo(497 + x, 283 + y, 502 + x, 271 + y) // 右上
  ctx.quadraticCurveTo(499 + x, 263 + y, 497 + x, 263 + y) // 左上
  ctx.fill()
  // 断面ライン
  ctx.moveTo(498 + x, 264 + y) // 下
  ctx.quadraticCurveTo(493 + x, 275 + y, 480 + x, 286 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // クロス人差指連結部分
  ctx.beginPath()
  ctx.moveTo(475 + x, 244 + y) // 左上
  ctx.quadraticCurveTo(470 + x, 252 + y, 475 + x, 252 + y) // 左下
  ctx.quadraticCurveTo(488 + x, 258 + y, 495 + x, 269 + y) // 右下
  ctx.quadraticCurveTo(498 + x, 255 + y, 475 + x, 244 + y) // 右下
  ctx.fill()
  // 断面ライン
  ctx.moveTo(473 + x, 250 + y) // 下
  ctx.quadraticCurveTo(488 + x, 253 + y, 496 + x, 269 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  // // クロス右横
  // ctx.beginPath()
  // ctx.moveTo(533 + x, 328 + y) // 左上
  // ctx.quadraticCurveTo(530 + x, 331 + y, 533 + x, 337 + y) // 左下
  // ctx.quadraticCurveTo(551 + x, 358 + y, 554 + x, 358 + y) // 右下
  // ctx.quadraticCurveTo(560 + x, 356 + y, 560 + x, 354 + y) // 右上
  // ctx.quadraticCurveTo(540 + x, 330 + y, 533 + x, 328 + y) // 右上
  // ctx.fill()
  // // 断面ライン
  // ctx.moveTo(533 + x, 337 + y) // 下
  // ctx.quadraticCurveTo(548 + x, 347 + y, 553 + x, 358 + y) // 右下
  // ctx.stroke()
  // ctx.closePath()

  // クロス右縦
  ctx.beginPath()
  ctx.moveTo(568 + x, 342 + y) // 左上
  ctx.quadraticCurveTo(562 + x, 350 + y, 554 + x, 358 + y) // 左下
  ctx.quadraticCurveTo(559 + x, 365 + y, 561 + x, 363 + y) // 右下
  ctx.quadraticCurveTo(574 + x, 355 + y, 574 + x, 348 + y) // 右上
  ctx.quadraticCurveTo(568 + x, 342 + y, 568 + x, 342 + y) // 左上
  ctx.fill()
  // // 断面ライン
  ctx.moveTo(568 + x, 342 + y) // 下
  ctx.quadraticCurveTo(568 + x, 350 + y, 554 + x, 358 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // クロス親指連結部分
  ctx.beginPath()
  ctx.moveTo(573 + x, 348 + y) // 左上
  ctx.quadraticCurveTo(584 + x, 364 + y, 580 + x, 364 + y) // 左下
  ctx.quadraticCurveTo(595 + x, 364 + y, 590 + x, 364 + y) // 右下
  ctx.quadraticCurveTo(583 + x, 348 + y, 573 + x, 348 + y) // 右下
  ctx.fill()
  // 断面ライン
  ctx.moveTo(573 + x, 348 + y) // 左上
  ctx.quadraticCurveTo(584 + x, 354 + y, 580 + x, 364 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const crossLace = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number, scaleSize?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  if (scaleSize !== undefined) {
    ctx.scale(scaleSize, scaleSize)
  }
  // 左側
  ctx.beginPath()
  ctx.moveTo(510 + x, 319 + y) // 左上
  ctx.quadraticCurveTo(507 + x, 352 + y, 507 + x, 352 + y) // 左下
  ctx.quadraticCurveTo(512 + x, 355 + y, 516 + x, 353 + y) // 右下下
  ctx.quadraticCurveTo(522 + x, 325 + y, 519 + x, 315 + y) // 右上
  ctx.quadraticCurveTo(512 + x, 312 + y, 510 + x, 319 + y) // 左上
  ctx.fill()
  // 断面ライン
  ctx.moveTo(511 + x, 319 + y) // 左上
  ctx.quadraticCurveTo(513 + x, 332 + y, 507 + x, 350 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // 右側
  ctx.beginPath()
  // ctx.strokeStyle = 'blue' // '#282828'
  ctx.moveTo(494 + x, 334 + y) // 左上
  ctx.quadraticCurveTo(494 + x, 338 + y, 496 + x, 343 + y) // 左下
  ctx.quadraticCurveTo(525 + x, 337 + y, 533 + x, 337 + y) // 右下
  ctx.quadraticCurveTo(533 + x, 333 + y, 530 + x, 328 + y) // 右上
  ctx.quadraticCurveTo(510 + x, 328 + y, 494 + x, 334 + y) // 左上
  ctx.fill()
  // // 断面ライン
  ctx.moveTo(496 + x, 343 + y) // 下
  ctx.quadraticCurveTo(521 + x, 334 + y, 533 + x, 337 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  // クロス左横
  ctx.beginPath()
  ctx.moveTo(493 + x, 288 + y) // 左上
  ctx.quadraticCurveTo(486 + x, 288 + y, 486 + x, 293 + y) // 左下
  ctx.quadraticCurveTo(510 + x, 317 + y, 510 + x, 317 + y) // 右下
  ctx.quadraticCurveTo(513 + x, 311 + y, 519 + x, 314 + y) // 右上
  ctx.quadraticCurveTo(510 + x, 301 + y, 493 + x, 288 + y) // 右上
  ctx.fill()
  // 断面ライン
  ctx.moveTo(486 + x, 293 + y) // 下
  ctx.quadraticCurveTo(500 + x, 302 + y, 510 + x, 317 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  // クロス左縦
  ctx.beginPath()
  ctx.moveTo(497 + x, 263 + y) // 左上
  ctx.quadraticCurveTo(479 + x, 285 + y, 479 + x, 285 + y) // 左下
  ctx.quadraticCurveTo(484 + x, 292 + y, 486 + x, 290 + y) // 右下
  ctx.quadraticCurveTo(497 + x, 283 + y, 502 + x, 271 + y) // 右上
  ctx.quadraticCurveTo(499 + x, 263 + y, 497 + x, 263 + y) // 左上
  ctx.fill()
  // 断面ライン
  ctx.moveTo(498 + x, 264 + y) // 下
  ctx.quadraticCurveTo(493 + x, 275 + y, 480 + x, 286 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // クロス人差指連結部分
  ctx.beginPath()
  ctx.moveTo(475 + x, 244 + y) // 左上
  ctx.quadraticCurveTo(470 + x, 252 + y, 475 + x, 252 + y) // 左下
  ctx.quadraticCurveTo(488 + x, 258 + y, 495 + x, 269 + y) // 右下
  ctx.quadraticCurveTo(498 + x, 255 + y, 475 + x, 244 + y) // 右下
  ctx.fill()
  // 断面ライン
  ctx.moveTo(473 + x, 250 + y) // 下
  ctx.quadraticCurveTo(488 + x, 253 + y, 496 + x, 269 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  // クロス右横
  ctx.beginPath()
  ctx.moveTo(533 + x, 328 + y) // 左上
  ctx.quadraticCurveTo(530 + x, 331 + y, 533 + x, 337 + y) // 左下
  ctx.quadraticCurveTo(551 + x, 358 + y, 554 + x, 358 + y) // 右下
  ctx.quadraticCurveTo(560 + x, 356 + y, 560 + x, 354 + y) // 右上
  ctx.quadraticCurveTo(540 + x, 330 + y, 533 + x, 328 + y) // 右上
  ctx.fill()
  // 断面ライン
  ctx.moveTo(533 + x, 337 + y) // 下
  ctx.quadraticCurveTo(548 + x, 347 + y, 553 + x, 358 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  // クロス右縦
  ctx.beginPath()
  ctx.moveTo(568 + x, 342 + y) // 左上
  ctx.quadraticCurveTo(562 + x, 350 + y, 554 + x, 358 + y) // 左下
  ctx.quadraticCurveTo(559 + x, 365 + y, 561 + x, 363 + y) // 右下
  ctx.quadraticCurveTo(574 + x, 355 + y, 574 + x, 348 + y) // 右上
  ctx.quadraticCurveTo(568 + x, 342 + y, 568 + x, 342 + y) // 左上
  ctx.fill()
  // // 断面ライン
  ctx.moveTo(568 + x, 342 + y) // 下
  ctx.quadraticCurveTo(568 + x, 350 + y, 554 + x, 358 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // クロス親指連結部分
  ctx.beginPath()
  ctx.moveTo(573 + x, 348 + y) // 左上
  ctx.quadraticCurveTo(584 + x, 364 + y, 580 + x, 364 + y) // 左下
  ctx.quadraticCurveTo(595 + x, 364 + y, 590 + x, 364 + y) // 右下
  ctx.quadraticCurveTo(583 + x, 348 + y, 573 + x, 348 + y) // 右下
  ctx.fill()
  // 断面ライン
  ctx.moveTo(573 + x, 348 + y) // 左上
  ctx.quadraticCurveTo(584 + x, 354 + y, 580 + x, 364 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  if (numerator !== undefined) {
    ctx.restore()
  }
}
