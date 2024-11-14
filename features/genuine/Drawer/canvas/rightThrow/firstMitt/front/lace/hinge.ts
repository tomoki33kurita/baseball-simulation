export const hingeUpper = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(583, 427) // 1_左上
  ctx.quadraticCurveTo(579, 448, 586, 465) // 1_左下
  ctx.quadraticCurveTo(593, 482, 612, 491) // 2_左下
  ctx.quadraticCurveTo(638, 515, 651, 513) // 3_左下
  ctx.quadraticCurveTo(654, 508, 651, 504) // 右下
  ctx.quadraticCurveTo(627, 495, 614, 484) // 3_右上
  ctx.quadraticCurveTo(604, 475, 592, 463) // 2_右上
  ctx.quadraticCurveTo(591, 442, 587, 427) // 1_右上
  ctx.quadraticCurveTo(584, 422, 583, 427) // 左上
  ctx.fill()
  // 革紐＿区切り
  ctx.moveTo(587, 467) // 左
  ctx.quadraticCurveTo(592, 465, 592, 465) // 右
  ctx.moveTo(612, 492) // 左
  ctx.quadraticCurveTo(614, 486, 614, 486) // 右
  // 側面
  ctx.moveTo(585, 427) // 左上
  ctx.quadraticCurveTo(585, 449, 591, 461) // 左下
  ctx.moveTo(594, 466) // 左上
  ctx.quadraticCurveTo(601, 478, 613, 484) // 左下
  ctx.moveTo(614, 486) // 左上
  ctx.quadraticCurveTo(632, 501, 651, 506) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const hingeUpper2 = (ctx: CanvasRenderingContext2D, color: string, locationX: number, locationY: number, numerator?: number): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 長方形＿巻き込みパーツ＿
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
  }
  // 右から２番目
  ctx.moveTo(605 + locationX, 352 + locationY) // 左上
  ctx.quadraticCurveTo(591 + locationX, 369 + locationY, 594 + locationX, 388 + locationY) // 左下
  ctx.quadraticCurveTo(596 + locationX, 396 + locationY, 600 + locationX, 387 + locationY) // 右下
  ctx.quadraticCurveTo(602 + locationX, 371 + locationY, 608 + locationX, 360 + locationY) // 右上
  ctx.quadraticCurveTo(606 + locationX, 350 + locationY, 605 + locationX, 352 + locationY) // 左上
  ctx.fill()
  // 側面ライン
  ctx.moveTo(607 + locationX, 358 + locationY) // 左上
  ctx.quadraticCurveTo(599 + locationX, 373 + locationY, 599 + locationX, 387 + locationY) // 右下
  ctx.stroke()
  ctx.closePath()
  if (numerator !== undefined) {
    ctx.restore()
  }
}

export const hingeLower2 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(448, 482) // 1_左上
  ctx.quadraticCurveTo(442, 485, 449, 490) // 左下
  ctx.quadraticCurveTo(475, 495, 475, 495) // 右下
  ctx.quadraticCurveTo(487, 492, 481, 488) // 右上
  ctx.quadraticCurveTo(466, 482, 448, 482) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(449, 490) // 左上
  ctx.quadraticCurveTo(463, 489, 475, 495) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const hingeLower3 = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(395, 465) // _左上
  ctx.quadraticCurveTo(402, 474, 414, 479) // 右下
  ctx.quadraticCurveTo(420, 482, 418, 477) // 右上
  ctx.quadraticCurveTo(414, 466, 395, 465) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(395, 465) // 左上
  ctx.quadraticCurveTo(407, 469, 413, 478) // 左下
  ctx.stroke()
  ctx.closePath()
}

export const hingeLower = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  ctx.beginPath()
  // 右から２番目
  ctx.moveTo(522, 492) // 左上
  ctx.quadraticCurveTo(514, 495, 521, 499) // 左下
  ctx.quadraticCurveTo(539, 499, 556, 504) // 1_右下
  ctx.quadraticCurveTo(575, 507, 592, 515) // 2_右下
  ctx.quadraticCurveTo(608, 530, 624, 540) // 3_右下
  ctx.quadraticCurveTo(627, 542, 627, 542) // 4_右下
  ctx.quadraticCurveTo(628, 538, 633, 538) // 4_左上
  ctx.quadraticCurveTo(615, 519, 597, 508) // 3_左上
  ctx.quadraticCurveTo(578, 497, 558, 496) // 2_左上
  ctx.quadraticCurveTo(538, 489, 522, 492) // 1_左上
  ctx.fill()
  // 革紐＿区切り
  ctx.moveTo(558, 496) // 上
  ctx.quadraticCurveTo(555, 504, 555, 504) // 下
  ctx.moveTo(596, 508) // 上
  ctx.quadraticCurveTo(591, 515, 591, 515) // 下
  // 側面ライン
  ctx.moveTo(436, 124) // 左上
  ctx.quadraticCurveTo(454, 127, 469, 118) // 左下
  ctx.stroke()
  ctx.closePath()
}
