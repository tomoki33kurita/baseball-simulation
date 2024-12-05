export const webToCatchFace = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 右側
  ctx.beginPath()
  ctx.moveTo(527 + x, 194 + y) // 左上
  ctx.quadraticCurveTo(511 + x, 207 + y, 500 + x, 212 + y) // 左下
  ctx.quadraticCurveTo(493 + x, 219 + y, 498 + x, 226 + y) // 右下
  ctx.quadraticCurveTo(518 + x, 219 + y, 534 + x, 204 + y) //
  ctx.quadraticCurveTo(539 + x, 195 + y, 535 + x, 192 + y) // 右上
  ctx.quadraticCurveTo(529 + x, 188 + y, 527 + x, 194 + y) // 左上
  ctx.fill()
  ctx.moveTo(533 + x, 191 + y) // 上
  ctx.quadraticCurveTo(520 + x, 205 + y, 498 + x, 216 + y) //
  ctx.stroke()
  ctx.closePath()

  // 左側
  ctx.beginPath()
  ctx.moveTo(498 + x, 196 + y) // 左上
  ctx.quadraticCurveTo(478 + x, 218 + y, 486 + x, 231 + y) // 左下
  ctx.quadraticCurveTo(500 + x, 237 + y, 500 + x, 227 + y) // 右下
  ctx.quadraticCurveTo(491 + x, 221 + y, 508 + x, 202 + y) //
  ctx.quadraticCurveTo(520 + x, 192 + y, 529 + x, 192 + y) //
  ctx.quadraticCurveTo(533 + x, 191 + y, 535 + x, 191 + y) // 右上
  ctx.quadraticCurveTo(517 + x, 173 + y, 498 + x, 196 + y) //
  ctx.fill()
  ctx.moveTo(531 + x, 188 + y) // 上
  ctx.quadraticCurveTo(514 + x, 188 + y, 505 + x, 199 + y) //
  ctx.quadraticCurveTo(485 + x, 221 + y, 496 + x, 233 + y) // 下
  ctx.stroke()
  ctx.closePath()
}

export const laceOfWebTopToIndexFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 人差し指右上からweb先端への繋ぎ部分奥1
  ctx.beginPath()
  ctx.moveTo(465, 63) // 左下
  ctx.quadraticCurveTo(465, 69, 472, 72) // 右下
  ctx.quadraticCurveTo(479, 38, 508, 52) // 右上
  ctx.quadraticCurveTo(514, 46, 512, 39) // 右上上
  ctx.quadraticCurveTo(479, 29, 465, 63) //
  ctx.fill()
  ctx.moveTo(479, 49) // 上
  ctx.quadraticCurveTo(471, 59, 470, 71) // 下
  ctx.stroke()
  ctx.closePath()
  // 人差し指右上からweb先端への繋ぎ部分奥2
  ctx.beginPath()
  ctx.moveTo(443, 55) // 左左
  ctx.quadraticCurveTo(455, 61, 455, 61) // 左右
  ctx.quadraticCurveTo(475, 33, 509, 49) // 右下
  ctx.quadraticCurveTo(516, 46, 513, 40) // 右上
  ctx.quadraticCurveTo(475, 23, 443, 55) // 左左
  ctx.fill()
  ctx.moveTo(450, 60) // 左下
  ctx.quadraticCurveTo(475, 27, 512, 47) // 右上
  ctx.stroke()
  ctx.closePath()
  // 人差し指右上からweb先端への繋ぎ部分奥3
  ctx.beginPath()
  ctx.moveTo(419, 57) // 左左
  ctx.quadraticCurveTo(425, 62, 425, 62) // 左右
  ctx.quadraticCurveTo(459, 38, 505, 56) // 右下
  ctx.quadraticCurveTo(512, 54, 510, 45) // 右上
  ctx.quadraticCurveTo(474, 37, 455, 41) //
  ctx.quadraticCurveTo(421, 45, 419, 57) //
  ctx.fill()
  ctx.moveTo(421, 58) // 左下
  ctx.quadraticCurveTo(462, 31, 507, 53) // 右上
  ctx.stroke()
  ctx.closePath()
}

