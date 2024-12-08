import { webKnots } from '@/util/canvas/lace/webKnots'

export const crossLaceForBackOfHand1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.moveTo(235, 464) // 左下
  ctx.quadraticCurveTo(252, 474, 272, 474) // 右下
  ctx.quadraticCurveTo(280, 468, 277, 465) // 右上
  ctx.quadraticCurveTo(250, 460, 238, 454) // 左上
  ctx.quadraticCurveTo(232, 459, 235, 464) // 左下
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.moveTo(238, 454)
  ctx.quadraticCurveTo(250, 465, 277, 467) // 右上
  // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.moveTo(251, 440) // 左上
  ctx.quadraticCurveTo(246, 466, 258, 484) // 左下
  ctx.quadraticCurveTo(262, 488, 266, 479) // 右下
  ctx.quadraticCurveTo(257, 460, 259, 433) // 右上
  ctx.quadraticCurveTo(251, 437, 251, 440) // 左上
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.moveTo(257, 433)
  ctx.quadraticCurveTo(254, 460, 264, 479) // 右上
  // // ctx.quadraticCurveTo()
  ctx.stroke()
  ctx.closePath()
}

export const crossLaceForBackOfHand2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.moveTo(251 + x, 440 + y) // 左上
  ctx.quadraticCurveTo(246 + x, 466 + y, 258 + x, 484 + y) // 左下
  ctx.quadraticCurveTo(262 + x, 488 + y, 266 + x, 479 + y) // 右下
  ctx.quadraticCurveTo(257 + x, 460 + y, 259 + x, 433 + y) // 右上
  ctx.quadraticCurveTo(251 + x, 437 + y, 251 + x, 440 + y) // 左上
  ctx.fill()
  ctx.moveTo(257 + x, 433 + y)
  ctx.quadraticCurveTo(254 + x, 460 + y, 264 + x, 479 + y) // 右上
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.moveTo(235 + x, 464 + y) // 左下
  ctx.quadraticCurveTo(252 + x, 474 + y, 272 + x, 474 + y) // 右下
  ctx.quadraticCurveTo(280 + x, 468 + y, 277 + x, 465 + y) // 右上
  ctx.quadraticCurveTo(250 + x, 460 + y, 238 + x, 454 + y) // 左上
  ctx.quadraticCurveTo(232 + x, 459 + y, 235 + x, 464 + y) // 左下
  ctx.fill()
  ctx.moveTo(238 + x, 454 + y)
  ctx.quadraticCurveTo(250 + x, 465 + y, 277 + x, 467 + y) // 右上
  ctx.stroke()
  ctx.closePath()
}

export const crossLaceForThumb = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, rotate: number): void => {
  ctx.save()
  ctx.rotate((rotate * Math.PI) / 180)
  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.moveTo(248 + x, 437 + y) // 左上
  ctx.quadraticCurveTo(246 + x, 466 + y, 258 + x, 484 + y) // 左下
  ctx.quadraticCurveTo(262 + x, 488 + y, 266 + x, 479 + y) // 右下
  ctx.quadraticCurveTo(257 + x, 460 + y, 259 + x, 433 + y) // 右上
  ctx.quadraticCurveTo(248 + x, 433 + y, 248 + x, 437 + y) // 左上
  ctx.fill()
  ctx.moveTo(257 + x, 433 + y)
  ctx.quadraticCurveTo(254 + x, 460 + y, 264 + x, 479 + y) // 右上
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.moveTo(232 + x, 460 + y) // 左下
  ctx.quadraticCurveTo(252 + x, 472 + y, 275 + x, 471 + y) // 右下
  ctx.quadraticCurveTo(283 + x, 466 + y, 280 + x, 461 + y) // 右上
  ctx.quadraticCurveTo(250 + x, 456 + y, 235 + x, 450 + y) // 左上
  ctx.quadraticCurveTo(230 + x, 455 + y, 232 + x, 460 + y) // 左下
  ctx.fill()
  ctx.moveTo(238 + x, 450 + y)
  ctx.quadraticCurveTo(250 + x, 461 + y, 277 + x, 463 + y) // 右上
  ctx.stroke()
  ctx.closePath()
  ctx.restore()

  ctx.beginPath()
  ctx.arc(442, 519, 4, 0, 4 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(450, 546, 4, 0, 4 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  webKnots(ctx, color, 190, 170, 20, 0.8) // 親指の結び目
  webKnots(ctx, color, -130, 250, 20, 0.8) // 小指の結び目
}
