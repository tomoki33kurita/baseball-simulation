const hatakeyamaLabelCore = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  // ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(385 + x, 485 + y) //
  ctx.lineTo(358 + x, 470 + y) //
  ctx.quadraticCurveTo(347 + x, 467 + y, 349 + x, 482 + y) //
  ctx.lineTo(356 + x, 508 + y) //
  ctx.quadraticCurveTo(358 + x, 516 + y, 365 + x, 515 + y) //
  ctx.lineTo(395 + x, 515 + y) //
  ctx.quadraticCurveTo(400 + x, 516 + y, 403 + x, 510 + y) //
  ctx.lineTo(409 + x, 499 + y) //
  ctx.lineTo(427 + x, 499 + y) //
  ctx.lineTo(414 + x, 526 + y) //
  ctx.lineTo(437 + x, 526 + y) //
  ctx.quadraticCurveTo(446 + x, 525 + y, 449 + x, 515 + y) //
  ctx.lineTo(460 + x, 495 + y) //
  ctx.lineTo(488 + x, 507 + y) //
  ctx.quadraticCurveTo(502 + x, 508 + y, 501 + x, 496 + y) //
  ctx.lineTo(494 + x, 471 + y) //
  ctx.quadraticCurveTo(492 + x, 460 + y, 483 + x, 461 + y) //
  ctx.lineTo(452 + x, 461 + y) //
  ctx.quadraticCurveTo(441 + x, 463 + y, 440 + x, 472 + y) //
  ctx.lineTo(436 + x, 481 + y) //
  ctx.lineTo(418 + x, 481 + y) //
  ctx.lineTo(431 + x, 452 + y) //
  ctx.lineTo(409 + x, 452 + y) //
  ctx.quadraticCurveTo(399 + x, 453 + y, 395 + x, 463 + y) //
  ctx.lineTo(385 + x, 485 + y) //
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

const labelInBlack = (ctx: CanvasRenderingContext2D, x: number, y: number): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  // 左側
  ctx.beginPath()
  ctx.moveTo(370 + x, 490 + y) //左上
  ctx.lineTo(374 + x, 505 + y) //左下
  ctx.lineTo(375 + x, 505 + y) //右下
  ctx.lineTo(381 + x, 493 + y) //右上
  ctx.lineTo(369 + x, 490 + y) //左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // 右側
  ctx.beginPath()
  ctx.moveTo(472 + x, 473 + y) // 上
  ctx.lineTo(466 + x, 485 + y) // 左下
  ctx.lineTo(477 + x, 486 + y) // 右下
  ctx.lineTo(472 + x, 473 + y) // 上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

const labelBaseBlack = (ctx: CanvasRenderingContext2D, x: number, y: number): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.beginPath()
  ctx.moveTo(344 + x, 483 + y) // 左上
  ctx.lineTo(353 + x, 516 + y) // 左下
  ctx.quadraticCurveTo(355 + x, 522 + y, 365 + x, 524 + y) // 左下カーブ
  ctx.lineTo(396 + x, 525 + y) // 左下
  ctx.quadraticCurveTo(406 + x, 523 + y, 410 + x, 513 + y)
  ctx.lineTo(414 + x, 506 + y)
  ctx.lineTo(417 + x, 506 + y)
  ctx.lineTo(407 + x, 524 + y)
  ctx.quadraticCurveTo(406 + x, 531 + y, 413 + x, 533 + y)
  ctx.lineTo(438 + x, 534 + y)
  ctx.quadraticCurveTo(450 + x, 533 + y, 452 + x, 525 + y)
  ctx.lineTo(463 + x, 501 + y)
  ctx.lineTo(487 + x, 513 + y)
  ctx.quadraticCurveTo(508 + x, 516 + y, 508 + x, 495 + y) // 右下カーブ
  ctx.lineTo(497 + x, 462 + y)
  ctx.quadraticCurveTo(493 + x, 454 + y, 484 + x, 454 + y) // 右上カーブ
  ctx.lineTo(451 + x, 454 + y)
  ctx.quadraticCurveTo(437 + x, 455 + y, 432 + x, 475 + y)
  ctx.lineTo(429 + x, 475 + y)
  ctx.lineTo(439 + x, 456 + y)
  ctx.quadraticCurveTo(440 + x, 447 + y, 431 + x, 445 + y)
  ctx.lineTo(410 + x, 445 + y)
  ctx.quadraticCurveTo(400 + x, 445 + y, 395 + x, 452 + y)
  ctx.lineTo(385 + x, 475 + y)
  ctx.lineTo(363 + x, 463 + y)
  ctx.quadraticCurveTo(340 + x, 460 + y, 344 + x, 483 + y)

  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}

// ラベル上の輪郭ライン
const lineOnLine = (ctx: CanvasRenderingContext2D, x: number, y: number): void => {
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#red'
  ctx.beginPath()
  ctx.moveTo(344 + x, 483 + y) // 左上
  ctx.lineTo(353 + x, 516 + y) // 左下
  // ctx.quadraticCurveTo(355, 522, 365, 524) // 左下カーブ
  ctx.stroke()
  ctx.closePath()
}

export const hatakeyamaLabel = (ctx: CanvasRenderingContext2D, labelColor: string, x: number, y: number, numerator: number, scaleSize = 1) => {
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.scale(scaleSize, scaleSize)

  labelBaseBlack(ctx, x, y) // ラベルのベースブラック部分
  hatakeyamaLabelCore(ctx, labelColor, x, y) // ラベルの黄色部分
  labelInBlack(ctx, x, y) // ラベルの内側の黒い部分
  lineOnLine(ctx, x, y)
  ctx.restore()
}
