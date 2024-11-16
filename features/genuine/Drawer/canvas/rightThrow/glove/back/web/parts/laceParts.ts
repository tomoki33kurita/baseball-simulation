export const lacePartsOfWeb1 = (
  ctx: CanvasRenderingContext2D,
  laceColor: string,
  x: number,
  y: number,
  numerator: number,
  scaleSize: number
): void => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#383838' // 'red'
  // 左下→右上
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  ctx.moveTo(530 + x, 100 + y) //左上
  ctx.quadraticCurveTo(527 + x, 110 + y, 527 + x, 110 + y) //左下
  ctx.quadraticCurveTo(559 + x, 114 + y, 580 + x, 125 + y) //中間1_下
  ctx.quadraticCurveTo(582 + x, 125 + y, 590 + x, 125 + y) //中間2_下
  ctx.quadraticCurveTo(607 + x, 122 + y, 624 + x, 127 + y) //右上左
  ctx.quadraticCurveTo(630 + x, 125 + y, 620 + x, 119 + y) //右上右
  ctx.quadraticCurveTo(608 + x, 110 + y, 590 + x, 115 + y) //中間2_上
  ctx.quadraticCurveTo(582 + x, 114 + y, 580 + x, 115 + y) //中間2_上
  ctx.quadraticCurveTo(558 + x, 99 + y, 530 + x, 100 + y) //
  ctx.fill()
  ctx.moveTo(527 + x, 110 + y) //左下
  ctx.quadraticCurveTo(559 + x, 107 + y, 579 + x, 123 + y) //中間1_下
  ctx.moveTo(586 + x, 121 + y) //左下
  ctx.quadraticCurveTo(607 + x, 116 + y, 624 + x, 127 + y) //中間1_下
  ctx.stroke()
  ctx.closePath()
  // 左上→右下
  ctx.beginPath()
  ctx.moveTo(569 + x, 107 + y) //左上＿左奥
  ctx.quadraticCurveTo(578 + x, 117 + y, 579 + x, 131 + y) //中間_上
  ctx.quadraticCurveTo(600 + x, 161 + y, 604 + x, 183 + y) //右下_左
  ctx.quadraticCurveTo(613 + x, 179 + y, 611 + x, 174 + y) //右下_右
  ctx.quadraticCurveTo(607 + x, 147 + y, 589 + x, 129 + y) //中間＿下
  ctx.quadraticCurveTo(589 + x, 113 + y, 582 + x, 108 + y) //左上＿右
  ctx.quadraticCurveTo(579 + x, 108 + y, 574 + x, 106 + y) //左上＿左
  ctx.quadraticCurveTo(569 + x, 107 + y, 569 + x, 107 + y) //左上＿左奥
  ctx.fill()
  ctx.moveTo(574 + x, 106 + y) //左下
  ctx.quadraticCurveTo(582 + x, 123 + y, 581 + x, 129 + y) //中間1_下
  ctx.quadraticCurveTo(599 + x, 153 + y, 607 + x, 183 + y) //中間1_下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const upLeftDownRight = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#383838' //
  // 左上→右上
  ctx.beginPath()
  ctx.moveTo(579 + x, 131 + y) //左上＿左
  ctx.quadraticCurveTo(600 + x, 161 + y, 604 + x, 183 + y) //右下_左
  ctx.quadraticCurveTo(613 + x, 179 + y, 611 + x, 174 + y) //右下_右
  ctx.quadraticCurveTo(607 + x, 147 + y, 589 + x, 129 + y) //左上＿右
  ctx.quadraticCurveTo(582 + x, 124 + y, 579 + x, 131 + y) //左上＿左
  ctx.fill()
  ctx.moveTo(581 + x, 130 + y) //左下
  ctx.quadraticCurveTo(599 + x, 153 + y, 607 + x, 183 + y) //中間1_下
  ctx.stroke()
  ctx.closePath()
}

