export const aroundEdge1 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  //  左上-右下
  ctx.beginPath()
  ctx.moveTo(496 + x, 329 + y) // 左上
  ctx.quadraticCurveTo(478 + x, 347 + y, 469 + x, 353 + y) // 左下
  ctx.quadraticCurveTo(478 + x, 362 + y, 485 + x, 356 + y) // 右下
  ctx.quadraticCurveTo(491 + x, 354 + y, 508 + x, 335 + y) // 右上
  ctx.quadraticCurveTo(512 + x, 331 + y, 507 + x, 329 + y) // 右上上
  ctx.quadraticCurveTo(498 + x, 323 + y, 496 + x, 329 + y) // 左上
  ctx.fill()
  ctx.moveTo(500 + x, 327 + y) // 左上
  ctx.quadraticCurveTo(492 + x, 338 + y, 472 + x, 355 + y) // 左下
  ctx.moveTo(509 + x, 332 + y) // 右上
  ctx.quadraticCurveTo(507 + x, 332 + y, 485 + x, 356 + y) // 右下

  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge2 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  //  左上-右下
  ctx.beginPath()
  ctx.moveTo(571, 357) // 左上
  ctx.quadraticCurveTo(568, 364, 561, 370) //
  ctx.quadraticCurveTo(554, 372, 545, 380) // 左下_上
  ctx.quadraticCurveTo(541, 385, 548, 384) // 左下_下
  ctx.quadraticCurveTo(554, 381, 562, 384) //
  ctx.quadraticCurveTo(588, 365, 587, 350) // 右上
  ctx.quadraticCurveTo(580, 357, 571, 357) // 左上
  ctx.fill()
  ctx.moveTo(577, 356) // 上
  ctx.quadraticCurveTo(572, 373, 549, 383) // 下
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge3 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  //  左上-右下
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }

  ctx.moveTo(602 + x, 341 + y) // 左上
  ctx.quadraticCurveTo(605 + x, 372 + y, 584 + x, 381 + y) // 左下＿上
  ctx.quadraticCurveTo(582 + x, 385 + y, 586 + x, 384 + y) // 左下＿下
  ctx.quadraticCurveTo(621 + x, 378 + y, 613 + x, 337 + y) // 右上
  ctx.quadraticCurveTo(601 + x, 335 + y, 602 + x, 341 + y) // 左上
  ctx.fill()
  ctx.moveTo(605 + x, 337 + y) // 上
  ctx.quadraticCurveTo(608 + x, 370 + y, 591 + x, 382 + y) // 下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const aroundEdge4 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  //  左上-右下
  ctx.beginPath()
  ctx.moveTo(669, 303) // 左上
  ctx.quadraticCurveTo(672, 310, 669, 317) // 左下
  ctx.quadraticCurveTo(679, 323, 673, 332) // 右下
  ctx.quadraticCurveTo(687, 327, 683, 316) //
  ctx.quadraticCurveTo(680, 308, 669, 303) //
  ctx.fill()
  ctx.moveTo(670, 312) // 上
  ctx.quadraticCurveTo(683, 321, 677, 330) // 下
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge5 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  //  左上-右下
  ctx.beginPath()
  ctx.moveTo(681, 293) // 左上
  ctx.quadraticCurveTo(675, 291, 675, 298) // 左下
  ctx.quadraticCurveTo(686, 303, 685, 319) //
  ctx.quadraticCurveTo(683, 331, 673, 333) // 右下_上
  ctx.quadraticCurveTo(669, 337, 669, 337) // 右下_下
  ctx.quadraticCurveTo(688, 340, 692, 316) //
  ctx.quadraticCurveTo(692, 302, 681, 293) //
  ctx.fill()
  ctx.moveTo(675, 295) // 上
  ctx.quadraticCurveTo(698, 310, 683, 335) // 下
  ctx.stroke()
  ctx.closePath()
}
export const aroundEdge6 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  //  左上-右下
  ctx.beginPath()
  ctx.moveTo(690 + x, 285 + y) // 左左
  ctx.quadraticCurveTo(691 + x, 288 + y, 694 + x, 288 + y) // 左右
  ctx.quadraticCurveTo(699 + x, 279 + y, 706 + x, 292 + y) //
  ctx.quadraticCurveTo(709 + x, 310 + y, 693 + x, 318 + y) // 右左
  ctx.quadraticCurveTo(695 + x, 322 + y, 695 + x, 322 + y) // 右右
  ctx.quadraticCurveTo(711 + x, 315 + y, 716 + x, 298 + y) //
  ctx.quadraticCurveTo(715 + x, 284 + y, 706 + x, 280 + y) //
  ctx.quadraticCurveTo(694 + x, 274 + y, 690 + x, 285 + y) //
  ctx.fill()
  ctx.moveTo(691 + x, 287 + y) // 左
  ctx.quadraticCurveTo(695 + x, 276 + y, 705 + x, 284 + y) //
  ctx.quadraticCurveTo(715 + x, 292 + y, 710 + x, 305 + y) //
  ctx.quadraticCurveTo(704 + x, 316 + y, 694 + x, 321 + y) //
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge7 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.beginPath()
  ctx.moveTo(453 + x, 290 + y) // 左上
  ctx.quadraticCurveTo(461 + x, 295 + y, 439 + x, 324 + y) // 左下
  ctx.quadraticCurveTo(443 + x, 330 + y, 443 + x, 330 + y) //
  ctx.quadraticCurveTo(446 + x, 333 + y, 465 + x, 308 + y) // 右上
  ctx.quadraticCurveTo(472 + x, 298 + y, 459 + x, 287 + y) //
  ctx.quadraticCurveTo(453 + x, 286 + y, 453 + x, 290 + y) //
  ctx.fill()
  ctx.moveTo(457 + x, 287 + y) // 上
  ctx.quadraticCurveTo(467 + x, 299 + y, 442 + x, 321 + y) // 下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const aroundEdge8 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(401, 156) // 左上
  ctx.quadraticCurveTo(397, 162, 406, 163) // 左下
  ctx.quadraticCurveTo(412, 156, 439, 157) // 右下
  ctx.quadraticCurveTo(439, 152, 444, 147) // 右上
  ctx.quadraticCurveTo(413, 141, 401, 156) // 左上
  ctx.fill()
  ctx.moveTo(400, 159) // 上
  ctx.quadraticCurveTo(420, 147, 439, 157) // 下
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(440, 102) // 左左
  ctx.quadraticCurveTo(440, 104, 445, 104) // 左右
  ctx.quadraticCurveTo(464, 105, 464, 125) // 右下
  ctx.quadraticCurveTo(467, 125, 472, 116) // 右上
  ctx.quadraticCurveTo(471, 103, 458, 95) // 左上
  ctx.quadraticCurveTo(442, 90, 440, 102) // 左下
  ctx.fill()
  ctx.moveTo(441, 100) // 上
  ctx.quadraticCurveTo(468, 98, 467, 123) // 下
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(433, 100) // 左左
  ctx.quadraticCurveTo(436, 103, 440, 101) // 左右
  ctx.quadraticCurveTo(441, 93, 454, 90) //
  ctx.quadraticCurveTo(466, 86, 471, 92) // 右下
  ctx.quadraticCurveTo(480, 92, 476, 86) // 右上
  ctx.quadraticCurveTo(469, 72, 438, 87) //
  ctx.quadraticCurveTo(430, 94, 433, 100) //
  ctx.fill()
  ctx.moveTo(434, 100) // 左
  ctx.quadraticCurveTo(436, 89, 452, 86) //
  ctx.quadraticCurveTo(469, 81, 476, 89) // 右
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge9 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(439 + x, 75 + y) // 左左
  ctx.quadraticCurveTo(443 + x, 76 + y, 449 + x, 73 + y) // 左右
  ctx.quadraticCurveTo(456 + x, 59 + y, 463 + x, 68 + y) // 右左
  ctx.quadraticCurveTo(468 + x, 65 + y, 465 + x, 62 + y) // 左右
  ctx.quadraticCurveTo(458 + x, 55 + y, 451 + x, 58 + y) //
  ctx.quadraticCurveTo(440 + x, 63 + y, 439 + x, 75 + y) //
  ctx.fill()
  ctx.moveTo(443 + x, 74 + y) // 左下
  ctx.quadraticCurveTo(449 + x, 61 + y, 459 + x, 58 + y) // 右上
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge10 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  ctx.moveTo(280 + x, 72 + y) // 左上奥
  ctx.quadraticCurveTo(282 + x, 69 + y, 287 + x, 77 + y) // 左下
  ctx.quadraticCurveTo(291 + x, 81 + y, 296 + x, 74 + y) // 右下
  ctx.quadraticCurveTo(291 + x, 64 + y, 291 + x, 64 + y) // 右上
  ctx.quadraticCurveTo(281 + x, 66 + y, 281 + x, 66 + y) // 左上
  ctx.quadraticCurveTo(280 + x, 72 + y, 280 + x, 72 + y) // 左上奥
  ctx.fill()
  ctx.moveTo(281 + x, 66 + y) // 上
  ctx.quadraticCurveTo(286 + x, 69 + y, 290 + x, 78 + y) // 下
  ctx.moveTo(291 + x, 64 + y) // 上
  ctx.quadraticCurveTo(290 + x, 68 + y, 295 + x, 75 + y) // 下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const aroundEdge11 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number, scaleSize: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  //
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(168 + x, 144 + y) // 左下奥
  ctx.quadraticCurveTo(172 + x, 140 + y, 188 + x, 141 + y) // 右左
  ctx.quadraticCurveTo(194 + x, 137 + y, 193 + x, 132 + y) // 右右
  ctx.quadraticCurveTo(187 + x, 128 + y, 174 + x, 131 + y) // 左上
  ctx.quadraticCurveTo(175 + x, 135 + y, 168 + x, 139 + y) // 左下
  ctx.quadraticCurveTo(168 + x, 144 + y, 168 + x, 144 + y) // 左下奥
  ctx.fill()
  ctx.moveTo(168 + x, 139 + y) // 左
  ctx.quadraticCurveTo(178 + x, 137 + y, 189 + x, 140 + y) // 下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const aroundEdge12 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number, numerator: number, scaleSize: number): void => {
  ctx.lineWidth = 0.8
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
  ctx.moveTo(123 + x, 256 + y) // 左上
  ctx.quadraticCurveTo(116 + x, 271 + y, 120 + x, 275 + y) // 左下
  ctx.quadraticCurveTo(129 + x, 259 + y, 136 + x, 257 + y) //
  ctx.quadraticCurveTo(142 + x, 255 + y, 142 + x, 251 + y) //
  ctx.quadraticCurveTo(144 + x, 245 + y, 141 + x, 244 + y) // 右下
  ctx.quadraticCurveTo(127 + x, 247 + y, 123 + x, 256 + y) // 左上
  ctx.fill()
  ctx.moveTo(142 + x, 251 + y) // 上
  ctx.quadraticCurveTo(124 + x, 255 + y, 118 + x, 272 + y) // 下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }

  ctx.closePath()
}

