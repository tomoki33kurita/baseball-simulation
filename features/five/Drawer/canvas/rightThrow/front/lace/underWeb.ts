export const underWeb = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(345 + x, 306 + y) // 左下
  ctx.quadraticCurveTo(349 + x, 315 + y, 353 + x, 311 + y) // 右下
  ctx.quadraticCurveTo(366 + x, 297 + y, 372 + x, 280 + y) // 右上
  ctx.quadraticCurveTo(372 + x, 268 + y, 364 + x, 275 + y) // 左上
  ctx.quadraticCurveTo(356 + x, 289 + y, 344 + x, 306 + y) // 左下
  ctx.fill()
  ctx.moveTo(366 + x, 275 + y) // 左下
  ctx.quadraticCurveTo(362 + x, 289 + y, 345 + x, 308 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const underWebReinforcement = (ctx: CanvasRenderingContext2D, color: string) => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 右上＿下地
  ctx.beginPath()
  ctx.moveTo(370, 239) // 左上
  ctx.quadraticCurveTo(363, 272, 374, 276) // 左下
  ctx.quadraticCurveTo(379, 272, 379, 272) // 右下
  ctx.quadraticCurveTo(375, 266, 374, 246) // 右上
  ctx.quadraticCurveTo(370, 239, 370, 239) // 左上
  // ctx.quadraticCurveTo() // 右上
  ctx.fill()
  ctx.moveTo(374, 246) // 右上
  ctx.quadraticCurveTo(368, 256, 379, 276) // 右下
  ctx.stroke()
  ctx.closePath()

  // 右上＿上地
  ctx.beginPath()
  ctx.moveTo(354, 285) // 左下
  ctx.quadraticCurveTo(364, 272, 385, 262) // 右下
  ctx.quadraticCurveTo(390, 257, 384, 253) // 右上
  ctx.quadraticCurveTo(366, 259, 360, 268) // 左上
  ctx.quadraticCurveTo(354, 285, 354, 285) // 左下
  ctx.fill()
  ctx.moveTo(358, 279) // 左下
  ctx.quadraticCurveTo(364, 267, 387, 259) // 右下
  ctx.stroke()
  ctx.closePath()

  // 左＿下地
  ctx.beginPath()
  ctx.moveTo(299, 367) // 左下
  ctx.quadraticCurveTo(314, 374, 314, 374) // 右下
  ctx.quadraticCurveTo(318, 366, 318, 368) // 右上
  ctx.quadraticCurveTo(309, 360, 296, 363) // 左上
  ctx.fill()
  ctx.moveTo(297, 367) // 左下
  ctx.quadraticCurveTo(305, 365, 316, 374) // 右下
  ctx.stroke()
  ctx.closePath()

  // // 右上＿上地
  //   ctx.beginPath()
  //   ctx.moveTo(354, 285) // 左下
  //   ctx.quadraticCurveTo(364, 272, 385, 262) // 右下
  //   ctx.quadraticCurveTo(390, 257, 384, 253) // 右上
  //   ctx.quadraticCurveTo(366, 259, 360, 268) // 左上
  //   ctx.quadraticCurveTo(354, 285, 354, 285) // 左下
  //   ctx.fill()
  //   ctx.moveTo(358, 279) // 左下
  //   ctx.quadraticCurveTo(364, 267, 387, 259) // 右下
  //   ctx.stroke()
  //   ctx.closePath()
}

export const underWebForNetWeb1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 小指芯固定用の紐
  ctx.beginPath()
  ctx.moveTo(355 + x, 279 + y) // 左
  ctx.quadraticCurveTo(377 + x, 269 + y, 382 + x, 272 + y) // 右下
  ctx.quadraticCurveTo(389 + x, 266 + y, 384 + x, 261 + y) // 右上
  ctx.quadraticCurveTo(365 + x, 261 + y, 355 + x, 279 + y) // 左
  ctx.fill()
  ctx.moveTo(355 + x, 279 + y) // 左下
  ctx.quadraticCurveTo(377 + x, 264 + y, 382 + x, 272 + y) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const underWebForNetWeb2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.save()
  ctx.rotate((numerator * Math.PI) / 180)
  ctx.beginPath()
  ctx.moveTo(325 + x, 331 + y) // 左上
  ctx.quadraticCurveTo(332 + x, 330 + y, 342 + x, 347 + y) // 左下
  ctx.quadraticCurveTo(350 + x, 343 + y, 347 + x, 337 + y) // 右下
  ctx.quadraticCurveTo(339 + x, 324 + y, 331 + x, 323 + y) // 右上
  ctx.quadraticCurveTo(325 + x, 322 + y, 325 + x, 331 + y) // 左上
  ctx.fill()
  ctx.moveTo(325 + x, 330 + y) // 左上
  ctx.quadraticCurveTo(335 + x, 325 + y, 344 + x, 347 + y) // 左下
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}