export const upRightDownLeft = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.beginPath()
  ctx.fillStyle = laceColor
  // 左下→右上
  ctx.moveTo(476 + x, 282 + y) //左上
  ctx.quadraticCurveTo(475 + x, 285 + y, 483 + x, 290 + y) //左下
  ctx.quadraticCurveTo(527 + x, 255 + y, 532 + x, 262 + y) //右上＿下
  ctx.quadraticCurveTo(532 + x, 255 + y, 528 + x, 255 + y) //右上＿上
  ctx.quadraticCurveTo(500 + x, 254 + y, 476 + x, 282 + y) //
  ctx.fill()
  ctx.moveTo(480 + x, 290 + y) //左上
  ctx.quadraticCurveTo(505 + x, 260 + y, 530 + x, 260 + y) //左下
  ctx.stroke()
  ctx.closePath()
}

export const lacePartsOfWeb2 = (
  ctx: CanvasRenderingContext2D,
  laceColor: string,
  x: number,
  y: number,
  numerator: number,
  scaleSize: number
): void => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#383838' //
  ctx.beginPath()
  if (numerator !== undefined && numerator !== 0) {
    ctx.save()
    ctx.rotate((numerator * Math.PI) / 180)
    if (scaleSize !== undefined) {
      ctx.scale(scaleSize, scaleSize)
    }
  }
  // 左下→右上
  ctx.moveTo(630 + x, 213 + y) //左上
  ctx.quadraticCurveTo(625 + x, 215 + y, 625 + x, 220 + y) //左下
  ctx.quadraticCurveTo(644 + x, 226 + y, 658 + x, 253 + y) //中間1_下
  ctx.quadraticCurveTo(670 + x, 265 + y, 690 + x, 262 + y) //右上右
  ctx.quadraticCurveTo(690 + x, 255 + y, 685 + x, 252 + y) //右上左
  ctx.quadraticCurveTo(663 + x, 245 + y, 663 + x, 245 + y) //中間1_上
  ctx.quadraticCurveTo(646 + x, 215 + y, 630 + x, 213 + y) //左上
  ctx.fill()
  ctx.moveTo(625 + x, 218 + y) //左下
  ctx.quadraticCurveTo(645 + x, 221 + y, 660 + x, 250 + y) //中間1_下
  ctx.quadraticCurveTo(665 + x, 258 + y, 690 + x, 260 + y) //中間1_下
  ctx.stroke()
  ctx.closePath()
  // 左上→右下
  ctx.beginPath()
  ctx.moveTo(657 + x, 232 + y) //左上＿左奥
  ctx.quadraticCurveTo(662 + x, 244 + y, 652 + x, 262 + y) //中間1_下
  ctx.quadraticCurveTo(651 + x, 263 + y, 654 + x, 271 + y) //中間2_下
  ctx.quadraticCurveTo(669 + x, 285 + y, 667 + x, 306 + y) //右下下
  ctx.quadraticCurveTo(673 + x, 304 + y, 676 + x, 300 + y) //右下上
  ctx.quadraticCurveTo(674 + x, 280 + y, 661 + x, 268 + y) //中間上
  ctx.quadraticCurveTo(669 + x, 256 + y, 665 + x, 243 + y) //左上右
  ctx.quadraticCurveTo(662 + x, 240 + y, 657 + x, 232 + y) //左下下
  ctx.fill()
  ctx.moveTo(660 + x, 238 + y) //左下
  ctx.quadraticCurveTo(663 + x, 251 + y, 655 + x, 264 + y) //中間1_下
  ctx.quadraticCurveTo(656 + x, 269 + y, 656 + x, 269 + y) //中間2_下
  ctx.quadraticCurveTo(670 + x, 279 + y, 671 + x, 304 + y) //右下下
  ctx.stroke()
  if (numerator !== undefined) {
    ctx.restore()
  }
  ctx.closePath()
}

