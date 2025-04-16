// ウェブ＿捕球面間のクロス
export const webToCatchFaceConnect = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, scale?: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.save()
  if (scale !== undefined) {
    ctx.scale(scale, scale)
  }
  // ウェブ＿捕球面間のクロス左＿左上
  ctx.moveTo(552 + x, 199 + y) // 左上
  ctx.quadraticCurveTo(564 + x, 207 + y, 557 + x, 226 + y)
  ctx.quadraticCurveTo(552 + x, 254 + y, 535 + x, 283 + y) // 左下
  ctx.quadraticCurveTo(529 + x, 296 + y, 546 + x, 297 + y) // 右下
  ctx.quadraticCurveTo(562 + x, 268 + y, 568 + x, 217 + y)
  ctx.quadraticCurveTo(572 + x, 200 + y, 550 + x, 187 + y)
  ctx.quadraticCurveTo(552 + x, 199 + y, 552 + x, 199 + y) // 左上
  ctx.fill()
  ctx.moveTo(550 + x, 188 + y) // 左上
  ctx.quadraticCurveTo(583 + x, 208 + y, 534 + x, 292 + y)
  ctx.stroke()
  ctx.closePath()
  // ウェブ＿捕球面間のクロス左＿右上
  ctx.beginPath()
  ctx.moveTo(505 + x, 253 + y) // 左下
  ctx.quadraticCurveTo(501 + x, 264 + y, 513 + x, 265 + y) // 右下
  ctx.quadraticCurveTo(543 + x, 249 + y, 580 + x, 232 + y)
  ctx.quadraticCurveTo(585 + x, 235 + y, 588 + x, 229 + y) // 右上
  ctx.quadraticCurveTo(588 + x, 220 + y, 580 + x, 215 + y)
  ctx.quadraticCurveTo(565 + x, 217 + y, 549 + x, 230 + y)
  ctx.quadraticCurveTo(529 + x, 243 + y, 505 + x, 253 + y)
  ctx.fill()
  ctx.moveTo(587 + x, 231 + y) // 右上
  ctx.quadraticCurveTo(585 + x, 220 + y, 510 + x, 263 + y)
  ctx.stroke()
  ctx.closePath()

  // ウェブ＿捕球面間のクロス右＿右上
  ctx.beginPath()
  ctx.moveTo(563 + x, 320 + y) // 左下
  ctx.quadraticCurveTo(560 + x, 335 + y, 575 + x, 330 + y) // 右下
  ctx.quadraticCurveTo(615 + x, 305 + y, 615 + x, 305 + y)
  ctx.quadraticCurveTo(634 + x, 308 + y, 634 + x, 308 + y) // 右上
  ctx.quadraticCurveTo(633 + x, 293 + y, 623 + x, 289 + y)
  ctx.quadraticCurveTo(620 + x, 290 + y, 594 + x, 302 + y)
  ctx.quadraticCurveTo(584 + x, 305 + y, 563 + x, 320 + y)
  ctx.fill()
  ctx.moveTo(633 + x, 305 + y) // 右上
  ctx.quadraticCurveTo(621 + x, 293 + y, 568 + x, 330 + y)
  ctx.stroke()
  ctx.closePath()

  // ウェブ＿捕球面間のクロス右＿左上
  ctx.beginPath()
  ctx.moveTo(607 + x, 270 + y) // 左上
  ctx.quadraticCurveTo(619 + x, 278 + y, 612 + x, 297 + y)
  ctx.quadraticCurveTo(607 + x, 325 + y, 590 + x, 354 + y) // 左下
  ctx.quadraticCurveTo(584 + x, 367 + y, 601 + x, 368 + y) // 右下
  ctx.quadraticCurveTo(617 + x, 339 + y, 623 + x, 288 + y)
  ctx.quadraticCurveTo(627 + x, 271 + y, 605 + x, 258 + y)
  ctx.quadraticCurveTo(607 + x, 270 + y, 607 + x, 270 + y) // 左上
  ctx.fill()
  ctx.moveTo(605 + x, 258 + y) // 左上
  ctx.quadraticCurveTo(637 + x, 276 + y, 590 + x, 364 + y)
  ctx.stroke()
  ctx.closePath()

  ctx.restore()
}

export const webToCatchFaceConnect2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  // ウェブ＿捕球面間のクロス左＿左上
  ctx.moveTo(552 + x, 199 + y) // 左上
  ctx.quadraticCurveTo(564 + x, 207 + y, 557 + x, 226 + y)
  ctx.quadraticCurveTo(552 + x, 254 + y, 535 + x, 283 + y) // 左下
  ctx.quadraticCurveTo(529 + x, 296 + y, 546 + x, 297 + y) // 右下
  ctx.quadraticCurveTo(562 + x, 268 + y, 568 + x, 217 + y)
  ctx.quadraticCurveTo(572 + x, 200 + y, 550 + x, 187 + y)
  ctx.quadraticCurveTo(552 + x, 199 + y, 552 + x, 199 + y) // 左上
  ctx.fill()
  ctx.moveTo(550 + x, 188 + y) // 左上
  ctx.quadraticCurveTo(583 + x, 208 + y, 534 + x, 292 + y)
  ctx.stroke()
  ctx.closePath()
  // ウェブ＿捕球面間のクロス左＿右上
  ctx.beginPath()
  ctx.moveTo(505 + x, 253 + y) // 左下
  ctx.quadraticCurveTo(501 + x, 264 + y, 513 + x, 265 + y) // 右下
  ctx.quadraticCurveTo(543 + x, 249 + y, 580 + x, 232 + y)
  ctx.quadraticCurveTo(585 + x, 235 + y, 588 + x, 229 + y) // 右上
  ctx.quadraticCurveTo(588 + x, 220 + y, 580 + x, 215 + y)
  ctx.quadraticCurveTo(565 + x, 217 + y, 549 + x, 230 + y)
  ctx.quadraticCurveTo(529 + x, 243 + y, 505 + x, 253 + y)
  ctx.fill()
  ctx.moveTo(587 + x, 231 + y) // 右上
  ctx.quadraticCurveTo(585 + x, 220 + y, 510 + x, 263 + y)
  ctx.stroke()
  ctx.closePath()
}
