export const regularBackStyleWristBelt = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 薬指
  ctx.beginPath()
  ctx.moveTo(313 + x, 545 + y) // 左上
  ctx.quadraticCurveTo(314 + x, 554 + y, 326 + x, 569 + y) // 左下
  ctx.quadraticCurveTo(354 + x, 571 + y, 351 + x, 563 + y) // 右下
  ctx.quadraticCurveTo(346 + x, 550 + y, 339 + x, 540 + y) // 右上
  ctx.quadraticCurveTo(313 + x, 545 + y, 313 + x, 545 + y) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(313 + x, 545 + y) // 左上
  ctx.quadraticCurveTo(323 + x, 548 + y, 340 + x, 542 + y) // 右下
  ctx.stroke()
  ctx.closePath()

  // 中指
  ctx.beginPath()
  ctx.moveTo(363 + x, 543 + y) // 左上
  ctx.quadraticCurveTo(373 + x, 566 + y, 373 + x, 566 + y) // 左下
  ctx.quadraticCurveTo(388 + x, 575 + y, 421 + x, 568 + y) // 右下
  ctx.quadraticCurveTo(412 + x, 558 + y, 409 + x, 542 + y) // 右上
  ctx.quadraticCurveTo(363 + x, 543 + y, 363 + x, 543 + y) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(363 + x, 544 + y) // 左上
  ctx.quadraticCurveTo(383 + x, 548 + y, 409 + x, 544 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // ウェブ下1
  ctx.beginPath()
  ctx.moveTo(448 + x, 539 + y) // 左上
  ctx.quadraticCurveTo(446 + x, 552 + y, 453 + x, 567 + y) // 左下
  ctx.quadraticCurveTo(498 + x, 565 + y, 498 + x, 565 + y) // 右下
  ctx.quadraticCurveTo(507 + x, 545 + y, 496 + x, 534 + y) // 右上
  ctx.quadraticCurveTo(448 + x, 539 + y, 448 + x, 539 + y) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(448 + x, 541 + y) // 左上
  ctx.quadraticCurveTo(476 + x, 541 + y, 497 + x, 536 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // ウェブ下2
  ctx.beginPath()
  ctx.moveTo(506 + x, 529 + y) // 左上
  ctx.quadraticCurveTo(510 + x, 559 + y, 510 + x, 559 + y) // 左下
  ctx.quadraticCurveTo(531 + x, 538 + y, 560 + x, 532 + y) // 右下
  ctx.quadraticCurveTo(583 + x, 511 + y, 565 + x, 504 + y) // 右上
  ctx.quadraticCurveTo(523 + x, 515 + y, 506 + x, 529 + y) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(506 + x, 531 + y) // 左上
  ctx.quadraticCurveTo(526 + x, 517 + y, 567 + x, 505 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  metalParts(ctx, x, y)

  // ウェブ下3
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(499 + x, 535 + y) // 左上
  ctx.quadraticCurveTo(504 + x, 546 + y, 500 + x, 561 + y) // 左下
  ctx.quadraticCurveTo(510 + x, 562 + y, 510 + x, 562 + y) // 右下
  ctx.quadraticCurveTo(518 + x, 544 + y, 511 + x, 535 + y) // 右上
  ctx.quadraticCurveTo(499 + x, 535 + y, 499 + x, 535 + y) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(500 + x, 537 + y) // 左上
  ctx.quadraticCurveTo(505 + x, 540 + y, 512 + x, 537 + y) // 左下
  ctx.stroke()
  ctx.closePath()
}

const metalParts = (ctx: CanvasRenderingContext2D, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = 'silver'
  // 右部分
  ctx.beginPath()
  ctx.moveTo(499 + x, 527 + y) // 左＿左
  ctx.quadraticCurveTo(509 + x, 560 + y, 509 + x, 560 + y) // 左下
  ctx.quadraticCurveTo(523 + x, 551 + y, 519 + x, 540 + y) // 右＿中央
  ctx.quadraticCurveTo(515 + x, 526 + y, 499 + x, 527 + y) // 左上＿左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 左上部分
  ctx.beginPath()
  ctx.moveTo(488 + x, 535 + y) // 左上＿左
  ctx.quadraticCurveTo(493 + x, 536 + y, 493 + x, 535 + y) // 左上＿右
  ctx.quadraticCurveTo(501 + x, 534 + y, 499 + x, 535 + y) // 右上＿左
  ctx.quadraticCurveTo(505 + x, 534 + y, 506 + x, 536 + y) // 右上＿右
  ctx.quadraticCurveTo(500 + x, 524 + y, 489 + x, 533 + y) // 左上＿左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 左下部分
  ctx.beginPath()
  ctx.moveTo(486 + x, 566 + y) // 左＿左
  ctx.quadraticCurveTo(495 + x, 573 + y, 507 + x, 562 + y) // 右上＿右
  ctx.quadraticCurveTo(500 + x, 561 + y, 500 + x, 561 + y) // 右上＿左
  ctx.quadraticCurveTo(495 + x, 567 + y, 486 + x, 566 + y) // 左上＿左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 金属＿丸部分
  ctx.beginPath()
  ctx.moveTo(469 + x, 552 + y)
  ctx.arc(469 + x, 554 + y, 9, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
