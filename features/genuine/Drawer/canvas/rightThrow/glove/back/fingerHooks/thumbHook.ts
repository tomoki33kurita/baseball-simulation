export const thumbHook = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)

  // 紐＿先端＿上
  ctx.beginPath()
  ctx.moveTo(627 + x, 441 + y) // 左下
  ctx.quadraticCurveTo(632 + x, 445 + y, 637 + x, 455 + y) // 右下
  ctx.quadraticCurveTo(652 + x, 418 + y, 679 + x, 389 + y) // 右上
  ctx.quadraticCurveTo(679 + x, 374 + y, 669 + x, 382 + y) // 左上
  ctx.quadraticCurveTo(649 + x, 402 + y, 627 + x, 441 + y) // 左下
  ctx.fill()
  ctx.moveTo(677 + x, 389 + y) // 右上
  ctx.quadraticCurveTo(650 + x, 413 + y, 635 + x, 455 + y) // 右下
  ctx.stroke()
  ctx.closePath()
  // 紐＿先端＿下
  ctx.beginPath()
  ctx.moveTo(613 + x, 473 + y) // 左上
  ctx.quadraticCurveTo(609 + x, 493 + y, 592 + x, 537 + y) // 左下
  ctx.quadraticCurveTo(596 + x, 545 + y, 602 + x, 542 + y) // 右下
  ctx.quadraticCurveTo(615 + x, 500 + y, 625 + x, 472 + y) // 右上
  ctx.quadraticCurveTo(613 + x, 473 + y, 613 + x, 473 + y) // 左上
  ctx.fill()
  ctx.moveTo(619 + x, 475 + y) // 上
  ctx.quadraticCurveTo(617 + x, 486 + y, 599 + x, 542 + y) // 下
  ctx.stroke()
  ctx.closePath()

  // 結び目＿中央左
  ctx.beginPath()
  ctx.moveTo(624 + x, 440 + y) // 左上
  ctx.quadraticCurveTo(618 + x, 450 + y, 616 + x, 457 + y) // 左下
  ctx.quadraticCurveTo(621 + x, 465 + y, 625 + x, 464 + y) // 右下
  ctx.quadraticCurveTo(632 + x, 455 + y, 632 + x, 455 + y) // 右上
  ctx.quadraticCurveTo(630 + x, 449 + y, 624 + x, 440 + y) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 結び目＿上
  ctx.beginPath()
  ctx.moveTo(621 + x, 433 + y) // 左上
  ctx.quadraticCurveTo(620 + x, 436 + y, 620 + x, 438 + y) // 左下
  ctx.quadraticCurveTo(632 + x, 451 + y, 635 + x, 456 + y) // 右下
  ctx.quadraticCurveTo(636 + x, 443 + y, 621 + x, 433 + y) // 左上
  ctx.fill()
  ctx.moveTo(621 + x, 437 + y) // 左上
  ctx.quadraticCurveTo(633 + x, 446 + y, 633 + x, 459 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // // 結び目＿中央右
  ctx.beginPath()
  ctx.moveTo(638 + x, 449 + y) // 左上
  ctx.quadraticCurveTo(623 + x, 463 + y, 623 + x, 465 + y) // 左下
  ctx.quadraticCurveTo(636 + x, 460 + y, 636 + x, 464 + y) // 右下
  ctx.quadraticCurveTo(640 + x, 447 + y, 638 + x, 449 + y) // 左上
  ctx.fill()
  ctx.moveTo(638 + x, 452 + y) // 左上
  ctx.quadraticCurveTo(635 + x, 457 + y, 627 + x, 463 + y) // 左下
  ctx.stroke()
  ctx.closePath()

  // 結び目＿左下
  ctx.beginPath()
  ctx.moveTo(614 + x, 456 + y) // 左上
  ctx.quadraticCurveTo(615 + x, 463 + y, 613 + x, 473 + y) // 左下
  ctx.quadraticCurveTo(618 + x, 478 + y, 621 + x, 475 + y) // 右下
  ctx.quadraticCurveTo(636 + x, 463 + y, 636 + x, 463 + y) // 右上
  ctx.quadraticCurveTo(619 + x, 466 + y, 614 + x, 456 + y) // 左上
  ctx.fill()
  ctx.moveTo(615 + x, 459 + y) // 左上
  ctx.quadraticCurveTo(619 + x, 469 + y, 634 + x, 464 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}