export const aroundEdge13 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  //  左上-右下
  ctx.beginPath()
  ctx.moveTo(191 + x, 508 + y) // 左上
  ctx.quadraticCurveTo(190 + x, 512 + y, 190 + x, 520 + y) // 左下
  ctx.quadraticCurveTo(190 + x, 529 + y, 202 + x, 533 + y) // 右下
  ctx.quadraticCurveTo(198 + x, 515 + y, 200 + x, 515 + y) // 右上
  ctx.quadraticCurveTo(196 + x, 508 + y, 191 + x, 508 + y) // 左上
  ctx.fill()
  ctx.moveTo(197 + x, 511 + y) // 上
  ctx.quadraticCurveTo(196 + x, 524 + y, 200 + x, 531 + y) // 下
  ctx.stroke()
  ctx.closePath()
}

export const aroundEdge14 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = 'red' // '#282828'
  ctx.fillStyle = color

  //  左上-右下
  ctx.beginPath()
  ctx.moveTo(681, 293) // 左上
  // ctx.quadraticCurveTo() // 左下
  ctx.fill()
  ctx.moveTo(675, 295) // 上
  ctx.quadraticCurveTo(698, 310, 683, 335) // 下
  ctx.stroke()
  ctx.closePath()
}

//   if (numerator !== undefined && numerator !== 0) {
//   ctx.save()
//   ctx.rotate((numerator * Math.PI) / 180)
//   if (scaleSize !== undefined) {
//     ctx.scale(scaleSize, scaleSize)
//   }
// }
// if (numerator !== undefined) {
//   ctx.restore()
// }
