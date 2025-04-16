export const inMachiOfCommon = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 親指
  ctx.beginPath()
  ctx.moveTo(413, 497) // 左下
  ctx.quadraticCurveTo(428, 498, 443, 505) // 右下
  ctx.quadraticCurveTo(452, 508, 447, 503) // 右上
  ctx.quadraticCurveTo(435, 493, 410, 494) // 左下
  ctx.quadraticCurveTo(413, 497, 413, 497) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 縦方向
  // 1番目
  ctx.beginPath()
  ctx.moveTo(566, 132) // 左上
  ctx.quadraticCurveTo(552, 145, 563, 171) // 左下
  ctx.quadraticCurveTo(570, 175, 572, 167) // 右下
  ctx.quadraticCurveTo(568, 156, 573, 141) // 右上
  ctx.quadraticCurveTo(574, 129, 566, 132) // 左上
  ctx.moveTo(572, 133) // 左上
  ctx.quadraticCurveTo(561, 148, 569, 172) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 2番目
  ctx.beginPath()
  ctx.moveTo(593, 238) // 左上
  ctx.quadraticCurveTo(589, 252, 603, 273) // 左下
  ctx.quadraticCurveTo(606, 275, 608, 267) // 右下
  ctx.quadraticCurveTo(602, 257, 600, 244) // 右上
  ctx.quadraticCurveTo(596, 236, 593, 238) // 左上
  ctx.moveTo(598, 241) // 左上
  ctx.quadraticCurveTo(595, 248, 608, 270) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 3番目
  ctx.beginPath()
  ctx.moveTo(604, 354) // 左上
  ctx.quadraticCurveTo(595, 364, 601, 389) // 左下
  ctx.quadraticCurveTo(603, 392, 606, 389) // 右下
  ctx.quadraticCurveTo(605, 375, 608, 359) // 右上
  ctx.quadraticCurveTo(604, 354, 604, 354) // 左上
  ctx.moveTo(607, 358) // 上
  ctx.quadraticCurveTo(601, 370, 605, 387) // 下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const inMachiOfNormalPocket = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color
  // 小指
  // 横方向
  // 一番左
  ctx.beginPath()
  ctx.moveTo(421, 175) // 左上
  ctx.quadraticCurveTo(440, 185, 450, 177) // 右下
  ctx.quadraticCurveTo(442, 173, 442, 173) // 右上
  ctx.quadraticCurveTo(439, 175, 421, 175) //
  ctx.moveTo(421, 175)
  ctx.quadraticCurveTo(440, 178, 445, 174) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 真ん中
  ctx.beginPath()
  ctx.moveTo(476, 175) // 左上
  ctx.quadraticCurveTo(473, 178, 477, 181) // 左下
  ctx.quadraticCurveTo(490, 190, 509, 184) // 右下
  ctx.quadraticCurveTo(505, 179, 498, 178) // 右上
  ctx.quadraticCurveTo(485, 180, 476, 175) // 右上
  ctx.moveTo(476, 176) // 左上
  ctx.quadraticCurveTo(475, 184, 504, 180) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 3番目
  ctx.beginPath()
  ctx.moveTo(538, 185) // 左上
  ctx.quadraticCurveTo(532, 185, 536, 191) // 左下
  ctx.quadraticCurveTo(542, 202, 564, 204) // 右下
  ctx.quadraticCurveTo(564, 195, 559, 191) // 右上
  ctx.quadraticCurveTo(548, 190, 538, 185) // 左上
  ctx.moveTo(537, 185) // 左上
  ctx.quadraticCurveTo(533, 191, 561, 195) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

export const inMachiOfShallowPocket = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.5
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  // 小指
  // 横方向
  // 一番左
  ctx.beginPath()
  ctx.moveTo(421, 175) // 左上
  ctx.quadraticCurveTo(440, 185, 450, 177) // 右下
  ctx.quadraticCurveTo(442, 173, 442, 173) // 右上
  ctx.quadraticCurveTo(439, 175, 421, 175) //
  ctx.moveTo(421, 175)
  ctx.quadraticCurveTo(440, 178, 445, 174) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 真ん中
  ctx.beginPath()
  ctx.moveTo(491, 180) // 左上
  ctx.quadraticCurveTo(488, 183, 492, 186) // 左下
  ctx.quadraticCurveTo(505, 195, 524, 189) // 右下
  ctx.quadraticCurveTo(520, 184, 513, 183) // 右上
  ctx.quadraticCurveTo(500, 185, 491, 180) // 右上
  ctx.moveTo(491, 181) // 左上
  ctx.quadraticCurveTo(490, 189, 519, 185) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
