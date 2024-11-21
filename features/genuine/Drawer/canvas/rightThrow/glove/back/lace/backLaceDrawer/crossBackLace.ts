import { webKnots } from '@/util/canvas/lace/webKnots'

export const crossBackLace = (ctx: CanvasRenderingContext2D, laceColor: string): void => {
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
  // 左上-右下
  ctx.beginPath()
  ctx.moveTo(286, 173) // 左上＿上
  ctx.quadraticCurveTo(283, 176, 284, 183) // 左上＿下
  ctx.quadraticCurveTo(305, 179, 323, 182) // 右下＿下
  ctx.quadraticCurveTo(325, 175, 324, 172) // 右下＿上
  ctx.quadraticCurveTo(307, 167, 286, 173) // 左上＿上
  ctx.fill()
  ctx.moveTo(286, 181) //左
  ctx.quadraticCurveTo(302, 175, 323, 180) // 右下
  ctx.stroke()
  ctx.closePath()
  // 左下-右上
  ctx.beginPath()
  ctx.moveTo(286, 196) // 左下＿上
  ctx.quadraticCurveTo(283, 201, 286, 206) // 左下＿下
  ctx.quadraticCurveTo(301, 181, 325, 165) // 右上＿下
  ctx.quadraticCurveTo(328, 159, 325, 157) // 右上＿上
  ctx.quadraticCurveTo(300, 168, 286, 196) // 左下＿上
  ctx.fill()
  ctx.moveTo(285, 204)
  ctx.quadraticCurveTo(301, 174, 325, 163) //
  ctx.stroke()
  ctx.closePath()

  // 薬指ー小指繋ぎ
  // // 左上-右下
  ctx.beginPath()
  ctx.moveTo(221, 213) // 左上_上
  ctx.quadraticCurveTo(219, 217, 221, 221) // 左上＿下
  ctx.quadraticCurveTo(235, 221, 247, 227) // 右下＿下
  ctx.quadraticCurveTo(250, 222, 248, 219) // 右下＿上
  ctx.quadraticCurveTo(239, 212, 221, 213) // 左上＿上
  ctx.fill()
  ctx.moveTo(221, 219)
  ctx.quadraticCurveTo(235, 218, 248, 225) // 左上奥
  ctx.stroke()
  ctx.closePath()
  // // 左下-右上
  ctx.beginPath()
  ctx.moveTo(222, 232) // 左下＿上
  ctx.quadraticCurveTo(219, 237, 222, 241) // 左下＿下
  ctx.quadraticCurveTo(230, 225, 249, 209) // 右上＿下
  ctx.quadraticCurveTo(253, 204, 249, 200) // 右上＿上
  ctx.quadraticCurveTo(230, 211, 222, 232) // 左下＿上
  ctx.fill()
  ctx.moveTo(224, 237)
  ctx.quadraticCurveTo(230, 220, 251, 205) // 右上＿下
  ctx.stroke()
  ctx.closePath()
  webKnots(ctx, laceColor, -115, -110, 40, 0.6) // 手首ベルト左の結び目
}
