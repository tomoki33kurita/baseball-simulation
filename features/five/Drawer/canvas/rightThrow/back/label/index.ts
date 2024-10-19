import { FIVE_LABEL_COLORS } from '@/features/five/Constants/color'
import { FiveState } from '@/features/five/types'
import { getOrderType } from '@/features/five/Components/Setters/logic'

export const fiveLabel = (ctx: CanvasRenderingContext2D, state: FiveState, x: number, y: number, rotate: number, scaleSize: number): void => {
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.scale(scaleSize, scaleSize)

  const { isBasicOrder, isBasicWithEmbroideryOrder } = getOrderType(state.orderType)
  const isBasic = isBasicOrder || isBasicWithEmbroideryOrder
  const labelValue = isBasic ? state.baseModel.basicColors.fiveLabel.value : state.fiveLabel.value
  const label = FIVE_LABEL_COLORS.find((o) => o.value === labelValue) || { core: '#eeeeee', binding: '#eeeeee', secondary: '#eeeeee' }

  if (isBasicOrder || isBasicWithEmbroideryOrder) {
    labelBaseLeather(ctx, state.baseModel.basicColors.leather.color, state.baseModel.basicColors.stitch.color, x, y)
    parts1(ctx, label.binding, label.core, x, y)
    parts2(ctx, label.binding, label.secondary, x, y)
    parts3(ctx, label.binding, label.core, x, y)
    parts4(ctx, label.binding, label.secondary, x, y)
    ctx.restore()
    return
  }
  labelBaseLeather(ctx, state.labelStand.color, state.stitch.color, x, y)
  parts1(ctx, label.binding, label.core, x, y)
  parts2(ctx, label.binding, label.secondary, x, y)
  parts3(ctx, label.binding, label.core, x, y)
  parts4(ctx, label.binding, label.secondary, x, y)
  ctx.restore()
}

// ベースになる黒地部分
const labelBaseLeather = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#140C09'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(492 + x, 447 + y)
  ctx.quadraticCurveTo(511 + x, 451 + y, 511 + x, 451 + y)
  ctx.quadraticCurveTo(472 + x, 545 + y, 472 + x, 545 + y)
  ctx.quadraticCurveTo(520 + x, 527 + y, 520 + x, 527 + y)
  ctx.quadraticCurveTo(518 + x, 534 + y, 518 + x, 534 + y)
  ctx.quadraticCurveTo(469 + x, 547 + y, 432 + x, 587 + y)
  ctx.quadraticCurveTo(483 + x, 587 + y, 483 + x, 587 + y)
  ctx.quadraticCurveTo(573 + x, 540 + y, 573 + x, 540 + y)
  ctx.quadraticCurveTo(590 + x, 457 + y, 590 + x, 457 + y)
  ctx.quadraticCurveTo(563 + x, 468 + y, 563 + x, 468 + y)
  ctx.quadraticCurveTo(565 + x, 461 + y, 565 + x, 461 + y)
  ctx.quadraticCurveTo(589 + x, 453 + y, 589 + x, 453 + y)
  ctx.quadraticCurveTo(612 + x, 404 + y, 612 + x, 404 + y)
  ctx.quadraticCurveTo(582 + x, 421 + y, 536 + x, 436 + y)
  ctx.quadraticCurveTo(499 + x, 434 + y, 499 + x, 434 + y)
  ctx.quadraticCurveTo(492 + x, 447 + y, 492 + x, 447 + y)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.lineWidth = 1.3
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 手口
  ctx.moveTo(498 + x, 443 + y)
  ctx.quadraticCurveTo(516 + x, 447 + y, 516 + x, 447 + y)
  ctx.quadraticCurveTo(483 + x, 534 + y, 483 + x, 534 + y)
  ctx.quadraticCurveTo(527 + x, 519 + y, 527 + x, 519 + y)
  ctx.quadraticCurveTo(525 + x, 535 + y, 525 + x, 535 + y)
  ctx.quadraticCurveTo(476 + x, 549 + y, 444 + x, 585 + y)
  ctx.quadraticCurveTo(483 + x, 585 + y, 483 + x, 585 + y)
  ctx.quadraticCurveTo(570 + x, 538 + y, 570 + x, 538 + y)
  ctx.quadraticCurveTo(585 + x, 462 + y, 585 + x, 462 + y)
  ctx.quadraticCurveTo(557 + x, 473 + y, 557 + x, 473 + y)
  ctx.quadraticCurveTo(562 + x, 456 + y, 562 + x, 456 + y)
  ctx.quadraticCurveTo(587 + x, 448 + y, 587 + x, 448 + y)
  ctx.quadraticCurveTo(605 + x, 409 + y, 605 + x, 412 + y)
  ctx.quadraticCurveTo(565 + x, 434 + y, 536 + x, 440 + y)
  ctx.quadraticCurveTo(515 + x, 445 + y, 498 + x, 438 + y)
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.setLineDash([])
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.closePath()

  ctx.closePath()
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
