import { webKnots } from '@/util/canvas/lace/webKnots'

export const outfielderDefaultBackLace = (ctx: CanvasRenderingContext2D, laceColor: string, x: number, y: number): void => {
  ctx.strokeStyle = '#383838'
  ctx.lineWidth = 0.8
  ctx.fillStyle = laceColor
  // 人指し指＿縦(紐の折り返し部分)
  ctx.beginPath()
  ctx.moveTo(480 + x, 105 + y) // 左上奥
  ctx.quadraticCurveTo(483 + x, 117 + y, 470 + x, 139 + y) // 左下
  ctx.quadraticCurveTo(474 + x, 141 + y, 480 + x, 139 + y) // 右下
  ctx.quadraticCurveTo(493 + x, 125 + y, 492 + x, 107 + y) // 右上
  ctx.quadraticCurveTo(487 + x, 103 + y, 485 + x, 104 + y) // 左上
  ctx.quadraticCurveTo(480 + x, 105 + y, 480 + x, 105 + y) // 左上奥
  ctx.fill()
  ctx.moveTo(483 + x, 104 + y)
  ctx.quadraticCurveTo(485 + x, 117 + y, 473 + x, 139 + y) // 左上奥
  ctx.stroke()
  ctx.closePath()

  // 人指し指ー中指繋ぎ
  // 左上-右下
  ctx.beginPath()
  ctx.moveTo(378 + x, 141 + y) // 左上_左
  ctx.quadraticCurveTo(407 + x, 137 + y, 437 + x, 144 + y) // 右下＿左
  ctx.quadraticCurveTo(442 + x, 138 + y, 440 + x, 135 + y) // 右下＿右
  ctx.quadraticCurveTo(414 + x, 126 + y, 383 + x, 131 + y) // 左上＿右
  ctx.quadraticCurveTo(378 + x, 135 + y, 378 + x, 141 + y) // 左上＿左
  ctx.fill()
  ctx.moveTo(378 + x, 139 + y) // 左上_左
  ctx.quadraticCurveTo(407 + x, 133 + y, 439 + x, 141 + y) // 右下＿左
  ctx.stroke()
  ctx.closePath()

  // 左下-右上
  ctx.beginPath()
  ctx.moveTo(381 + x, 154 + y) // 左下_上
  ctx.quadraticCurveTo(378 + x, 160 + y, 381 + x, 163 + y) // 左下＿下
  ctx.quadraticCurveTo(443 + x, 120 + y, 443 + x, 122 + y) // 右上＿下
  ctx.quadraticCurveTo(447 + x, 118 + y, 443 + x, 113 + y) // 右上＿上
  ctx.quadraticCurveTo(413 + x, 125 + y, 381 + x, 154 + y) // 左下＿上
  ctx.fill()
  ctx.moveTo(381 + x, 161 + y) // 左下_上
  ctx.quadraticCurveTo(413 + x, 135 + y, 445 + x, 118 + y) // 左下＿下
  ctx.stroke()
  ctx.closePath()

  // 中指ー薬指繋ぎ
  // 上
  ctx.beginPath()
  ctx.moveTo(286 + x, 172 + y) // 左上
  ctx.quadraticCurveTo(283 + x, 176 + y, 286 + x, 183 + y) // 左下
  ctx.quadraticCurveTo(298 + x, 164 + y, 324 + x, 163 + y) // 右下
  ctx.quadraticCurveTo(328 + x, 158 + y, 324 + x, 153 + y) // 右上
  ctx.quadraticCurveTo(300 + x, 154 + y, 286 + x, 172 + y) // 左下
  ctx.fill()
  ctx.moveTo(286 + x, 179 + y)
  ctx.quadraticCurveTo(298 + x, 162 + y, 326 + x, 160 + y) // 左上奥
  ctx.stroke()
  ctx.closePath()
  // 下
  ctx.beginPath()
  ctx.moveTo(286 + x, 197 + y) // 左上
  ctx.quadraticCurveTo(283 + x, 201 + y, 286 + x, 208 + y) // 左下
  ctx.quadraticCurveTo(298 + x, 189 + y, 324 + x, 188 + y) // 右下
  ctx.quadraticCurveTo(328 + x, 183 + y, 324 + x, 178 + y) // 右上
  ctx.quadraticCurveTo(300 + x, 179 + y, 286 + x, 197 + y) // 左下
  ctx.fill()
  ctx.moveTo(286 + x, 206 + y)
  ctx.quadraticCurveTo(298 + x, 183 + y, 326 + x, 186 + y) // 左上奥
  ctx.stroke()
  ctx.closePath()
  // 薬指ー小指繋ぎ
  // 上
  ctx.beginPath()
  ctx.moveTo(225 + x, 212 + y) // 左上
  ctx.quadraticCurveTo(222 + x, 217 + y, 225 + x, 221 + y) // 左下
  ctx.quadraticCurveTo(233 + x, 208 + y, 247 + x, 204 + y) // 右下
  ctx.quadraticCurveTo(250 + x, 200 + y, 247 + x, 197 + y) // 右上
  ctx.quadraticCurveTo(230 + x, 200 + y, 225 + x, 212 + y) // 左上
  ctx.fill()
  ctx.moveTo(225 + x, 219 + y)
  ctx.quadraticCurveTo(227 + x, 208 + y, 247 + x, 202 + y) // 左上奥
  ctx.stroke()
  ctx.closePath()
  // 下
  ctx.beginPath()
  ctx.moveTo(225 + x, 232 + y) // 左上
  ctx.quadraticCurveTo(222 + x, 237 + y, 225 + x, 241 + y) // 左下
  ctx.quadraticCurveTo(233 + x, 228 + y, 247 + x, 224 + y) // 右下
  ctx.quadraticCurveTo(250 + x, 220 + y, 247 + x, 218 + y) // 右上
  ctx.quadraticCurveTo(230 + x, 220 + y, 225 + x, 232 + y) // 左上
  ctx.fill()
  ctx.moveTo(225 + x, 239 + y)
  ctx.quadraticCurveTo(227 + x, 228 + y, 247 + x, 222 + y) // 左上奥
  ctx.stroke()
  ctx.closePath()
  webKnots(ctx, laceColor, -105 + x, -110 + y, 40, 0.6) // 手首ベルト左の結び目
}
