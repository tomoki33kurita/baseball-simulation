export const firstBackStyleWristBelt = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 薬指
  ctx.beginPath()
  ctx.moveTo(313, 545) // 左上
  ctx.quadraticCurveTo(314, 554, 326, 569) // 左下
  ctx.quadraticCurveTo(354, 571, 351, 563) // 右下
  ctx.quadraticCurveTo(346, 550, 339, 540) // 右上
  ctx.quadraticCurveTo(313, 545, 313, 545) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(313, 545) // 左上
  ctx.quadraticCurveTo(323, 548, 340, 542) // 右下
  ctx.stroke()
  ctx.closePath()

  // 中指
  ctx.beginPath()
  ctx.moveTo(363, 543) // 左上
  ctx.quadraticCurveTo(373, 566, 373, 566) // 左下
  ctx.quadraticCurveTo(388, 575, 421, 568) // 右下
  ctx.quadraticCurveTo(412, 558, 409, 542) // 右上
  ctx.quadraticCurveTo(363, 543, 363, 543) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(363, 544) // 左上
  ctx.quadraticCurveTo(383, 548, 409, 544) // 左下
  ctx.stroke()
  ctx.closePath()

  // ウェブ下1
  ctx.beginPath()
  ctx.moveTo(448, 539) // 左上
  ctx.quadraticCurveTo(446, 552, 453, 567) // 左下
  ctx.quadraticCurveTo(498, 565, 498, 565) // 右下
  ctx.quadraticCurveTo(507, 545, 496, 534) // 右上
  ctx.quadraticCurveTo(448, 539, 448, 539) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(448, 541) // 左上
  ctx.quadraticCurveTo(476, 541, 497, 536) // 左下
  ctx.stroke()
  ctx.closePath()

  // ウェブ下2
  ctx.beginPath()
  ctx.moveTo(506, 529) // 左上
  ctx.quadraticCurveTo(510, 559, 510, 559) // 左下
  ctx.quadraticCurveTo(531, 538, 560, 532) // 右下
  ctx.quadraticCurveTo(583, 511, 565, 504) // 右上
  ctx.quadraticCurveTo(523, 515, 506, 529) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(506, 531) // 左上
  ctx.quadraticCurveTo(526, 517, 567, 505) // 左下
  ctx.stroke()
  ctx.closePath()

  metalParts(ctx)

  // ウェブ下3
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(499, 535) // 左上
  ctx.quadraticCurveTo(504, 546, 500, 561) // 左下
  ctx.quadraticCurveTo(510, 562, 510, 562) // 右下
  ctx.quadraticCurveTo(518, 544, 511, 535) // 右上
  ctx.quadraticCurveTo(499, 535, 499, 535) // 左上
  ctx.fill()
  // 側面
  ctx.moveTo(500, 537) // 左上
  ctx.quadraticCurveTo(505, 540, 512, 537) // 左下
  ctx.stroke()
  ctx.closePath()
}

const metalParts = (ctx: CanvasRenderingContext2D): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = 'silver'
  // 右部分
  ctx.beginPath()
  ctx.moveTo(499, 527) // 左＿左
  ctx.quadraticCurveTo(509, 560, 509, 560) // 左下
  ctx.quadraticCurveTo(523, 551, 519, 540) // 右＿中央
  ctx.quadraticCurveTo(515, 526, 499, 527) // 左上＿左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 左上部分
  ctx.beginPath()
  ctx.moveTo(488, 535) // 左上＿左
  ctx.quadraticCurveTo(493, 536, 493, 535) // 左上＿右
  ctx.quadraticCurveTo(501, 534, 499, 535) // 右上＿左
  ctx.quadraticCurveTo(505, 534, 506, 536) // 右上＿右
  ctx.quadraticCurveTo(500, 524, 489, 533) // 左上＿左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 左下部分
  ctx.beginPath()
  ctx.moveTo(486, 566) // 左＿左
  ctx.quadraticCurveTo(495, 573, 507, 562) // 右上＿右
  ctx.quadraticCurveTo(500, 561, 500, 561) // 右上＿左
  ctx.quadraticCurveTo(495, 567, 486, 566) // 左上＿左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 金属＿丸部分
  ctx.beginPath()
  ctx.moveTo(469, 552)
  ctx.arc(469, 554, 9, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
}
