export const connectIndexToMiddle = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上＿右下部分
  ctx.beginPath()
  ctx.moveTo(426, 79) // 左上
  ctx.quadraticCurveTo(413, 76, 420, 90) // 左下
  ctx.quadraticCurveTo(449, 105, 449, 105) // 右下_中間
  ctx.quadraticCurveTo(470, 110, 500, 128) // 右下
  ctx.quadraticCurveTo(512, 123, 506, 116) // 右上
  ctx.quadraticCurveTo(471, 95, 426, 79) // 左上
  ctx.fill()
  // 左上の側面ライン
  ctx.moveTo(420, 80) // 左上
  ctx.quadraticCurveTo(440, 92, 469, 99) // 右下
  ctx.stroke()
  ctx.closePath()
  // 左下＿右上部分
  ctx.beginPath()
  ctx.moveTo(427, 107) // 左上
  ctx.quadraticCurveTo(420, 112, 424, 118) // 左下
  ctx.quadraticCurveTo(465, 120, 511, 96) // 右下
  ctx.quadraticCurveTo(523, 85, 501, 84) // 右上
  ctx.quadraticCurveTo(462, 109, 427, 107) // 左上
  ctx.fill()
  // 右上の側面ライン
  ctx.moveTo(440, 106) // 左下
  ctx.quadraticCurveTo(468, 110, 506, 84) // 右上
  ctx.stroke()
  ctx.closePath()
}

export const connectMiddleToRing = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上＿右下部分
  ctx.beginPath()
  ctx.moveTo(556, 105) // 左上
  ctx.quadraticCurveTo(547, 96, 548, 114) // 左下
  ctx.quadraticCurveTo(563, 138, 563, 138) // 右下_中間
  ctx.quadraticCurveTo(597, 178, 597, 178) // 右下
  ctx.quadraticCurveTo(611, 183, 606, 169) // 右上
  ctx.quadraticCurveTo(556, 105, 556, 105) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 左上の側面ライン＿上
  ctx.moveTo(555, 106) // 左上
  ctx.quadraticCurveTo(556, 114, 580, 142) // 右下
  ctx.stroke()
  // 左上の側面ライン＿下
  ctx.moveTo(590, 156) // 左上
  ctx.quadraticCurveTo(605, 171, 607, 171) // 右下
  ctx.stroke()
  // 左下＿右上部分
  ctx.beginPath()
  ctx.moveTo(547, 131) // 左上
  ctx.quadraticCurveTo(541, 132, 541, 139) // 左下
  ctx.quadraticCurveTo(570, 160, 613, 156) // 右下
  ctx.quadraticCurveTo(621, 146, 613, 141) // 右上
  ctx.quadraticCurveTo(575, 148, 547, 131) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 右上の側面ライン
  ctx.moveTo(548, 132) // 左下
  ctx.quadraticCurveTo(575, 148, 614, 145) // 右上
  ctx.stroke()
}

export const connectRingToLittle = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 左上＿右下部分
  ctx.beginPath()
  ctx.moveTo(653, 165) // 左上
  ctx.quadraticCurveTo(650, 158, 644, 164) // 左下_中間
  ctx.quadraticCurveTo(638, 176, 649, 195) // 左下_中間
  ctx.quadraticCurveTo(671, 239, 671, 239) // 右下
  ctx.quadraticCurveTo(680, 247, 679, 233) // 右上
  ctx.quadraticCurveTo(656, 183, 653, 165) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 左上の側面ライン
  ctx.moveTo(650, 164) // 左上
  ctx.quadraticCurveTo(658, 202, 677, 232) // 右下
  ctx.stroke()
  // 左下＿右上部分
  ctx.beginPath()
  ctx.moveTo(638, 193) // 左上
  ctx.quadraticCurveTo(631, 198, 636, 205) // 左下
  ctx.quadraticCurveTo(657, 215, 690, 216) // 右下
  ctx.quadraticCurveTo(696, 207, 690, 201) // 右上
  ctx.quadraticCurveTo(657, 202, 638, 193) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  // 右上の側面ライン
  ctx.moveTo(638, 193) // 左下
  ctx.quadraticCurveTo(658, 204, 690, 205) // 右上
  ctx.stroke()
}
