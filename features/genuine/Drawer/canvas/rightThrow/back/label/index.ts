import { GenuineState } from '@/features/genuine/types'

export const fiveLabel = (ctx: CanvasRenderingContext2D, state: GenuineState, x: number, y: number, rotate: number, scaleSize: number): void => {
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.scale(scaleSize, scaleSize)

  const label = { core: '#eeeeee', binding: '#eeeeee', secondary: '#eeeeee' }

  parts1(ctx, label.binding, label.core, x, y)
  parts2(ctx, label.binding, label.secondary, x, y)
  parts3(ctx, label.binding, label.core, x, y)
  parts4(ctx, label.binding, label.secondary, x, y)
  ctx.restore()
}

// 左上のパーツ
const parts1 = (ctx: CanvasRenderingContext2D, bindingColor: string, coreColor: string, x: number, y: number): void => {
  ctx.lineWidth = 3.2
  ctx.strokeStyle = bindingColor
  ctx.beginPath()
  ctx.fillStyle = coreColor
  ctx.moveTo(523 + x, 454 + y) // 下
  ctx.quadraticCurveTo(509 + x, 492 + y, 509 + x, 492 + y)
  ctx.quadraticCurveTo(523 + x, 485 + y, 523 + x, 485 + y)
  ctx.quadraticCurveTo(525 + x, 480 + y, 525 + x, 480 + y)
  ctx.quadraticCurveTo(554 + x, 470 + y, 554 + x, 470 + y)
  ctx.quadraticCurveTo(560 + x, 461 + y, 558 + x, 455 + y)
  ctx.quadraticCurveTo(587 + x, 444 + y, 586 + x, 444 + y)
  ctx.quadraticCurveTo(592 + x, 434 + y, 586 + x, 429 + y)
  ctx.quadraticCurveTo(523 + x, 454 + y, 523 + x, 454 + y)
  ctx.fill()
  ctx.moveTo(528 + x, 467 + y)
  ctx.quadraticCurveTo(558 + x, 455 + y, 558 + x, 455 + y)
  ctx.stroke()
  ctx.closePath()
}

// 左上2番目のパーツ
const parts2 = (ctx: CanvasRenderingContext2D, bindingColor: string, coreColor: string, x: number, y: number): void => {
  ctx.lineWidth = 3.2
  ctx.strokeStyle = bindingColor
  ctx.beginPath()
  ctx.fillStyle = coreColor
  ctx.moveTo(510 + x, 492 + y) //
  ctx.quadraticCurveTo(504 + x, 505 + y, 504 + x, 505 + y)
  ctx.quadraticCurveTo(519 + x, 501 + y, 519 + x, 501 + y)
  ctx.quadraticCurveTo(524 + x, 488 + y, 524 + x, 488 + y)
  ctx.quadraticCurveTo(510 + x, 492 + y, 510 + x, 492 + y)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

// 左3番目のパーツ
const parts3 = (ctx: CanvasRenderingContext2D, bindingColor: string, coreColor: string, x: number, y: number): void => {
  ctx.lineWidth = 3.2
  ctx.strokeStyle = bindingColor
  ctx.beginPath()
  ctx.fillStyle = coreColor
  ctx.moveTo(508 + x, 506 + y) //
  ctx.quadraticCurveTo(500 + x, 522 + y, 502 + x, 524 + y)
  ctx.quadraticCurveTo(525 + x, 512 + y, 525 + x, 512 + y)
  ctx.quadraticCurveTo(529 + x, 497 + y, 529 + x, 497 + y)
  ctx.quadraticCurveTo(508 + x, 506 + y, 508 + x, 506 + y)
  // ctx.quadraticCurveTo()
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

// 右のパーツ
const parts4 = (ctx: CanvasRenderingContext2D, bindingColor: string, coreColor: string, x: number, y: number): void => {
  ctx.lineWidth = 3.2
  ctx.strokeStyle = bindingColor
  ctx.beginPath()
  ctx.fillStyle = coreColor
  ctx.moveTo(529 + x, 497 + y) // 左上
  ctx.quadraticCurveTo(525 + x, 512 + y, 525 + x, 512 + y) // 左下
  ctx.quadraticCurveTo(568 + x, 489 + y, 568 + x, 489 + y)
  ctx.quadraticCurveTo(565 + x, 498 + y, 565 + x, 498 + y)
  ctx.quadraticCurveTo(533 + x, 515 + y, 533 + x, 515 + y)
  ctx.quadraticCurveTo(539 + x, 530 + y, 562 + x, 515 + y)
  ctx.quadraticCurveTo(559 + x, 524 + y, 559 + x, 524 + y) // 内側右下
  ctx.quadraticCurveTo(492 + x, 556 + y, 492 + x, 556 + y)
  ctx.quadraticCurveTo(478 + x, 562 + y, 481 + x, 579 + y)
  ctx.quadraticCurveTo(567 + x, 534 + y, 567 + x, 534 + y)
  ctx.quadraticCurveTo(582 + x, 469 + y, 582 + x, 469 + y)
  ctx.quadraticCurveTo(529 + x, 497 + y, 529 + x, 497 + y)
  // ctx.quadraticCurveTo()
  // ctx.quadraticCurveTo()
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
