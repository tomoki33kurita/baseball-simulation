import { webKnots } from '@/util/canvas/lace/webKnots'
import { webTopJoint } from '../web'
import { GenuineState } from '@/features/genuine/types'
import { verticalParts4 } from './parts/vertical'
import { topCrossLaces, topLaces } from '../lace/webTop'

const laceOfLoopOfNet1 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(625 + x, 240 + y) // 左＿左
  ctx.fill()
  // 右側面
  // ctx.moveTo(638 + x, 285 + y) //
  // ctx.quadraticCurveTo(626 + x, 304 + y, 629 + x, 319 + y) //
  // // // 左側面
  // ctx.moveTo(626 + x, 238 + y) //
  // ctx.quadraticCurveTo(646 + x, 246 + y, 631 + x, 279 + y) //
  ctx.stroke()
}

const laceOfLoopOfNet2 = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(618 + x, 249 + y) // 左＿左
  // ctx.quadraticCurveTo()
  ctx.fill()
  // 左側面
  ctx.moveTo(617 + x, 250 + y) //
  ctx.quadraticCurveTo(629 + x, 251 + y, 649 + x, 260 + y) //
  // 右側面
  ctx.moveTo(645 + x, 268 + y) //
  ctx.quadraticCurveTo(660 + x, 277 + y, 662 + x, 295 + y) //
  ctx.stroke()
}

const netLace1 = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  // 左側
  ctx.beginPath()
  ctx.moveTo(552, 100) // 左上＿左
  ctx.quadraticCurveTo(539, 134, 576, 178) //右下＿左
  ctx.quadraticCurveTo(585, 177, 585, 177) //右下＿右
  ctx.quadraticCurveTo(567, 138, 565, 110) // 左上＿右
  ctx.quadraticCurveTo(559, 96, 552, 100) //
  ctx.moveTo(552, 100) // 左上＿左
  ctx.quadraticCurveTo(546, 134, 576, 178) //右下＿左
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.stroke()
  // 右側
  ctx.beginPath()
  ctx.moveTo(595, 197) // 左＿左
  ctx.quadraticCurveTo(596, 205, 596, 205) //左＿右
  ctx.quadraticCurveTo(641, 249, 641, 239) // 右＿右
  ctx.quadraticCurveTo(643, 232, 636, 227) // 右＿左
  ctx.quadraticCurveTo(642, 227, 595, 197) // 左＿左
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(596, 205) //左＿右
  ctx.quadraticCurveTo(621, 225, 641, 239) // 右＿右
  ctx.stroke()
  ctx.closePath()
}

const netLaceLeft1 = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  // 左a_1
  ctx.beginPath()
  ctx.moveTo(436, 100) // 左＿左
  ctx.quadraticCurveTo(427, 112, 436, 110) //左_右
  ctx.quadraticCurveTo(499, 112, 579, 149) //右＿右
  ctx.quadraticCurveTo(577, 131, 561, 129) // 右＿左
  ctx.quadraticCurveTo(482, 98, 436, 100) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(436, 110) // 左上＿左
  ctx.quadraticCurveTo(505, 105, 579, 145) //右＿右
  ctx.stroke()
  ctx.closePath()

  // 左a_2
  ctx.beginPath()
  ctx.moveTo(454, 113) // 左＿左
  ctx.quadraticCurveTo(440, 113, 440, 113) //左＿右
  ctx.quadraticCurveTo(476, 156, 564, 196) // 右＿左
  ctx.quadraticCurveTo(572, 195, 573, 188) // 右＿右
  ctx.quadraticCurveTo(477, 142, 454, 113) // 左＿左
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(596, 205) //左＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 左a_3
  ctx.beginPath()
  ctx.moveTo(443, 145) // 左＿右
  ctx.quadraticCurveTo(431, 147, 431, 147) //左＿左
  ctx.quadraticCurveTo(453, 175, 552, 213) // 右＿左
  ctx.quadraticCurveTo(560, 208, 560, 208) // 右＿右
  ctx.quadraticCurveTo(461, 166, 443, 145) // 左＿右
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(596, 205) //左＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 左a_4
  ctx.beginPath()
  ctx.moveTo(449, 178) // 左＿右
  ctx.quadraticCurveTo(438, 181, 438, 181) //左＿左
  ctx.quadraticCurveTo(455, 203, 539, 229) // 右＿左
  ctx.quadraticCurveTo(545, 223, 545, 223) // 右＿右
  ctx.quadraticCurveTo(455, 190, 449, 178) // 左＿右
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(596, 205) //左＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 左a_5
  ctx.beginPath()
  ctx.moveTo(458, 216) // 左＿右
  ctx.quadraticCurveTo(444, 212, 444, 212) //左＿左
  ctx.quadraticCurveTo(459, 236, 517, 270) // 右＿左
  ctx.quadraticCurveTo(519, 262, 519, 262) // 右＿右
  ctx.quadraticCurveTo(462, 225, 458, 216) // 左＿右
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(596, 205) //左＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()
}

