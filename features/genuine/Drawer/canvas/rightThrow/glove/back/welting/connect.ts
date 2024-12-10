export const weltingForConnectBack = (ctx: CanvasRenderingContext2D, weltingColor: string, isIntegratedRing: boolean): void => {
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 0.5
  ctx.fillStyle = weltingColor
  ctx.beginPath()
  ctx.moveTo(215, 153) // 小指先端左
  ctx.quadraticCurveTo(188, 350, 245, 471) // 小指末端左
  ctx.quadraticCurveTo(249, 466, 249, 463) // 小指末端右
  ctx.quadraticCurveTo(192, 345, 220, 149) // 小指先端右
  ctx.quadraticCurveTo(215, 153, 215, 153) // 小指先端左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(241, 313) // 小指薬指の間先端
  ctx.quadraticCurveTo(248, 375, 273, 427) // 小指薬指の間末端左
  ctx.quadraticCurveTo(277, 427, 277, 427) // 小指薬指の間末端右
  ctx.quadraticCurveTo(253, 375, 243, 313) // 小指薬指の間先端右
  ctx.quadraticCurveTo(241, 313, 241, 313) // 小指薬指の間先端左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 薬指＿中央
  if (!isIntegratedRing) {
    ctx.beginPath()
    ctx.moveTo(275, 92) // 薬指先端＿左
    ctx.quadraticCurveTo(236, 256, 294, 400) // 薬指末端＿左
    ctx.quadraticCurveTo(297, 400, 298, 400) // 薬指末端＿右
    ctx.quadraticCurveTo(240, 250, 279, 90) // 薬指先端＿右
    ctx.quadraticCurveTo(279, 90, 275, 92) // 薬指末端＿左
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }
  // 薬指中指の間
  ctx.beginPath()
  ctx.moveTo(305, 262) // 先端＿左
  ctx.quadraticCurveTo(304, 322, 317, 382) // 末端＿左
  ctx.quadraticCurveTo(322, 382, 322, 382) // 末端＿右
  ctx.quadraticCurveTo(308, 322, 308, 262) // 先端＿右
  ctx.quadraticCurveTo(305, 262, 305, 262) // 先端＿左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 中指中央
  ctx.beginPath()
  ctx.moveTo(373, 37) // 中指先端＿左
  ctx.quadraticCurveTo(311, 190, 338, 368) // 中指末端＿左
  ctx.quadraticCurveTo(343, 368, 343, 368) // 中指末端＿右
  ctx.quadraticCurveTo(315, 190, 377, 37) // 中指先端＿右
  ctx.quadraticCurveTo(373, 37, 373, 37) // 中指先端＿右
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 人差し指＿中央
  ctx.beginPath()
  ctx.moveTo(513, 20) // 先端＿左
  ctx.quadraticCurveTo(426, 157, 402, 356) // 末端＿左
  ctx.quadraticCurveTo(406, 356, 407, 356) // 末端＿右
  ctx.quadraticCurveTo(432, 157, 516, 20) // 先端＿右
  ctx.quadraticCurveTo(514, 20, 513, 20) // 先端＿左
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  // 革一体形状(人差指)

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
}
