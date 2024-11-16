export const webOfNormalPocket = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(119, 272) // 左上
  ctx.quadraticCurveTo(138, 269, 152, 288) //
  ctx.quadraticCurveTo(195, 330, 195, 330) // 左下
  ctx.quadraticCurveTo(265, 260, 348, 201) // 右下
  ctx.quadraticCurveTo(311, 150, 311, 150) //
  ctx.quadraticCurveTo(300, 130, 314, 109) //
  ctx.quadraticCurveTo(212, 171, 119, 272) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = stitchColor
  // ウェブ2段目
  ctx.moveTo(153, 271) //左端
  ctx.quadraticCurveTo(218, 203, 297, 145) //
  ctx.quadraticCurveTo(303, 143, 299, 149) //
  ctx.quadraticCurveTo(225, 204, 158, 273) //
  ctx.quadraticCurveTo(153, 271, 153, 271) //
  // ウェブ3段目
  ctx.moveTo(174, 299) //左端
  ctx.quadraticCurveTo(202, 264, 315, 177) //
  ctx.quadraticCurveTo(321, 176, 317, 181) //
  ctx.quadraticCurveTo(209, 262, 179, 300) //
  ctx.quadraticCurveTo(174, 299, 174, 299) //

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webOfShallowPocket = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(119, 272) // 左上
  ctx.quadraticCurveTo(153, 274, 210, 310) // 左下
  ctx.quadraticCurveTo(265, 260, 344, 194) // 右下
  ctx.quadraticCurveTo(313, 138, 323, 98) //
  ctx.quadraticCurveTo(212, 171, 119, 272) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = stitchColor
  // ウェブ2段目
  ctx.moveTo(132, 268) //左上
  ctx.quadraticCurveTo(166, 271, 200, 296) // 左下
  ctx.quadraticCurveTo(330, 182, 330, 182) // 右下
  ctx.quadraticCurveTo(310, 141, 316, 112) // 右上
  // ウェブ3段目
  ctx.moveTo(136, 263) //左上
  ctx.quadraticCurveTo(169, 269, 199, 289) // 左下
  ctx.quadraticCurveTo(330, 180, 324, 179) // 右下
  ctx.quadraticCurveTo(306, 141, 311, 112) // 右上

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const webTop = (ctx: CanvasRenderingContext2D, color: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  ctx.beginPath()
  ctx.moveTo(86, 263) // 左上
  ctx.quadraticCurveTo(107, 268, 107, 280) //
  ctx.quadraticCurveTo(109, 281, 109, 281) //
  ctx.quadraticCurveTo(116, 270, 128, 272) // 左下
  ctx.quadraticCurveTo(216, 179, 313, 110) // 右下
  ctx.quadraticCurveTo(314, 105, 324, 98) //
  ctx.quadraticCurveTo(308, 62, 301, 58) // 右上
  ctx.quadraticCurveTo(165, 133, 86, 263) //
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.strokeStyle = stitchColor
  // ウェブ1段目
  ctx.moveTo(115, 266) //左端
  ctx.quadraticCurveTo(190, 167, 310, 96) //
  ctx.quadraticCurveTo(314, 96, 312, 99) //
  ctx.quadraticCurveTo(244, 136, 141, 234) //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}