const netLaceLeft2 = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  // 左b_1
  ctx.beginPath()
  ctx.moveTo(444, 160) // 左＿左
  ctx.quadraticCurveTo(439, 165, 453, 167) //左＿右
  ctx.quadraticCurveTo(518, 152, 552, 177) // 右＿右
  ctx.quadraticCurveTo(530, 135, 444, 160) // 左＿左
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(453, 167) //左＿右
  ctx.quadraticCurveTo(518, 145, 552, 177) // 右＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 左b_2
  ctx.beginPath()
  ctx.moveTo(443, 189) // 左＿左
  ctx.quadraticCurveTo(453, 199, 453, 199) //左＿右
  ctx.quadraticCurveTo(504, 183, 539, 198) // 右＿右
  ctx.quadraticCurveTo(524, 167, 443, 189) // 左＿左
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(453, 199) //左＿右
  ctx.quadraticCurveTo(504, 177, 539, 198) // 右＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 左b_3
  ctx.beginPath()
  ctx.moveTo(447, 217) // 左＿左
  ctx.quadraticCurveTo(455, 225, 455, 225) //左＿右
  ctx.quadraticCurveTo(510, 204, 527, 216) // 右＿右
  ctx.quadraticCurveTo(524, 188, 447, 217) // 左＿左
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(455, 225) //左＿右
  ctx.quadraticCurveTo(510, 198, 527, 216) // 右＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 左b_4
  ctx.beginPath()
  ctx.moveTo(480, 257) // 左＿左
  ctx.quadraticCurveTo(489, 265, 490, 257) //左＿右
  ctx.quadraticCurveTo(485, 243, 498, 245) // 右＿下
  ctx.quadraticCurveTo(502, 233, 492, 235) // 右＿上
  ctx.quadraticCurveTo(474, 237, 480, 257) // 左＿左
  ctx.fill()
  ctx.moveTo(500, 239) // 右＿右
  ctx.quadraticCurveTo(477, 243, 490, 264) // 右＿左
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()
}

const netLaceRight1 = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  // 右a_1
  ctx.beginPath()
  ctx.moveTo(581, 213) // 左＿左
  ctx.quadraticCurveTo(579, 218, 579, 218) // 左＿右
  ctx.quadraticCurveTo(612, 258, 662, 310) // 右＿下
  ctx.quadraticCurveTo(667, 311, 667, 296) // 右＿上
  ctx.quadraticCurveTo(613, 242, 585, 210) // 左＿左
  ctx.fill()
  ctx.moveTo(596, 205) //左＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 右a_2
  ctx.beginPath()
  ctx.moveTo(569, 226) // 左＿左
  ctx.quadraticCurveTo(567, 235, 567, 237) // 左＿右
  ctx.quadraticCurveTo(582, 274, 645, 339) // 右＿下
  ctx.quadraticCurveTo(652, 330, 652, 330) // 右＿上
  ctx.quadraticCurveTo(588, 261, 569, 226) // 左＿左
  ctx.fill()
  ctx.moveTo(596, 205) //左＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 右a_3
  ctx.beginPath()
  ctx.moveTo(555, 244) // 左＿左
  ctx.quadraticCurveTo(552, 252, 552, 252) // 左＿右
  ctx.quadraticCurveTo(564, 298, 632, 352) // 右＿下
  ctx.quadraticCurveTo(639, 348, 639, 348) // 右＿上
  ctx.quadraticCurveTo(575, 272, 555, 244) // 左＿左
  // ctx.quadraticCurveTo() //
  ctx.fill()
  ctx.moveTo(554, 255) //左＿左
  ctx.quadraticCurveTo(579, 297, 632, 352) // 右＿上
  ctx.stroke()
  ctx.closePath()

  // 右a_4
  ctx.beginPath()
  ctx.moveTo(538, 273) // 左＿右
  ctx.quadraticCurveTo(538, 278, 533, 278) // 左＿下
  ctx.quadraticCurveTo(539, 315, 605, 362) // 右＿下
  ctx.quadraticCurveTo(605, 354, 605, 354) // 右＿上
  ctx.quadraticCurveTo(538, 273, 538, 273) // 左＿左
  ctx.fill()
  ctx.moveTo(596, 205) //左＿右
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()
}

