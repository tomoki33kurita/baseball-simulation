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

export const twoPeaceWebCore1 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
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
  // ウェブ本体
  ctx.moveTo(542, 102) // 左上
  ctx.lineTo(511, 148) //左下
  ctx.lineTo(670, 270) //右下
  ctx.lineTo(695, 223) //右上
  ctx.quadraticCurveTo(622, 150, 542, 102) //左上
  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = '#383838'
  ctx.closePath()
}

export const twoPeaceWebCore2 = (ctx: CanvasRenderingContext2D, leatherColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(417, 150) // 左上
  ctx.quadraticCurveTo(365, 251, 459, 347) // 中央左
  ctx.quadraticCurveTo(505, 380, 550, 385) // 中央右
  ctx.quadraticCurveTo(605, 389, 651, 349) // 右上
  ctx.quadraticCurveTo(551, 246, 417, 150) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(688, 252) // 左上端_断面
  ctx.quadraticCurveTo(701, 225, 725, 252) // 左下
  ctx.stroke()
  ctx.closePath()

  // lace
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(423, 182) // 左上
  ctx.quadraticCurveTo(405, 221, 421, 269) //
  ctx.quadraticCurveTo(436, 303, 467, 333) //
  ctx.quadraticCurveTo(508, 365, 551, 367) //
  ctx.quadraticCurveTo(591, 368, 629, 352) //
  ctx.quadraticCurveTo(621, 336, 621, 336) //
  ctx.quadraticCurveTo(590, 353, 560, 353) //
  ctx.quadraticCurveTo(528, 356, 491, 329) //
  ctx.quadraticCurveTo(460, 308, 446, 282) //
  ctx.quadraticCurveTo(419, 233, 435, 191) //
  ctx.quadraticCurveTo(423, 182, 423, 182) //
  ctx.fill()
  ctx.moveTo(416, 220) // 左上端_断面
  ctx.quadraticCurveTo(430, 225, 430, 225) // 左下
  ctx.moveTo(418, 253) // 左上端_断面
  ctx.quadraticCurveTo(432, 251, 432, 251) // 左下
  ctx.moveTo(430, 285) // 左上端_断面
  ctx.quadraticCurveTo(443, 277, 443, 277) // 左下
  ctx.moveTo(453, 317) // 左上端_断面
  ctx.quadraticCurveTo(464, 307, 464, 307) // 左下
  ctx.moveTo(483, 345) // 左上端_断面
  ctx.quadraticCurveTo(491, 327, 491, 327) // 左下
  ctx.moveTo(518, 360) // 左上端_断面
  ctx.quadraticCurveTo(522, 347, 522, 347) // 左下
  ctx.moveTo(555, 367) // 左上端_断面
  ctx.quadraticCurveTo(559, 353, 559, 353) // 左下
  ctx.moveTo(592, 350) // 左上端_断面
  ctx.quadraticCurveTo(597, 362, 597, 362) // 左下
  // ctx.moveTo() // 左上端_断面
  // ctx.quadraticCurveTo() // 左下
  // ctx.moveTo() // 左上端_断面
  // ctx.quadraticCurveTo() // 左下

  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // ウェブ本体
  ctx.moveTo(444, 195) // 左上
  ctx.quadraticCurveTo(433, 226, 449, 265) // 左下
  ctx.quadraticCurveTo(457, 293, 492, 317) //
  ctx.quadraticCurveTo(526, 340, 555, 340) //
  ctx.quadraticCurveTo(582, 346, 613, 329) // 右上
  ctx.quadraticCurveTo(444, 195, 444, 195) //
  // ctx.quadraticCurveTo() //
  ctx.moveTo(447, 200) // 左上
  ctx.quadraticCurveTo(436, 226, 452, 265) // 左下
  ctx.quadraticCurveTo(460, 293, 495, 315) //
  ctx.quadraticCurveTo(523, 337, 553, 337) //
  ctx.quadraticCurveTo(579, 343, 608, 330) // 右上
  ctx.quadraticCurveTo(441, 192, 441, 200) //
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
