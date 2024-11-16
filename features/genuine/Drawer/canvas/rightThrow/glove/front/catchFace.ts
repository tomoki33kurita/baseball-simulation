export const palm = (ctx: CanvasRenderingContext2D, color: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = color

  // 輪郭
  ctx.beginPath()
  ctx.moveTo(197, 258) // 親指先端
  ctx.quadraticCurveTo(177, 264, 178, 293)
  ctx.quadraticCurveTo(219, 373, 263, 474) // 親指ヘリ革地点＿外側
  ctx.quadraticCurveTo(262, 461, 276, 455) // // 親指ヘリ革地点＿中央
  ctx.quadraticCurveTo(289, 448, 298, 462) // // 親指ヘリ革地点＿内側
  ctx.quadraticCurveTo(325, 535, 360, 552)
  ctx.quadraticCurveTo(454, 578, 542, 565) // 土手あたり
  ctx.quadraticCurveTo(582, 554, 604, 518)
  ctx.quadraticCurveTo(622, 485, 636, 438) // 小指ヘリ革地点＿内側
  ctx.quadraticCurveTo(640, 423, 655, 432) // 小指ヘリ革地点＿中央
  ctx.quadraticCurveTo(668, 445, 657, 461) // 小指ヘリ革地点＿外側
  ctx.quadraticCurveTo(662, 461, 665, 456) //
  ctx.quadraticCurveTo(678, 440, 713, 349) // 小指芯外側＿結び目地点
  ctx.quadraticCurveTo(742, 281, 746, 214) //
  ctx.quadraticCurveTo(742, 190, 725, 182) // 小指芯外側＿先端
  ctx.quadraticCurveTo(695, 172, 685, 201) // 小指芯内側
  ctx.quadraticCurveTo(667, 262, 645, 295) //
  ctx.quadraticCurveTo(667, 229, 679, 169) // 薬指芯外側
  ctx.quadraticCurveTo(685, 132, 654, 115) // 薬指芯外側_頂点
  ctx.quadraticCurveTo(617, 95, 601, 127) // 薬指芯外側_頂点
  ctx.quadraticCurveTo(587, 186, 572, 236) // 薬指_中指＿溝
  ctx.quadraticCurveTo(582, 153, 583, 115) //
  ctx.quadraticCurveTo(584, 79, 555, 62) // 中指＿頂点
  ctx.quadraticCurveTo(520, 43, 496, 65) // 中指＿
  ctx.quadraticCurveTo(484, 102, 484, 155) // 中指＿
  ctx.quadraticCurveTo(483, 187, 475, 215) // 中指＿人差し指＿溝
  ctx.quadraticCurveTo(470, 205, 468, 184)
  ctx.quadraticCurveTo(463, 130, 453, 79)
  ctx.quadraticCurveTo(440, 40, 400, 36) // 人差し指＿頂点
  ctx.quadraticCurveTo(360, 37, 354, 66)
  ctx.quadraticCurveTo(350, 86, 361, 150) // 中間ウェブ横
  ctx.quadraticCurveTo(364, 208, 373, 249) // 人差し指ウェブ横＿付け根
  ctx.quadraticCurveTo(341, 311, 300, 371) // 親指ウェブ横＿付け根
  ctx.quadraticCurveTo(261, 299, 237, 271)
  ctx.quadraticCurveTo(219, 250, 197, 258)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // 親指＿内側
  ctx.beginPath()
  ctx.moveTo(283, 340)
  ctx.quadraticCurveTo(297, 374, 321, 399)
  ctx.stroke()
  ctx.closePath()

  // 小指＿内側
  ctx.beginPath()
  ctx.moveTo(645, 295)
  ctx.quadraticCurveTo(627, 330, 610, 348)
  ctx.stroke()
  ctx.closePath()
}
