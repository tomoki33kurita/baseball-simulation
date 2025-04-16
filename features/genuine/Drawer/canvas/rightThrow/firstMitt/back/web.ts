import { BaseModel } from '@/types'

export const webTop = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(555, 31) // 左上
  ctx.quadraticCurveTo(538, 33, 535, 48) //
  ctx.quadraticCurveTo(533, 65, 515, 70) //
  ctx.quadraticCurveTo(512, 77, 523, 82) //
  ctx.quadraticCurveTo(563, 111, 590, 164) //
  ctx.quadraticCurveTo(622, 223, 662, 270) // 右下
  ctx.quadraticCurveTo(676, 246, 665, 217) //
  ctx.quadraticCurveTo(660, 138, 657, 130) //
  ctx.quadraticCurveTo(655, 106, 638, 88) //
  ctx.quadraticCurveTo(600, 43, 555, 31) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.5
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // webTop部分
  // 左辺
  ctx.moveTo(555, 52) // 上
  ctx.quadraticCurveTo(547, 61, 546, 73) // 下
  // 右辺
  ctx.moveTo(660, 222) // 上
  ctx.quadraticCurveTo(664, 238, 660, 243) // 下
  // 上辺＿上
  ctx.moveTo(555, 52) // 上
  ctx.quadraticCurveTo(617, 92, 632, 121) //
  ctx.quadraticCurveTo(655, 164, 660, 222) // 右下
  // 上辺＿下
  ctx.moveTo(551, 56) // 上
  ctx.quadraticCurveTo(588, 74, 624, 117) //
  ctx.quadraticCurveTo(651, 159, 659, 225) // 右下
  // 下辺＿上
  ctx.moveTo(547, 67) // 上
  ctx.quadraticCurveTo(625, 135, 646, 216) //
  ctx.quadraticCurveTo(648, 226, 660, 243) // 右下
  // 下辺＿下
  ctx.moveTo(545, 72) // 上
  ctx.quadraticCurveTo(615, 130, 644, 220) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webTop2 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor

  ctx.beginPath()
  ctx.moveTo(555, 31) // 左上
  ctx.quadraticCurveTo(538, 33, 535, 48) //
  ctx.quadraticCurveTo(533, 65, 515, 70) //
  ctx.quadraticCurveTo(512, 77, 523, 82) //
  ctx.quadraticCurveTo(542, 69, 612, 143) //

  ctx.quadraticCurveTo(630, 170, 662, 270) // 右下
  ctx.quadraticCurveTo(676, 246, 665, 217) //
  ctx.quadraticCurveTo(660, 138, 657, 130) //
  ctx.quadraticCurveTo(655, 106, 638, 88) //
  ctx.quadraticCurveTo(600, 43, 555, 31) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.5
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // webTop部分
  // 左辺
  ctx.moveTo(555, 52) // 上
  ctx.quadraticCurveTo(547, 61, 546, 73) // 下
  // 右辺
  ctx.moveTo(660, 222) // 上
  ctx.quadraticCurveTo(664, 238, 660, 243) // 下
  // 上辺＿上
  ctx.moveTo(555, 52) // 上
  ctx.quadraticCurveTo(617, 92, 632, 121) //
  ctx.quadraticCurveTo(655, 164, 660, 222) // 右下
  // 上辺＿下
  ctx.moveTo(551, 56) // 上
  ctx.quadraticCurveTo(588, 74, 624, 117) //
  ctx.quadraticCurveTo(651, 159, 659, 225) // 右下
  // 下辺＿上
  ctx.moveTo(547, 67) // 上
  ctx.quadraticCurveTo(640, 122, 651, 216) //
  ctx.quadraticCurveTo(648, 226, 665, 243) // 右下
  // 下辺＿下
  ctx.moveTo(545, 72) // 上
  ctx.quadraticCurveTo(635, 125, 648, 220) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webTopJoint = (ctx: CanvasRenderingContext2D, webColor: string, web2Color: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = webColor

  // ウェブ本体_上
  ctx.beginPath()
  ctx.moveTo(555, 31) // 左上
  ctx.quadraticCurveTo(538, 33, 535, 48) //
  ctx.quadraticCurveTo(533, 65, 515, 70) //
  ctx.quadraticCurveTo(512, 77, 523, 82) //
  ctx.quadraticCurveTo(563, 111, 590, 164) //

  ctx.quadraticCurveTo(622, 223, 662, 270) // 右下
  ctx.quadraticCurveTo(676, 246, 665, 217) //
  ctx.quadraticCurveTo(660, 138, 657, 130) //
  ctx.quadraticCurveTo(655, 106, 638, 88) //
  ctx.quadraticCurveTo(600, 43, 555, 31) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ウェブ本体_下
  ctx.beginPath()
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = web2Color
  ctx.moveTo(535, 54) // 左上
  ctx.quadraticCurveTo(555, 75, 555, 75)
  ctx.quadraticCurveTo(574, 72, 574, 72)
  ctx.quadraticCurveTo(596, 97, 596, 97)
  ctx.quadraticCurveTo(591, 115, 591, 115)
  ctx.quadraticCurveTo(602, 128, 602, 128)
  ctx.quadraticCurveTo(615, 124, 615, 124)
  ctx.quadraticCurveTo(632, 148, 632, 148)
  ctx.quadraticCurveTo(626, 169, 626, 169)
  ctx.quadraticCurveTo(634, 187, 634, 187)

  ctx.quadraticCurveTo(647, 181, 647, 181)
  ctx.quadraticCurveTo(655, 211, 655, 211)
  ctx.quadraticCurveTo(653, 237, 653, 237)
  ctx.quadraticCurveTo(664, 264, 664, 264)
  ctx.quadraticCurveTo(662, 271, 662, 271)
  ctx.quadraticCurveTo(622, 223, 590, 164)
  ctx.quadraticCurveTo(563, 111, 523, 82) //
  ctx.quadraticCurveTo(512, 77, 515, 70) //
  ctx.quadraticCurveTo(533, 65, 535, 48) //
  ctx.quadraticCurveTo(535, 54, 535, 54) //

  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.strokeStyle = '#282828'
  ctx.moveTo(535, 54) // 左上
  ctx.quadraticCurveTo(632, 144, 664, 264)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()

  // stitch
  ctx.lineWidth = 1.5
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  ctx.moveTo(542, 65) // 上
  ctx.quadraticCurveTo(631, 156, 660, 262) // 下
  ctx.moveTo(538, 68) // 上
  ctx.quadraticCurveTo(627, 159, 656, 265) // 下

  // // 上辺＿上
  ctx.moveTo(556, 54) // 上
  ctx.quadraticCurveTo(650, 125, 663, 246) //
  ctx.moveTo(560, 52) // 上
  ctx.quadraticCurveTo(654, 123, 667, 244) //
  // ctx.quadraticCurveTo() //
  // // 上辺＿下
  // ctx.moveTo(551, 56) // 上
  // ctx.quadraticCurveTo(588, 74, 624, 117) //
  // ctx.quadraticCurveTo(651, 159, 659, 225) // 右下
  // // 下辺＿上
  // ctx.moveTo(547, 67) // 上
  // ctx.quadraticCurveTo(625, 135, 646, 216) //
  // ctx.quadraticCurveTo(648, 226, 660, 243) // 右下
  // // 下辺＿下
  // ctx.moveTo(545, 72) // 上
  // ctx.quadraticCurveTo(615, 130, 644, 220) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webBottom = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(516, 76) // 左上
  ctx.quadraticCurveTo(508, 74, 507, 83) // 左下
  ctx.quadraticCurveTo(496, 119, 480, 142) //
  ctx.quadraticCurveTo(476, 145, 483, 149) //
  ctx.quadraticCurveTo(628, 318, 628, 318) //
  ctx.quadraticCurveTo(644, 318, 641, 304) //
  ctx.quadraticCurveTo(651, 292, 663, 270) //
  ctx.quadraticCurveTo(617, 218, 580, 166) //
  ctx.quadraticCurveTo(554, 112, 515, 77) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.moveTo(511, 79) // 左上
  ctx.quadraticCurveTo(515, 85, 506, 95) //
  ctx.quadraticCurveTo(495, 125, 493, 135) //
  ctx.quadraticCurveTo(483, 140, 483, 140) //
  ctx.moveTo(478, 146) // 左上
  ctx.quadraticCurveTo(488, 143, 495, 136) //
  ctx.quadraticCurveTo(498, 118, 498, 121) //
  ctx.moveTo(497, 120) // 左上
  ctx.quadraticCurveTo(495, 132, 504, 137) //
  ctx.quadraticCurveTo(575, 220, 639, 304) //
  ctx.moveTo(515, 78) // 左上
  ctx.quadraticCurveTo(517, 86, 509, 97) //
  ctx.quadraticCurveTo(503, 120, 503, 120) //
  ctx.quadraticCurveTo(505, 125, 503, 135) //
  ctx.stroke()
  ctx.closePath()

  // stitch
  ctx.lineWidth = 1.5
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // webBottom部分
  // 左辺
  ctx.moveTo(515, 102) // 上
  ctx.lineTo(506, 129) // 下
  // 右辺
  ctx.moveTo(645, 273) // 上
  ctx.lineTo(638, 295) // 下
  // 上辺＿上
  ctx.moveTo(515, 102) // 上
  ctx.quadraticCurveTo(573, 166, 645, 273) // 右下
  // 上辺＿下
  ctx.moveTo(512, 108) // 上
  ctx.quadraticCurveTo(553, 145, 644, 277) // 右下
  // 下辺＿上
  ctx.moveTo(507, 126) // 上
  ctx.quadraticCurveTo(531, 146, 638, 290) // 右下
  // 下辺＿下
  ctx.moveTo(505, 129) // 上
  ctx.quadraticCurveTo(537, 158, 637, 294) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webBottom2 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor

  // 手入れ口部分
  ctx.beginPath()
  ctx.moveTo(516, 76) // 左上
  ctx.quadraticCurveTo(508, 74, 507, 83) // 左下
  ctx.quadraticCurveTo(496, 119, 480, 142) //
  ctx.quadraticCurveTo(476, 145, 483, 149) //
  // ctx.quadraticCurveTo(628, 318, 628, 318) //
  ctx.quadraticCurveTo(566, 195, 628, 318) //
  ctx.quadraticCurveTo(644, 318, 641, 304) //
  ctx.quadraticCurveTo(651, 292, 663, 270) //
  ctx.quadraticCurveTo(644, 236, 605, 167) //
  ctx.quadraticCurveTo(573, 119, 515, 77) // 左上

  ctx.fill()
  ctx.stroke()
  ctx.moveTo(511, 79) // 左上
  ctx.quadraticCurveTo(515, 85, 506, 95) //
  ctx.quadraticCurveTo(495, 125, 493, 135) //
  ctx.quadraticCurveTo(483, 140, 483, 140) //
  ctx.moveTo(478, 146) // 左上
  ctx.quadraticCurveTo(488, 143, 495, 136) //
  ctx.quadraticCurveTo(498, 118, 498, 121) //
  // ctx.moveTo(497, 120) // 左上
  // ctx.quadraticCurveTo(495, 132, 504, 137) //
  // ctx.quadraticCurveTo(585, 188, 639, 304) //
  ctx.moveTo(515, 78) // 左上
  ctx.quadraticCurveTo(517, 86, 509, 97) //
  ctx.quadraticCurveTo(503, 120, 503, 120) //
  ctx.quadraticCurveTo(505, 125, 503, 135) //
  ctx.stroke()
  ctx.closePath()

  ctx.lineWidth = 1.5
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])

  // webBottom部分
  // 左辺
  ctx.moveTo(523, 93) // 上
  ctx.lineTo(514, 119) // 下
  // 右辺
  ctx.moveTo(655, 269) // 上
  ctx.lineTo(640, 292) // 下
  // 上辺＿上
  ctx.moveTo(523, 93) // 上
  ctx.quadraticCurveTo(611, 167, 655, 269) // 右下
  // 上辺＿下
  ctx.moveTo(520, 98) // 上
  ctx.quadraticCurveTo(610, 171, 651, 273) // 右下
  // 下辺＿上
  ctx.moveTo(514, 119) // 上
  ctx.quadraticCurveTo(593, 193, 640, 292) // 右下
  // 下辺＿下
  ctx.moveTo(517, 113) // 上
  ctx.quadraticCurveTo(597, 190, 645, 285) // 右下

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