const netLaceRight2 = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = laceColor
  // 右b_1
  ctx.beginPath()
  ctx.moveTo(611, 204) // 左＿左
  ctx.quadraticCurveTo(633, 213, 641, 263) // 中間
  ctx.quadraticCurveTo(636, 290, 655, 325) // 右＿左
  ctx.quadraticCurveTo(662, 328, 662, 315) // 右＿右
  ctx.quadraticCurveTo(651, 289, 652, 263) // 中間
  ctx.quadraticCurveTo(644, 215, 611, 204) // 左＿左
  ctx.fill()
  ctx.moveTo(633, 217) //左＿右
  ctx.quadraticCurveTo(649, 254, 651, 303) // 右＿右
  ctx.quadraticCurveTo(659, 326, 659, 326) // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 右b_2
  ctx.beginPath()
  ctx.moveTo(597, 223) // 左＿左
  ctx.quadraticCurveTo(616, 247, 622, 282) // 中間
  ctx.quadraticCurveTo(624, 311, 640, 348) // 右＿下
  ctx.quadraticCurveTo(649, 337, 648, 339) // 右＿上
  ctx.quadraticCurveTo(632, 305, 631, 275) // 中間
  ctx.quadraticCurveTo(625, 241, 597, 223) //
  ctx.fill()
  ctx.moveTo(613, 237) //左＿右
  ctx.quadraticCurveTo(628, 264, 631, 303) // 右＿右
  ctx.quadraticCurveTo(633, 317, 647, 342) // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 右b_3
  ctx.beginPath()
  ctx.moveTo(581, 245) // 左＿左
  ctx.quadraticCurveTo(600, 271, 606, 303) // 中間
  ctx.quadraticCurveTo(604, 333, 622, 363) // 右_左
  ctx.quadraticCurveTo(631, 368, 633, 356) // 右_右
  ctx.quadraticCurveTo(619, 336, 613, 294) // 中間
  ctx.quadraticCurveTo(605, 261, 581, 245) // 左＿左
  ctx.fill()
  ctx.moveTo(597, 274) //左＿右
  ctx.quadraticCurveTo(608, 290, 610, 311) // 右＿右
  ctx.quadraticCurveTo(611, 350, 626, 363) // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 右b_4
  ctx.beginPath()
  ctx.moveTo(568, 260) // 左＿左
  ctx.quadraticCurveTo(585, 277, 592, 319) // 中間
  ctx.quadraticCurveTo(585, 333, 587, 356) // 右＿左
  ctx.quadraticCurveTo(598, 369, 601, 363) // 右＿右
  ctx.quadraticCurveTo(594, 340, 601, 321) // 中間
  ctx.quadraticCurveTo(592, 277, 568, 260) //
  ctx.fill()
  ctx.moveTo(590, 294) // 右＿右
  ctx.quadraticCurveTo(598, 309, 593, 329)
  ctx.quadraticCurveTo(588, 350, 596, 364) // 右＿右
  ctx.stroke()
  ctx.closePath()

  // 右b_5
  ctx.beginPath()
  ctx.moveTo(558, 293) // 左＿下
  ctx.quadraticCurveTo(560, 313, 551, 312) // 右＿上
  ctx.quadraticCurveTo(559, 324, 559, 324) // 右＿下
  ctx.quadraticCurveTo(571, 314, 571, 314) //
  ctx.quadraticCurveTo(571, 299, 558, 293) //
  // ctx.quadraticCurveTo() //
  ctx.fill()
  // ctx.moveTo(500, 239) // 右＿右
  // ctx.quadraticCurveTo(477, 243, 490, 264) // 右＿左
  // ctx.quadraticCurveTo() // 右＿右
  ctx.stroke()
  ctx.closePath()
}

export const tNet3Web = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
  const laceColor = state.lace.color
  webTopJoint(ctx, state.web.color, state.web2.color, state.stitch.color) // ウェブ先端側
  verticalParts4(ctx, state.web.color, state.stitch.color, state.lace.color)

  if (state.webLaceStyle.value === 'cross') {
    topCrossLaces(ctx, laceColor)
  } else {
    topLaces(ctx, laceColor) // 革紐＿ウェブ先端側
  }
  netLace1(ctx, laceColor) // 左・右
  netLaceLeft1(ctx, laceColor) // 左
  netLaceLeft2(ctx, laceColor) // 左
  netLaceRight1(ctx, laceColor) // 右
  netLaceRight2(ctx, laceColor) // 右

  //   // ウェブ上の結び目
  webKnots(ctx, laceColor, -100, 50)
  webKnots(ctx, laceColor, -120, 80)
  webKnots(ctx, laceColor, -30, -45)
}
