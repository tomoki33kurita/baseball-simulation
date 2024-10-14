export const outfielderDefaultBackLace = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 0.8
  ctx.fillStyle = laceColor

  // 人指し指ー中指繋ぎ
  // 左上-右下
  ctx.beginPath()
  ctx.moveTo(400, 115) // 左上_左
  ctx.quadraticCurveTo(407, 137, 424, 144) // 右下＿左
  ctx.quadraticCurveTo(433, 137, 429, 136) // 右下＿右
  ctx.quadraticCurveTo(414, 128, 408, 109) // 左上＿右
  ctx.quadraticCurveTo(402, 105, 400, 115) // 左上＿左
  ctx.fill()
  ctx.moveTo(405, 107) // 左上_左
  ctx.quadraticCurveTo(413, 131, 429, 138) // 右下＿左
  ctx.stroke()
  ctx.closePath()
  // 左下-右上
  ctx.beginPath()
  ctx.moveTo(394, 137) // 左下_上
  ctx.quadraticCurveTo(389, 143, 393, 149) // 左下＿下
  ctx.quadraticCurveTo(408, 130, 438, 110) // 右上＿下
  ctx.quadraticCurveTo(443, 105, 442, 100) // 右上＿上
  ctx.quadraticCurveTo(407, 116, 394, 137) // 左下＿上
  ctx.fill()
  ctx.moveTo(392, 146) // 左下_上
  ctx.quadraticCurveTo(401, 129, 440, 107) // 左下＿下
  ctx.stroke()
  ctx.closePath()

  // 人指し指ー中指繋ぎ _ 下部
  ctx.beginPath()
  ctx.moveTo(387, 178) // 左下
  ctx.quadraticCurveTo(387, 186, 416, 177) // 右下
  ctx.quadraticCurveTo(421, 168, 416, 167) // 右上
  ctx.quadraticCurveTo(393, 176, 393, 170) // 左上
  ctx.quadraticCurveTo(386, 172, 387, 178) // 左下
  ctx.fill()
  ctx.moveTo(390, 170)
  ctx.quadraticCurveTo(391, 180, 418, 168) // 左上奥
  ctx.stroke()
  ctx.closePath()
}
