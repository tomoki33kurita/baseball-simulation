export const littleHook = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number, scaleSize: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 紐＿先端＿上
  ctx.beginPath()
  ctx.moveTo(218 + x, 280 + y) // 左上
  ctx.quadraticCurveTo(207 + x, 348 + y, 200 + x, 412 + y) // 左下
  ctx.quadraticCurveTo(208 + x, 411 + y, 208 + x, 411 + y) // 右下
  ctx.quadraticCurveTo(213 + x, 347 + y, 213 + x, 347 + y) //
  ctx.quadraticCurveTo(223 + x, 313 + y, 223 + x, 280 + y) //
  ctx.quadraticCurveTo(218 + x, 280 + y, 218 + x, 280 + y) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿上
  ctx.beginPath()
  ctx.moveTo(198 + x, 413 + y) // 左上
  ctx.quadraticCurveTo(195 + x, 424 + y, 185 + x, 434 + y) //
  ctx.quadraticCurveTo(185 + x, 439 + y, 185 + x, 439 + y) // 左下
  ctx.quadraticCurveTo(202 + x, 431 + y, 226 + x, 437 + y) // 右下
  ctx.quadraticCurveTo(214 + x, 421 + y, 214 + x, 414 + y) // 右上
  ctx.quadraticCurveTo(204 + x, 407 + y, 198 + x, 413 + y) // 左上
  ctx.fill()
  ctx.moveTo(184 + x, 435 + y) // 左上
  ctx.quadraticCurveTo(202 + x, 428 + y, 225 + x, 434 + y) //
  ctx.stroke()
  ctx.closePath()

  // 結び目＿左下
  ctx.beginPath()
  ctx.moveTo(185 + x, 440 + y) // 左上
  ctx.quadraticCurveTo(187 + x, 448 + y, 191 + x, 449 + y) //
  ctx.quadraticCurveTo(198 + x, 452 + y, 206 + x, 466 + y) // 右下
  ctx.quadraticCurveTo(199 + x, 449 + y, 203 + x, 436 + y) // 右上
  ctx.quadraticCurveTo(191 + x, 434 + y, 185 + x, 440 + y) // 右上
  ctx.fill()
  ctx.moveTo(200 + x, 436 + y) // 上
  ctx.quadraticCurveTo(197 + x, 447 + y, 200 + x, 458 + y) // 下
  ctx.stroke()
  ctx.closePath()

  // 結び目＿右下
  ctx.beginPath()
  ctx.moveTo(202 + x, 436 + y) // 左上
  ctx.quadraticCurveTo(201 + x, 446 + y, 201 + x, 446 + y) // 左下
  ctx.quadraticCurveTo(215 + x, 463 + y, 223 + x, 461 + y) // 右下
  ctx.quadraticCurveTo(226 + x, 461 + y, 226 + x, 456 + y) //
  ctx.quadraticCurveTo(228 + x, 446 + y, 225 + x, 437 + y) // 右上
  ctx.quadraticCurveTo(205 + x, 432 + y, 202 + x, 436 + y) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 結び目＿付け根＿下
  ctx.beginPath()
  ctx.moveTo(201 + x, 449 + y) // 左上
  ctx.quadraticCurveTo(203 + x, 456 + y, 203 + x, 456 + y) // 左下
  ctx.quadraticCurveTo(211 + x, 468 + y, 229 + x, 469 + y) // 右下
  ctx.quadraticCurveTo(225 + x, 463 + y, 225 + x, 463 + y) // 右上
  ctx.quadraticCurveTo(212 + x, 462 + y, 201 + x, 449 + y) // 右上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 紐＿先端＿下
  ctx.beginPath()
  ctx.moveTo(203 + x, 459 + y) // 左上
  ctx.quadraticCurveTo(223 + x, 504 + y, 236 + x, 573 + y) // 左下
  ctx.quadraticCurveTo(241 + x, 576 + y, 241 + x, 576 + y) // 左下
  ctx.quadraticCurveTo(248 + x, 545 + y, 232 + x, 504 + y) //
  ctx.quadraticCurveTo(225 + x, 489 + y, 221 + x, 468 + y) //
  ctx.quadraticCurveTo(214 + x, 470 + y, 203 + x, 459 + y) //
  ctx.fill()
  ctx.moveTo(210 + x, 466 + y) // 上
  ctx.quadraticCurveTo(230 + x, 510 + y, 238 + x, 574 + y) // 下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}
