export const webTop = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(513, 40) // 左上奥
  ctx.quadraticCurveTo(513, 46, 498, 69) // 左下
  ctx.quadraticCurveTo(625, 135, 725, 252) //右下
  ctx.quadraticCurveTo(737, 237, 723, 226) //右上
  ctx.quadraticCurveTo(642, 99, 518, 37) //左上
  ctx.quadraticCurveTo(513, 40, 513, 40) // 左上奥
  ctx.fill()
  ctx.moveTo(518, 37) // 左上端_断面
  ctx.quadraticCurveTo(515, 52, 498, 69) // 左下
  ctx.moveTo(502, 66) // 左
  ctx.quadraticCurveTo(554, 91, 607, 136) //
  ctx.quadraticCurveTo(627, 149, 656, 177) //
  ctx.quadraticCurveTo(705, 214, 725, 252) // 右
  ctx.stroke()
  ctx.closePath()

  // stitch
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(515, 65) // 左上
  ctx.quadraticCurveTo(507, 64, 512, 69) // 左下
  ctx.quadraticCurveTo(630, 131, 722, 240) //
  ctx.moveTo(515, 65) // 左上
  ctx.quadraticCurveTo(600, 105, 722, 233) // 左下
  ctx.quadraticCurveTo(722, 240, 722, 240) //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = '#383838'
  ctx.closePath()
}

export const web = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(499, 69) // 左上
  ctx.quadraticCurveTo(535, 85, 519, 108) //
  ctx.quadraticCurveTo(502, 141, 475, 176) // 左下
  ctx.quadraticCurveTo(589, 247, 652, 314) // 右下
  ctx.quadraticCurveTo(669, 309, 674, 278) //
  ctx.quadraticCurveTo(681, 272, 689, 250) //
  ctx.quadraticCurveTo(700, 240, 717, 259) // 右上
  ctx.quadraticCurveTo(725, 252, 725, 252) //
  ctx.quadraticCurveTo(642, 145, 499, 69) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(688, 252) // 左上端_断面
  ctx.quadraticCurveTo(701, 225, 725, 252) // 左下
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // ウェブ本体1
  ctx.moveTo(530, 110) // 左上
  ctx.quadraticCurveTo(524, 109, 527, 116) // 左下
  ctx.quadraticCurveTo(610, 172, 683, 245) // 右下
  ctx.quadraticCurveTo(685, 240, 685, 240) // 右上
  ctx.quadraticCurveTo(619, 175, 530, 110) // 左上

  // ウェブ本体2
  ctx.moveTo(515, 144) // 左上
  ctx.quadraticCurveTo(508, 141, 511, 148) //左下
  ctx.quadraticCurveTo(594, 204, 670, 270) //右下
  ctx.quadraticCurveTo(674, 271, 672, 267) //右上
  ctx.quadraticCurveTo(588, 194, 515, 144) //左上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = '#383838'
  ctx.closePath()
}

export const webOfShallowPocket = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  ctx.beginPath()
  ctx.moveTo(500, 70) // 左上
  ctx.quadraticCurveTo(502, 141, 475, 176) // 左下
  ctx.quadraticCurveTo(589, 247, 652, 314) // 右下
  ctx.quadraticCurveTo(695, 253, 725, 252) // 右上
  ctx.quadraticCurveTo(638, 150, 500, 70) // 左上
  ctx.fill()
  ctx.moveTo(500, 70) // 左上端_断面
  ctx.quadraticCurveTo(510, 140, 475, 176) // 左下
  ctx.moveTo(652, 314) // 左上端_断面
  ctx.quadraticCurveTo(700, 240, 725, 252) // 左下
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // ウェブ外側
  ctx.moveTo(504, 73) // 左上
  ctx.quadraticCurveTo(511, 120, 493, 157) // 左下
  ctx.quadraticCurveTo(585, 216, 663, 288) // 右下
  ctx.quadraticCurveTo(696, 240, 722, 248) // 右上

  // ウェブ内側
  ctx.moveTo(507, 75) // 左上
  ctx.quadraticCurveTo(515, 120, 498, 155) // 左下
  ctx.quadraticCurveTo(585, 210, 662, 282) // 右下
  ctx.quadraticCurveTo(693, 240, 719, 244) // 右上

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = '#383838'
  ctx.closePath()
}
