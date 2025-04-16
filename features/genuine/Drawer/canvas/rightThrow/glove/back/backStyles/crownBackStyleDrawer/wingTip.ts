export const wingTip = (ctx: CanvasRenderingContext2D, leatherColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor

  // 手口
  ctx.beginPath()
  ctx.moveTo(515, 20) // 人差し指＿中央＿頂点
  ctx.quadraticCurveTo(450, 136, 426, 235) // 人差し指＿中央＿下
  ctx.quadraticCurveTo(385, 300, 332, 244) // 中指＿中央＿下
  ctx.quadraticCurveTo(300, 320, 265, 286) // 薬指＿中央＿下
  ctx.quadraticCurveTo(245, 360, 209, 345) // 小指＿中央＿下
  ctx.quadraticCurveTo(237, 498, 321, 590) // 小指＿手口＿左下
  ctx.quadraticCurveTo(282, 514, 268, 460) // 手口＿ヘリ革内＿左上
  ctx.quadraticCurveTo(270, 410, 341, 374) // 中指＿中央＿真下
  ctx.quadraticCurveTo(408, 350, 457, 373) // 人差し指＿右パーツ＿右下
  ctx.quadraticCurveTo(485, 209, 559, 68) // 人差し指＿右パーツ＿右上
  ctx.quadraticCurveTo(563, 48, 553, 32) // 人差し指＿中央＿右上2
  ctx.quadraticCurveTo(537, 21, 515, 20) // 人差し指＿中央＿頂点
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}
