export const welting = (ctx: CanvasRenderingContext2D, hamidashiColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = hamidashiColor

  // 親指
  ctx.beginPath()
  ctx.moveTo(737, 279) // 上_左
  ctx.quadraticCurveTo(619, 401, 562, 556) // 下_左
  ctx.quadraticCurveTo(568, 550, 569, 550) // 下_右
  ctx.quadraticCurveTo(625, 401, 739, 283) // 上_右
  ctx.quadraticCurveTo(737, 279, 737, 279) // 上_左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 中指＿中央＿＿人差指＿頂点
  ctx.beginPath()
  ctx.moveTo(335, 247) // 中指＿中央＿左上
  ctx.quadraticCurveTo(385, 295, 422, 236) // 人差指＿中央＿左下
  ctx.quadraticCurveTo(448, 126, 512, 19) // 人差指＿頂点＿左
  ctx.quadraticCurveTo(517, 19, 517, 19) // 人差指＿頂点＿右
  ctx.quadraticCurveTo(449, 137, 427, 238) // 人差指＿中央＿右下
  ctx.quadraticCurveTo(390, 304, 332, 253) // 中指＿中央
  ctx.quadraticCurveTo(335, 247, 335, 247) // 中指＿中央＿左上/
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 薬指＿中央＿＿中指＿頂点
  ctx.beginPath()
  ctx.moveTo(268, 290) // 薬指＿中央＿左上
  ctx.quadraticCurveTo(305, 313, 330, 244) // 中指＿中央＿左下
  ctx.quadraticCurveTo(331, 150, 372, 37) // 中指＿頂点＿左
  ctx.quadraticCurveTo(376, 35, 376, 35) // 中指＿頂点＿右
  ctx.quadraticCurveTo(335, 158, 335, 247) // 中指＿中央＿右下
  ctx.quadraticCurveTo(308, 322, 264, 296) // 薬指＿中央
  ctx.quadraticCurveTo(268, 290, 268, 290) // 薬指＿中央＿左上/
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 小指＿中央＿＿薬指＿頂点
  ctx.beginPath()
  ctx.moveTo(211, 345) // 小指＿中央＿左上
  ctx.quadraticCurveTo(245, 358, 263, 286) // 薬指＿中央＿左下
  ctx.quadraticCurveTo(250, 180, 276, 92) // 薬指＿頂点＿左
  ctx.quadraticCurveTo(279, 90, 279, 90) // 薬指＿頂点＿右
  ctx.quadraticCurveTo(252, 183, 268, 290) // 薬指＿中央＿右下
  ctx.quadraticCurveTo(247, 365, 213, 352) // 小指＿中央
  ctx.quadraticCurveTo(211, 345, 211, 345) // 小指＿中央＿左上/
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 小指＿頂点＿＿小指＿一番下
  ctx.beginPath()
  ctx.moveTo(218, 150) // 小指先端左
  ctx.quadraticCurveTo(157, 394, 322, 590) // 小指末端左
  ctx.quadraticCurveTo(324, 590, 324, 590) // 小指末端右
  ctx.quadraticCurveTo(164, 394, 221, 150) // 小指先端右
  ctx.quadraticCurveTo(218, 150, 218, 150) // 小指先端左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