export const upRightDownLeft2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#383838' //
  // 左上→右上
  ctx.beginPath()
  ctx.moveTo(625 + x, 203 + y) //左上
  ctx.quadraticCurveTo(619 + x, 204 + y, 620 + x, 210 + y) //左下
  ctx.quadraticCurveTo(638 + x, 223 + y, 647 + x, 242 + y) //中間
  ctx.quadraticCurveTo(651 + x, 244 + y, 657 + x, 243 + y) //右上_右
  ctx.quadraticCurveTo(650 + x, 234 + y, 650 + x, 234 + y) //右上_左
  ctx.quadraticCurveTo(647 + x, 215 + y, 625 + x, 203 + y) //右上_左
  ctx.fill()
  ctx.moveTo(622 + x, 208 + y) //左下
  ctx.quadraticCurveTo(637 + x, 215 + y, 650 + x, 242 + y) //中間1_下
  ctx.stroke()
  ctx.closePath()
  // 左上→右下
  ctx.beginPath()
  ctx.moveTo(650 + x, 230 + y) //左上＿左奥
  ctx.quadraticCurveTo(655 + x, 244 + y, 652 + x, 262 + y) //中間1_下
  ctx.quadraticCurveTo(651 + x, 263 + y, 654 + x, 271 + y) //中間2_下
  ctx.quadraticCurveTo(667 + x, 288 + y, 663 + x, 316 + y) //右下下
  ctx.quadraticCurveTo(673 + x, 315 + y, 671 + x, 310 + y) //右下上
  ctx.quadraticCurveTo(677 + x, 285 + y, 661 + x, 268 + y) //中間上
  ctx.quadraticCurveTo(669 + x, 246 + y, 658 + x, 233 + y) //左上右
  ctx.quadraticCurveTo(653 + x, 228 + y, 650 + x, 230 + y) //左下下
  ctx.fill()
  ctx.moveTo(651 + x, 231 + y) //左下
  ctx.quadraticCurveTo(660 + x, 242 + y, 655 + x, 264 + y) //中間1_下
  ctx.moveTo(656 + x, 271 + y) //左下
  ctx.quadraticCurveTo(672 + x, 289 + y, 665 + x, 316 + y) //中間1_下
  ctx.stroke()
  ctx.closePath()
}

export const upLeftDownRight2 = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  ctx.fillStyle = laceColor
  ctx.strokeStyle = '#383838' //
  // 左下→右上
  ctx.beginPath()
  ctx.moveTo(555, 298) //左上
  ctx.quadraticCurveTo(550, 300, 550, 305) //左下
  ctx.quadraticCurveTo(569, 315, 583, 328) //中間1_下
  ctx.quadraticCurveTo(595, 334, 610, 330) //右上右
  ctx.quadraticCurveTo(605, 323, 605, 323) //右上左
  ctx.quadraticCurveTo(597, 321, 585, 321) //中間1_上
  ctx.quadraticCurveTo(571, 303, 555, 298) //左上
  ctx.fill()
  ctx.moveTo(550, 305) //左下
  ctx.quadraticCurveTo(563, 305, 583, 325) //中間1_下
  ctx.quadraticCurveTo(608, 329, 606, 327) //右上右
  ctx.stroke()
  ctx.closePath()
  // 左上→右下
  ctx.beginPath()
  ctx.moveTo(584, 316) //左上＿左奥
  ctx.quadraticCurveTo(591, 323, 553, 359) //左下
  ctx.quadraticCurveTo(559, 363, 566, 361) //右下
  ctx.quadraticCurveTo(593, 336, 592, 321) //右上
  ctx.quadraticCurveTo(586, 320, 584, 316) //左上
  ctx.fill()
  ctx.moveTo(588, 320) //左下
  ctx.quadraticCurveTo(580, 339, 556, 359) //中間1_下
  ctx.stroke()
  ctx.closePath()
}
