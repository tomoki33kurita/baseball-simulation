import { webKnots } from '@/util/canvas/lace/webKnots'

export const mixBackLace = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 0.8
  ctx.fillStyle = laceColor
  // 人指し指＿縦(紐の折り返し部分)
  ctx.beginPath()
  ctx.moveTo(480, 105) // 左上奥
  ctx.quadraticCurveTo(483, 117, 470, 139) // 左下
  ctx.quadraticCurveTo(474, 141, 480, 139) // 右下
  ctx.quadraticCurveTo(493, 125, 492, 107) // 右上
  ctx.quadraticCurveTo(487, 103, 485, 104) // 左上
  ctx.quadraticCurveTo(480, 105, 480, 105) // 左上奥
  ctx.fill()
  ctx.moveTo(483, 104)
  ctx.quadraticCurveTo(485, 117, 473, 139) // 左上奥
  ctx.stroke()
  ctx.closePath()

  // 人指し指ー中指繋ぎ
  // 左上-右下
  ctx.beginPath()
  ctx.moveTo(378, 141) // 左上_左
  ctx.quadraticCurveTo(407, 137, 437, 144) // 右下＿左
  ctx.quadraticCurveTo(442, 138, 440, 135) // 右下＿右
  ctx.quadraticCurveTo(414, 126, 383, 131) // 左上＿右
  ctx.quadraticCurveTo(378, 135, 378, 141) // 左上＿左
  ctx.fill()
  ctx.moveTo(378, 139) // 左上_左
  ctx.quadraticCurveTo(407, 133, 439, 141) // 右下＿左
  ctx.stroke()
  ctx.closePath()

  // 左下-右上
  ctx.beginPath()
  ctx.moveTo(381, 154) // 左下_上
  ctx.quadraticCurveTo(378, 160, 381, 163) // 左下＿下
  ctx.quadraticCurveTo(443, 120, 443, 122) // 右上＿下
  ctx.quadraticCurveTo(447, 118, 443, 113) // 右上＿上
  ctx.quadraticCurveTo(413, 125, 381, 154) // 左下＿上
  ctx.fill()
  ctx.moveTo(381, 161) // 左下_上
  ctx.quadraticCurveTo(413, 135, 445, 118) // 左下＿下
  ctx.stroke()
  ctx.closePath()

  // 中指ー薬指繋ぎ
  // 上
  ctx.beginPath()
  ctx.moveTo(286, 172) // 左上
  ctx.quadraticCurveTo(283, 176, 286, 183) // 左下
  ctx.quadraticCurveTo(298, 164, 324, 163) // 右下
  ctx.quadraticCurveTo(328, 158, 324, 153) // 右上
  ctx.quadraticCurveTo(300, 154, 286, 172) // 左下
  ctx.fill()
  ctx.moveTo(286, 179)
  ctx.quadraticCurveTo(298, 162, 326, 160) // 左上奥
  ctx.stroke()
  ctx.closePath()
  // 下
  ctx.beginPath()
  ctx.moveTo(286, 197) // 左上
  ctx.quadraticCurveTo(283, 201, 286, 208) // 左下
  ctx.quadraticCurveTo(298, 189, 324, 188) // 右下
  ctx.quadraticCurveTo(328, 183, 324, 178) // 右上
  ctx.quadraticCurveTo(300, 179, 286, 197) // 左下
  ctx.fill()
  ctx.moveTo(286, 206)
  ctx.quadraticCurveTo(298, 183, 326, 186) // 左上奥
  ctx.stroke()
  ctx.closePath()
  // 薬指ー小指繋ぎ
  // 上
  ctx.beginPath()
  ctx.moveTo(225, 212) // 左上
  ctx.quadraticCurveTo(222, 217, 225, 221) // 左下
  ctx.quadraticCurveTo(233, 208, 247, 204) // 右下
  ctx.quadraticCurveTo(250, 200, 247, 197) // 右上
  ctx.quadraticCurveTo(230, 200, 225, 212) // 左上
  ctx.fill()
  ctx.moveTo(225, 219)
  ctx.quadraticCurveTo(227, 208, 247, 202) // 左上奥
  ctx.stroke()
  ctx.closePath()
  // 下
  ctx.beginPath()
  ctx.moveTo(225, 232) // 左上
  ctx.quadraticCurveTo(222, 237, 225, 241) // 左下
  ctx.quadraticCurveTo(233, 228, 247, 224) // 右下
  ctx.quadraticCurveTo(250, 220, 247, 218) // 右上
  ctx.quadraticCurveTo(230, 220, 225, 232) // 左上
  ctx.fill()
  ctx.moveTo(225, 239)
  ctx.quadraticCurveTo(227, 228, 247, 222) // 左上奥
  ctx.stroke()
  ctx.closePath()
  webKnots(ctx, laceColor, -115, -110, 40, 0.6) // 手首ベルト左の結び目
}
