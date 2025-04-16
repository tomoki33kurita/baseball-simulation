export const indexFingerHole = (ctx: CanvasRenderingContext2D, liningsColor: string, edgeColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = liningsColor

  // 手口
  ctx.beginPath()
  ctx.moveTo(410, 360) // 上
  ctx.quadraticCurveTo(394, 359, 388, 369) //左
  ctx.quadraticCurveTo(390, 465, 405, 476) //左下
  ctx.quadraticCurveTo(411, 484, 418, 475) //右下
  ctx.quadraticCurveTo(431, 427, 425, 365) //右
  ctx.quadraticCurveTo(418, 360, 410, 360) //上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  laceOfAroundFingerHole1(ctx, edgeColor, -3, 7, 0) // 真下
  laceOfAroundFingerHole1(ctx, edgeColor, 185, -313, 35) // 真下＿左
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 0, 0, 0)
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 20, -40, 3)
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 30, -75, 5)
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 94, -188, 17)
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 102, -228, 20)
  laceOfAroundFingerHole1(ctx, edgeColor, -182, -1, -20) //
  laceOfAroundFingerHole1(ctx, edgeColor, -20, -123, 0) // 真上
  laceOfAroundFingerHole1(ctx, edgeColor, 75, -242, 15) // 真上＿右
  laceOfAroundFingerHole1(ctx, edgeColor, 140, -420, 35) //
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 148, -248, 20)
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 153, -232, 20)
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 159, -214, 20)
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 203, -296, 30)
  laceOfAroundFingerHoleWide1(ctx, edgeColor, 210, -281, 30)
  laceOfAroundFingerHole1(ctx, edgeColor, -82, 64, -10) // 真下
}

export const middleFingerHole = (ctx: CanvasRenderingContext2D, liningsColor: string, bindingColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'

  ctx.save()
  ctx.rotate((-5 * Math.PI) / 180)
  ctx.fillStyle = liningsColor
  ctx.beginPath()
  ctx.moveTo(310, 390) // 上
  ctx.quadraticCurveTo(295, 389, 288, 399) //左
  ctx.quadraticCurveTo(290, 495, 305, 506) //左下
  ctx.quadraticCurveTo(310, 514, 318, 505) //右下
  ctx.quadraticCurveTo(330, 457, 325, 395) //右
  ctx.quadraticCurveTo(318, 390, 310, 390) //上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.restore()

  laceOfAroundFingerHole1(ctx, bindingColor, -65, 7, 0) // 真下
  laceOfAroundFingerHole1(ctx, bindingColor, 134, -278, 35) // 真下＿左
  laceOfAroundFingerHoleWide1(ctx, bindingColor, -60, 0, 0)
  laceOfAroundFingerHoleWide1(ctx, bindingColor, -41, -40, 3)
  laceOfAroundFingerHoleWide1(ctx, bindingColor, -32, -72, 5)
  laceOfAroundFingerHoleWide1(ctx, bindingColor, 31, -173, 17)
  laceOfAroundFingerHoleWide1(ctx, bindingColor, 38, -210, 20)
  laceOfAroundFingerHole1(ctx, bindingColor, -242, -23, -20) //
  laceOfAroundFingerHole1(ctx, bindingColor, -84, -120, 0) // 真上
  laceOfAroundFingerHole1(ctx, bindingColor, 13, -223, 15) // 真上＿右
  laceOfAroundFingerHole1(ctx, bindingColor, 89, -381, 35) //
  laceOfAroundFingerHoleWide1(ctx, bindingColor, 88, -218, 20)
  laceOfAroundFingerHoleWide1(ctx, bindingColor, 97, -200, 20)
  laceOfAroundFingerHoleWide1(ctx, bindingColor, 104, -182, 20)
  laceOfAroundFingerHoleWide1(ctx, bindingColor, 111, -164, 20)
  laceOfAroundFingerHoleWide1(ctx, bindingColor, 162, -244, 30)
  laceOfAroundFingerHole1(ctx, bindingColor, -142, 59, -10) // 真下
}

const laceOfAroundFingerHole1 = (ctx: CanvasRenderingContext2D, edgeColor: string, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = edgeColor
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  // 手口
  ctx.beginPath()
  ctx.moveTo(412 + x, 469 + y) // 左上
  ctx.quadraticCurveTo(417 + x, 481 + y, 417 + x, 486 + y) //左下
  ctx.quadraticCurveTo(420 + x, 488 + y, 427 + x, 484 + y) //右下
  ctx.quadraticCurveTo(422 + x, 467 + y, 422 + x, 467 + y) //右上
  ctx.quadraticCurveTo(412 + x, 466 + y, 412 + x, 469 + y) //左上
  ctx.fill()
  ctx.moveTo(413 + x, 469 + y) // 左上
  ctx.quadraticCurveTo(418 + x, 475 + y, 418 + x, 486 + y) //左下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}

const laceOfAroundFingerHoleWide1 = (ctx: CanvasRenderingContext2D, edgeColor: string, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = edgeColor
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  // 手口
  ctx.beginPath()
  ctx.moveTo(383 + x, 463 + y) // 左上
  ctx.quadraticCurveTo(382 + x, 470 + y, 386 + x, 472 + y) //左下
  ctx.quadraticCurveTo(398 + x, 461 + y, 398 + x, 461 + y) //右下
  ctx.quadraticCurveTo(399 + x, 456 + y, 396 + x, 450 + y) //右上
  ctx.quadraticCurveTo(383 + x, 463 + y, 383 + x, 463 + y) //左上
  ctx.fill()
  ctx.moveTo(383 + x, 465 + y) // 左上
  ctx.quadraticCurveTo(390 + x, 460 + y, 396 + x, 452 + y) //左下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}