export const webToIndexFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 上1
  ctx.beginPath()
  ctx.moveTo(464, 71) // 左上
  ctx.quadraticCurveTo(468, 81, 466, 81) // 左下
  ctx.quadraticCurveTo(469, 70, 487, 74) //
  ctx.quadraticCurveTo(510, 85, 522, 102) // 右下
  ctx.quadraticCurveTo(524, 100, 526, 95) // 右上
  ctx.quadraticCurveTo(522, 83, 499, 69) //
  ctx.quadraticCurveTo(479, 57, 464, 71) //
  ctx.fill()
  ctx.moveTo(464, 72) // 左
  ctx.quadraticCurveTo(476, 62, 492, 71) //
  ctx.quadraticCurveTo(504, 77, 524, 98) //右
  ctx.stroke()
  ctx.closePath()
  // 上2
  ctx.beginPath()
  ctx.moveTo(466, 95) // 左上
  ctx.quadraticCurveTo(462, 100, 469, 104) // 左下
  ctx.quadraticCurveTo(479, 96, 510, 125) // 右下
  ctx.quadraticCurveTo(515, 115, 515, 115) // 右上
  ctx.quadraticCurveTo(490, 97, 490, 97) //
  ctx.quadraticCurveTo(477, 89, 466, 95) //
  ctx.fill()
  ctx.moveTo(465, 99) // 左
  ctx.quadraticCurveTo(482, 91, 512, 120) //
  ctx.stroke()
  ctx.closePath()
  // 上3
  ctx.beginPath()
  ctx.moveTo(452, 124) // 左上
  ctx.quadraticCurveTo(444, 127, 445, 133) // 左下
  ctx.quadraticCurveTo(472, 141, 487, 159) // 右下
  ctx.quadraticCurveTo(493, 151, 493, 151) // 右上
  ctx.quadraticCurveTo(481, 132, 452, 124) // 左上
  ctx.fill()
  ctx.moveTo(447, 131) // 左
  ctx.quadraticCurveTo(478, 139, 489, 157) //
  ctx.stroke()
  ctx.closePath()
  // 上4
  ctx.beginPath()
  ctx.moveTo(422, 191) // 左上
  ctx.quadraticCurveTo(422, 201, 422, 201) // 左下
  ctx.quadraticCurveTo(442, 209, 442, 209) // 右下
  ctx.quadraticCurveTo(451, 199, 451, 199) // 右上
  ctx.quadraticCurveTo(429, 190, 422, 191) // 左上
  ctx.fill()
  ctx.moveTo(422, 201) // 左上
  ctx.quadraticCurveTo(431, 202, 442, 209) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const laceOfWebTopToThumbFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // 奥1
  ctx.beginPath()
  ctx.moveTo(688, 283) // 左下左
  ctx.quadraticCurveTo(702, 281, 702, 281) // 左下右
  ctx.quadraticCurveTo(705, 275, 720, 275) // 右上右
  ctx.quadraticCurveTo(720, 271, 716, 269) // 右上左
  ctx.quadraticCurveTo(695, 270, 688, 283) // 左下左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 奥2
  ctx.beginPath()
  ctx.moveTo(710, 252) // 左上
  ctx.quadraticCurveTo(722, 280, 722, 280) //
  ctx.quadraticCurveTo(726, 290, 718, 297) // 左下
  ctx.quadraticCurveTo(720, 303, 720, 303) // 右下
  ctx.quadraticCurveTo(733, 286, 724, 253) // 右上
  ctx.fill()
  ctx.moveTo(715, 252) // 上
  ctx.quadraticCurveTo(725, 272, 725, 291) //
  ctx.stroke()
  ctx.closePath()
  // 奥3
  ctx.beginPath()
  ctx.moveTo(724, 253) // 左上
  ctx.quadraticCurveTo(735, 277, 723, 306) //
  ctx.quadraticCurveTo(718, 319, 699, 323) // 左下
  ctx.quadraticCurveTo(697, 329, 697, 329) // 左下下
  ctx.quadraticCurveTo(720, 327, 729, 306) //
  ctx.quadraticCurveTo(745, 260, 728, 244) //
  ctx.fill()
  ctx.moveTo(726, 250) // 上
  ctx.quadraticCurveTo(743, 265, 723, 314) //
  ctx.quadraticCurveTo(710, 326, 698, 327) //
  ctx.stroke()
  ctx.closePath()
}

