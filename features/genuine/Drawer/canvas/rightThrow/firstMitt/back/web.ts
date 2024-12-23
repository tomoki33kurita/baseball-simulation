import { BaseModel } from '@/types'

export const webTop = (ctx: CanvasRenderingContext2D, color: string, baseModel: BaseModel): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
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
  if (baseModel.productNumber === 'AKG-GT33') {
    ctx.lineWidth = 1.5
    ctx.strokeStyle = '#383838'
    ctx.beginPath()
    ctx.moveTo(566, 94) //
    ctx.quadraticCurveTo(562, 102, 560, 110) //
    ctx.moveTo(609, 142) //
    ctx.quadraticCurveTo(608, 151, 600, 155) //
    ctx.moveTo(660, 226) //
    ctx.quadraticCurveTo(648, 237, 648, 237)
    ctx.stroke()
    ctx.closePath()
  }
}

export const webTop2 = (ctx: CanvasRenderingContext2D, color: string, baseModel: BaseModel): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

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
}

export const webBottom = (ctx: CanvasRenderingContext2D, color: string, baseModel: BaseModel): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

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
}

export const webBottom2 = (ctx: CanvasRenderingContext2D, color: string, baseModel: BaseModel): void => {
  ctx.lineWidth = 1.0
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

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
  ctx.quadraticCurveTo(637, 206, 605, 167) //
  ctx.quadraticCurveTo(573, 112, 515, 77) // 左上

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
}
