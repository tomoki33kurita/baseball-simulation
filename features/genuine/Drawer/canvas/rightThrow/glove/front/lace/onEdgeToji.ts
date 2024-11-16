export const onBindingTojiThumb = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  numerator?: number
  // scaleSize?: number,
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(330 + x, 515 + y) // 左上
  ctx.quadraticCurveTo(335 + x, 531 + y, 313 + x, 552 + y) // 左下
  ctx.quadraticCurveTo(315 + x, 560 + y, 318 + x, 560 + y) // 右下
  ctx.quadraticCurveTo(343 + x, 548 + y, 338 + x, 520 + y) // 右上
  ctx.quadraticCurveTo(329 + x, 517 + y, 330 + x, 515 + y) // 左下
  ctx.fill()
  ctx.moveTo(330 + x, 515 + y) // 左上
  ctx.quadraticCurveTo(339 + x, 531 + y, 314 + x, 554 + y) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const onBindingTojiThumb1 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  if (scaleSize !== undefined) {
    ctx.scale(scaleSize, scaleSize)
  }
  ctx.beginPath()
  ctx.moveTo(285 + x, 515 + y) // 左上
  ctx.quadraticCurveTo(283 + x, 518 + y, 290 + x, 524 + y) // 左下
  ctx.quadraticCurveTo(315 + x, 528 + y, 330 + x, 523 + y) // 右下
  ctx.quadraticCurveTo(328 + x, 517 + y, 323 + x, 515 + y) // 右上
  ctx.quadraticCurveTo(301 + x, 517 + y, 285 + x, 515 + y) // 左上
  ctx.fill()
  ctx.moveTo(285 + x, 517 + y) // 左上
  ctx.quadraticCurveTo(302 + x, 520 + y, 325 + x, 517 + y) // 右上
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const onBindingTojiCenter = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  numerator?: number
  // scaleSize?: number,
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(356 + x, 539 + y) // 左上
  ctx.quadraticCurveTo(359 + x, 555 + y, 367 + x, 570 + y) // 左下
  ctx.quadraticCurveTo(371 + x, 575 + y, 384 + x, 572 + y) // 右下
  ctx.quadraticCurveTo(372 + x, 565 + y, 369 + x, 543 + y) // 右上
  ctx.quadraticCurveTo(360 + x, 534 + y, 355 + x, 539 + y) // 左下
  ctx.fill()
  ctx.moveTo(369 + x, 543 + y) // 右上
  ctx.quadraticCurveTo(371 + x, 575 + y, 384 + x, 572 + y) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const onBindingTojiCenter2 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  numerator?: number
  // scaleSize?: number,
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(404 + x, 552 + y) // 左上
  ctx.quadraticCurveTo(372 + x, 571 + y, 364 + x, 569 + y) // 左下
  ctx.quadraticCurveTo(366 + x, 575 + y, 377 + x, 576 + y) // 右下
  ctx.quadraticCurveTo(392 + x, 575 + y, 417 + x, 556 + y) // 右上
  ctx.quadraticCurveTo(415 + x, 552 + y, 404 + x, 552 + y) // 左上
  ctx.fill()
  ctx.moveTo(407 + x, 552 + y) // 左上
  ctx.quadraticCurveTo(377 + x, 573 + y, 366 + x, 572 + y) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const onBindingTojiLittle = (
  ctx: CanvasRenderingContext2D,
  color: string,
  x: number,
  y: number,
  numerator?: number
  // scaleSize?: number,
): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(600 + x, 516 + y) // 左上
  ctx.quadraticCurveTo(600 + x, 525 + y, 594 + x, 528 + y) // 左下
  ctx.quadraticCurveTo(620 + x, 535 + y, 633 + x, 534 + y) // 右下
  ctx.quadraticCurveTo(643 + x, 530 + y, 640 + x, 521 + y) // 右上
  ctx.quadraticCurveTo(632 + x, 524 + y, 600 + x, 516 + y) // 左下
  ctx.fill()
  ctx.moveTo(600 + x, 516 + y) // 左上
  ctx.quadraticCurveTo(634 + x, 530 + y, 640 + x, 521 + y) // 左下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const onBindingTojiLittle2 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(634, 446) // 左上
  ctx.quadraticCurveTo(630, 457, 630, 457) // 左下
  ctx.quadraticCurveTo(642, 479, 661, 466) // 右下
  ctx.quadraticCurveTo(665, 460, 665, 455) // 右上
  ctx.quadraticCurveTo(646, 465, 634, 446) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const onBindingTojiLittle3 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  ctx.moveTo(615 + x, 495 + y) // 左上
  ctx.quadraticCurveTo(609 + x, 501 + y, 609 + x, 506 + y) // 左下
  ctx.quadraticCurveTo(613 + x, 524 + y, 624 + x, 535 + y) // 右下
  ctx.quadraticCurveTo(632 + x, 537 + y, 630 + x, 528 + y) // 右上
  ctx.quadraticCurveTo(618 + x, 511 + y, 615 + x, 495 + y) // 左下
  ctx.fill()
  ctx.moveTo(614 + x, 498 + y) // 左上
  ctx.quadraticCurveTo(617 + x, 515 + y, 630 + x, 530 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const onBindingTojiLittle4 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  ctx.moveTo(615 + x, 495 + y) // 左上
  ctx.quadraticCurveTo(609 + x, 501 + y, 609 + x, 506 + y) // 左下
  ctx.quadraticCurveTo(613 + x, 524 + y, 629 + x, 539 + y) // 右下
  ctx.quadraticCurveTo(632 + x, 537 + y, 633 + x, 531 + y) // 右上
  ctx.quadraticCurveTo(618 + x, 511 + y, 615 + x, 495 + y) // 左下
  ctx.fill()
  ctx.moveTo(614 + x, 498 + y) // 左上
  ctx.quadraticCurveTo(616 + x, 515 + y, 633 + x, 533 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}