export const webToThumbFinger = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color
  // // 上1
  ctx.beginPath()
  ctx.moveTo(691, 248) // 左上
  ctx.quadraticCurveTo(715, 285, 695, 303) // 下
  ctx.quadraticCurveTo(714, 300, 712, 272) //
  ctx.quadraticCurveTo(711, 257, 700, 241) //
  ctx.quadraticCurveTo(693, 244, 691, 248) //
  ctx.fill()
  ctx.moveTo(694, 245) // 上
  ctx.quadraticCurveTo(720, 277, 703, 299) //
  ctx.stroke()
  ctx.closePath()
  // // 上2
  ctx.beginPath()
  ctx.moveTo(678, 273) // 左上
  ctx.quadraticCurveTo(685, 293, 678, 308) // 左下
  ctx.quadraticCurveTo(682, 314, 687, 307) // 右下
  ctx.quadraticCurveTo(697, 291, 683, 263) // 右上
  ctx.quadraticCurveTo(680, 273, 678, 273) // 左上
  ctx.fill()
  ctx.moveTo(680, 272) // 上
  ctx.quadraticCurveTo(690, 285, 681, 311) //
  ctx.stroke()
  ctx.closePath()
  // 上3
  ctx.beginPath()
  ctx.moveTo(661, 310) // 左上
  ctx.quadraticCurveTo(661, 326, 656, 327) // 左下
  ctx.quadraticCurveTo(654, 333, 660, 331) // 右下
  ctx.quadraticCurveTo(672, 319, 667, 301) // 右上
  ctx.quadraticCurveTo(661, 310, 661, 310) // 左上
  ctx.fill()
  ctx.moveTo(663, 306) // 上
  ctx.quadraticCurveTo(667, 320, 656, 331) //
  ctx.stroke()
  ctx.closePath()
  // 上4
  ctx.beginPath()
  ctx.moveTo(589, 348) // 左上
  ctx.quadraticCurveTo(589, 357, 589, 353) // 左下左
  ctx.quadraticCurveTo(593, 358, 593, 358) // 左下
  ctx.quadraticCurveTo(597, 360, 603, 355) // 右下
  ctx.quadraticCurveTo(605, 343, 601, 338) // 右上
  ctx.quadraticCurveTo(594, 346, 589, 348) // 左上
  ctx.fill()
  ctx.moveTo(593, 346) // 上
  ctx.quadraticCurveTo(595, 350, 593, 358) //
  ctx.stroke()
  ctx.closePath()
}

export const laceOfConnectWebToCatchFace = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  // ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 右上
  ctx.beginPath()
  ctx.moveTo(485 + x, 219 + y) // 左下
  ctx.quadraticCurveTo(479 + x, 221 + y, 486 + x, 230 + y) // 左下右
  ctx.quadraticCurveTo(542 + x, 210 + y, 545 + x, 217 + y) // 右上右
  ctx.quadraticCurveTo(549 + x, 210 + y, 540 + x, 205 + y) // 右上左
  ctx.quadraticCurveTo(514 + x, 208 + y, 485 + x, 219 + y) // 左上
  ctx.fill()
  ctx.moveTo(523 + x, 218 + y) // 上
  ctx.quadraticCurveTo(540 + x, 209 + y, 547 + x, 216 + y) //
  ctx.moveTo(483 + x, 220 + y) // 上
  ctx.quadraticCurveTo(492 + x, 219 + y, 505 + x, 213 + y) //
  ctx.stroke()
  ctx.closePath()
  ctx.strokeStyle = '#383838'

  // 左上
  ctx.beginPath()
  ctx.moveTo(516 + x, 188 + y) // 左上
  ctx.quadraticCurveTo(519 + x, 190 + y, 518 + x, 197 + y) //
  ctx.quadraticCurveTo(502 + x, 220 + y, 505 + x, 245 + y) // 右下左
  ctx.quadraticCurveTo(511 + x, 249 + y, 517 + x, 241 + y) // 右下右
  ctx.quadraticCurveTo(512 + x, 220 + y, 529 + x, 200 + y) // 右上右
  ctx.quadraticCurveTo(530 + x, 190 + y, 516 + x, 188 + y) // 左上
  ctx.fill()
  ctx.moveTo(518 + x, 188 + y) // 上
  ctx.quadraticCurveTo(524 + x, 195 + y, 506 + x, 220 + y) //
  ctx.moveTo(518 + x, 217 + y) // 上
  ctx.quadraticCurveTo(511 + x, 233 + y, 516 + x, 243 + y) //
  ctx.stroke()
  ctx.closePath()
}

