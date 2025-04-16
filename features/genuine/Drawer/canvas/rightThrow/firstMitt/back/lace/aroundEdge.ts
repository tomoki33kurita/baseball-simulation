export const aroundEdge = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(459, 84) // 左上
  ctx.quadraticCurveTo(457, 93, 457, 93) // 左下
  ctx.quadraticCurveTo(477, 89, 493, 100) // 右下
  ctx.quadraticCurveTo(499, 97, 498, 88) // 右上
  ctx.quadraticCurveTo(478, 77, 459, 84) // 左上
  ctx.fill()
  ctx.moveTo(457, 93) // 左上
  ctx.quadraticCurveTo(477, 85, 495, 98) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge0 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(500 + locationX, 52 + locationY) // 左上
  ctx.quadraticCurveTo(502 + locationX, 55 + locationY, 506 + locationX, 54 + locationY) // 左下
  ctx.quadraticCurveTo(517 + locationX, 48 + locationY, 528 + locationX, 61 + locationY) //
  ctx.quadraticCurveTo(533 + locationX, 63 + locationY, 537 + locationX, 59 + locationY) //
  ctx.quadraticCurveTo(535 + locationX, 47 + locationY, 519 + locationX, 45 + locationY) //
  ctx.quadraticCurveTo(505 + locationX, 44 + locationY, 500 + locationX, 52 + locationY) //
  ctx.fill()
  ctx.moveTo(500 + locationX, 52 + locationY) // 上
  ctx.quadraticCurveTo(508 + locationX, 43 + locationY, 517 + locationX, 47 + locationY) //
  ctx.quadraticCurveTo(531 + locationX, 53 + locationY, 532 + locationX, 62 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const aroundEdge1 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(434 + locationX, 88 + locationY) // 左上
  ctx.quadraticCurveTo(427 + locationX, 98 + locationY, 432 + locationX, 101 + locationY) // 左下
  ctx.quadraticCurveTo(450 + locationX, 90 + locationY, 473 + locationX, 108 + locationY) // 右下
  ctx.quadraticCurveTo(478 + locationX, 103 + locationY, 475 + locationX, 101 + locationY) // 右上
  ctx.quadraticCurveTo(451 + locationX, 76 + locationY, 434 + locationX, 88 + locationY) // 左上
  ctx.fill()
  ctx.moveTo(429 + locationX, 99 + locationY) // 上
  ctx.quadraticCurveTo(446 + locationX, 83 + locationY, 473 + locationX, 108 + locationY) // 左下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const aroundEdge2 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(441 + locationX, 242 + locationY) // 左上
  ctx.quadraticCurveTo(442 + locationX, 251 + locationY, 451 + locationX, 249 + locationY) // 左下
  ctx.quadraticCurveTo(474 + locationX, 221 + locationY, 474 + locationX, 219 + locationY) // 右下
  ctx.quadraticCurveTo(476 + locationX, 205 + locationY, 468 + locationX, 208 + locationY) // 右上
  ctx.quadraticCurveTo(461 + locationX, 218 + locationY, 441 + locationX, 242 + locationY) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const aroundEdge3 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(473, 279) // 左上
  ctx.quadraticCurveTo(477, 290, 482, 285) // 左下
  ctx.quadraticCurveTo(498, 264, 497, 252) // 右下
  ctx.quadraticCurveTo(490, 239, 484, 246) // 右上
  ctx.quadraticCurveTo(487, 252, 473, 279) // 左上
  ctx.fill()
  ctx.moveTo(487, 245) // 左上
  ctx.quadraticCurveTo(494, 248, 474, 283) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge4 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(512 + locationX, 312 + locationY) // 左上
  ctx.quadraticCurveTo(509 + locationX, 321 + locationY, 521 + locationX, 321 + locationY) // 左
  ctx.quadraticCurveTo(533 + locationX, 316 + locationY, 543 + locationX, 302 + locationY) //
  ctx.quadraticCurveTo(538 + locationX, 292 + locationY, 536 + locationX, 292 + locationY) // 右上
  ctx.quadraticCurveTo(530 + locationX, 292 + locationY, 531 + locationX, 296 + locationY) //
  ctx.quadraticCurveTo(525 + locationX, 303 + locationY, 515 + locationX, 307 + locationY) //
  ctx.quadraticCurveTo(512 + locationX, 311 + locationY, 512 + locationX, 312 + locationY) //
  ctx.fill()
  ctx.moveTo(539 + locationX, 293 + locationY) // 左上
  ctx.quadraticCurveTo(528 + locationX, 310 + locationY, 511 + locationX, 314 + locationY) // 左
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const aroundEdge5 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(620 + locationX, 325 + locationY) // 左上
  ctx.quadraticCurveTo(624 + locationX, 326 + locationY, 620 + locationX, 331 + locationY) // 左下
  ctx.quadraticCurveTo(647 + locationX, 334 + locationY, 636 + locationX, 354 + locationY) // 右下
  ctx.quadraticCurveTo(651 + locationX, 341 + locationY, 643 + locationX, 330 + locationY) //
  ctx.quadraticCurveTo(638 + locationX, 321 + locationY, 620 + locationX, 325 + locationY) //
  ctx.fill()
  ctx.moveTo(620 + locationX, 326 + locationY) // 左上
  ctx.quadraticCurveTo(650 + locationX, 331 + locationY, 639 + locationX, 350 + locationY) // 左
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const aroundEdge6 = (
  ctx: CanvasRenderingContext2D,
  color: string,
  locationX: number,
  locationY: number,
  numerator?: number,
  scaleSize?: number
): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(659 + locationX, 272 + locationY) // 左上
  ctx.quadraticCurveTo(658 + locationX, 277 + locationY, 655 + locationX, 280 + locationY) // 左下
  ctx.quadraticCurveTo(671 + locationX, 286 + locationY, 663 + locationX, 306 + locationY) // 右下
  ctx.quadraticCurveTo(671 + locationX, 296 + locationY, 671 + locationX, 288 + locationY) // 右下
  ctx.quadraticCurveTo(670 + locationX, 273 + locationY, 659 + locationX, 272 + locationY) // 右下
  ctx.fill()
  ctx.moveTo(657 + locationX, 276 + locationY) // 左上
  ctx.quadraticCurveTo(675 + locationX, 284 + locationY, 667 + locationX, 300 + locationY) // 左
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}
