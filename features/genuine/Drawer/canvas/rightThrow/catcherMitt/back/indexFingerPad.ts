export const indexFingerPadOfFType = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(329, 433) // 左下
  ctx.quadraticCurveTo(377, 425, 420, 430) // 右下
  ctx.quadraticCurveTo(435, 362, 481, 340) // 右上1
  ctx.quadraticCurveTo(447, 317, 421, 269) // 右上2
  ctx.quadraticCurveTo(378, 265, 300, 293) // 左上
  ctx.quadraticCurveTo(307, 372, 329, 433) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 左側面＿外
  ctx.moveTo(304, 296) // 左下
  ctx.quadraticCurveTo(310, 369, 332, 430) // 右下
  // 左側面＿内
  ctx.moveTo(307, 296) // 左下
  ctx.quadraticCurveTo(313, 369, 335, 430) // 右下
  // 上側面
  ctx.moveTo(307, 296) // 左下
  ctx.quadraticCurveTo(370, 270, 420, 272) // 右下
  // 右上側面
  ctx.moveTo(420, 272) // 左下
  ctx.quadraticCurveTo(438, 315, 476, 339) // 右下
  // 右下側面
  ctx.moveTo(476, 339) // 左下
  ctx.quadraticCurveTo(435, 357, 417, 429) // 右下
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}

export const indexFingerPad = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(318, 435) // 左下
  ctx.quadraticCurveTo(377, 425, 415, 430) // 右下
  ctx.quadraticCurveTo(390, 315, 390, 315) // 右上
  ctx.quadraticCurveTo(378, 267, 326, 273) // 中央上
  ctx.quadraticCurveTo(291, 283, 292, 321) // 左上
  ctx.quadraticCurveTo(318, 435, 318, 435) // 左下
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // stitchここから
  ctx.lineWidth = 1.0
  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(322, 436) // 左下
  ctx.quadraticCurveTo(298, 323, 298, 323) //
  ctx.quadraticCurveTo(295, 297, 308, 289) //
  ctx.quadraticCurveTo(320, 273, 355, 281) // 頂点
  ctx.quadraticCurveTo(372, 283, 383, 310) //
  ctx.quadraticCurveTo(412, 430, 412, 430) // 右下
  // 内側
  ctx.moveTo(327, 434) // 左下
  ctx.quadraticCurveTo(305, 326, 305, 326) //
  ctx.quadraticCurveTo(299, 306, 312, 291) //
  ctx.quadraticCurveTo(327, 279, 354, 286) //
  ctx.quadraticCurveTo(367, 286, 376, 311) //
  ctx.quadraticCurveTo(406, 430, 406, 430) //
  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
  ctx.strokeStyle = '#282828'
}