export const laceOfConnectWebToCatchFace2 = (ctx: CanvasRenderingContext2D, color: string, x: number, y: number): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 左上
  ctx.beginPath()
  ctx.moveTo(519 + x, 187 + y) // 左上
  ctx.quadraticCurveTo(483 + x, 224 + y, 483 + x, 224 + y) // 左下
  ctx.quadraticCurveTo(484 + x, 232 + y, 490 + x, 231 + y) // 右下
  ctx.quadraticCurveTo(512 + x, 217 + y, 528 + x, 194 + y) // 右上
  ctx.quadraticCurveTo(530 + x, 185 + y, 519 + x, 187 + y) // 左上
  ctx.fill()
  ctx.moveTo(519 + x, 187 + y) // 左上
  ctx.quadraticCurveTo(508 + x, 203 + y, 483 + x, 224 + y) // 左下
  ctx.moveTo(528 + x, 194 + y) // 上
  ctx.quadraticCurveTo(490 + x, 231 + y, 490 + x, 231 + y) // 下
  ctx.stroke()
  ctx.closePath()
}

export const laceOfLeftConnectWebToCatchFace = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 右上
  ctx.beginPath()
  ctx.moveTo(357, 151) // 左下
  ctx.quadraticCurveTo(418, 141, 478, 174) // 右下
  ctx.quadraticCurveTo(483, 164, 483, 164) // 右上
  ctx.quadraticCurveTo(413, 132, 358, 141) // 左上
  ctx.quadraticCurveTo(353, 143, 357, 151) // 左上
  ctx.fill()
  ctx.moveTo(357, 149) // 左下
  ctx.quadraticCurveTo(418, 138, 478, 172) // 右下
  ctx.stroke()
  ctx.closePath()

  // 左上
  ctx.beginPath()
  ctx.moveTo(366, 116) // 左下
  ctx.quadraticCurveTo(408, 136, 450, 195) // 右下
  ctx.quadraticCurveTo(458, 194, 457, 186) // 右上
  ctx.quadraticCurveTo(415, 126, 368, 104) // 左上
  ctx.quadraticCurveTo(364, 109, 366, 116) // 左下
  ctx.fill()
  ctx.moveTo(366, 114) // 上
  ctx.quadraticCurveTo(408, 131, 452, 195) // 右下
  ctx.stroke()
  ctx.closePath()
}

export const laceOfRightConnectWebToCatchFace = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 右上
  ctx.beginPath()
  ctx.moveTo(612, 329) // 左下
  ctx.quadraticCurveTo(640, 346, 646, 382) // 右下
  ctx.quadraticCurveTo(652, 382, 655, 374) // 右上
  ctx.quadraticCurveTo(648, 341, 616, 318) // 左上
  ctx.quadraticCurveTo(609, 317, 612, 329) // 左下
  ctx.fill()
  ctx.moveTo(612, 327) // 左下
  ctx.quadraticCurveTo(643, 343, 648, 382) // 右下
  ctx.stroke()
  ctx.closePath()

  // 左上
  ctx.beginPath()
  ctx.moveTo(654, 311) // 左下
  ctx.quadraticCurveTo(646, 352, 627, 400) // 右下
  ctx.quadraticCurveTo(632, 403, 639, 394) // 右上
  ctx.quadraticCurveTo(658, 342, 667, 295) // 左上
  ctx.quadraticCurveTo(654, 310, 654, 310) // 左下
  ctx.fill()
  ctx.moveTo(656, 307) // 左下
  ctx.quadraticCurveTo(648, 352, 629, 400) // 右下
  ctx.stroke()
  ctx.closePath()
  ctx.strokeStyle = '#383838'
}
