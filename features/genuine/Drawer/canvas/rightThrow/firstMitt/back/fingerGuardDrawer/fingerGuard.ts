export const fingerPad = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(358 + x, 377 + y) // 左下
  ctx.quadraticCurveTo(384 + x, 373 + y, 422 + x, 377 + y) // 右下
  ctx.quadraticCurveTo(404 + x, 270 + y, 404 + x, 275 + y) // 右上
  ctx.quadraticCurveTo(393 + x, 255 + y, 375 + x, 255 + y) // 中央上
  ctx.quadraticCurveTo(360 + x, 255 + y, 350 + x, 278 + y) // 左上
  ctx.quadraticCurveTo(358 + x, 377 + y, 358 + x, 377 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(360 + x, 374 + y) // 左下
  ctx.quadraticCurveTo(352 + x, 278 + y, 353 + x, 278 + y) // 左上
  ctx.quadraticCurveTo(360 + x, 263 + y, 373 + x, 257 + y) // 中央上
  ctx.quadraticCurveTo(390 + x, 258 + y, 401 + x, 275 + y) // 右上
  ctx.quadraticCurveTo(418 + x, 374 + y, 418 + x, 374 + y) // 右下
  // 内側
  ctx.moveTo(363 + x, 374 + y) // 左下
  ctx.quadraticCurveTo(356 + x, 278 + y, 356 + x, 278 + y) // 左上
  ctx.quadraticCurveTo(360 + x, 266 + y, 373 + x, 260 + y) // 中央上
  ctx.quadraticCurveTo(387 + x, 258 + y, 398 + x, 275 + y) // 右上
  ctx.quadraticCurveTo(415 + x, 374 + y, 415 + x, 374 + y) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}

export const fingerCover = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(358 + x, 377 + y) // 左下
  ctx.quadraticCurveTo(358 + x, 395 + y, 366 + x, 416 + y) // 中央下＿左
  ctx.quadraticCurveTo(395 + x, 425 + y, 409 + x, 409 + y) // 中央下＿右
  ctx.quadraticCurveTo(422 + x, 393 + y, 422 + x, 377 + y) // 右下
  ctx.quadraticCurveTo(404 + x, 270 + y, 404 + x, 275 + y) // 右上
  ctx.quadraticCurveTo(393 + x, 255 + y, 375 + x, 255 + y) // 中央上
  ctx.quadraticCurveTo(360 + x, 255 + y, 352 + x, 278 + y) // 左上
  ctx.quadraticCurveTo(358 + x, 377 + y, 358 + x, 377 + y) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(360 + x, 374 + y) // 左下
  ctx.quadraticCurveTo(355 + x, 278 + y, 355 + x, 278 + y) // 左上
  ctx.quadraticCurveTo(360 + x, 263 + y, 373 + x, 257 + y) // 中央上
  ctx.quadraticCurveTo(390 + x, 258 + y, 401 + x, 275 + y) // 右上
  ctx.quadraticCurveTo(418 + x, 374 + y, 418 + x, 374 + y) // 右下
  // 内側
  ctx.moveTo(356 + x, 278 + y) // 左下
  ctx.quadraticCurveTo(360 + x, 266 + y, 373 + x, 260 + y) // 中央上
  ctx.quadraticCurveTo(387 + x, 258 + y, 398 + x, 275 + y) // 右上
  ctx.quadraticCurveTo(415 + x, 374 + y, 415 + x, 374 + y) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}
