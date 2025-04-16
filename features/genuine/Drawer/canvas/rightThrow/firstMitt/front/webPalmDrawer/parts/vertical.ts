import { laceOfLiningAllow } from '../../lace/arrow'

export const verticalParts = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#282828'
  ctx.beginPath()
  ctx.moveTo(276, 187) // 左上
  ctx.quadraticCurveTo(345, 308, 345, 308) // 左下
  ctx.quadraticCurveTo(389, 282, 389, 282) // 右下
  ctx.quadraticCurveTo(321, 149, 321, 149) // 右上
  ctx.quadraticCurveTo(276, 187, 276, 187) // 左上
  //   ctx.quadraticCurveTo()
  ctx.fillStyle = leatherColor
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // webTop
  ctx.moveTo(299, 189) // 左下
  ctx.quadraticCurveTo(353, 283, 353, 283)
  ctx.moveTo(302, 187) // 左下
  ctx.quadraticCurveTo(356, 281, 356, 281)
  ctx.moveTo(307, 179) // 左下
  ctx.quadraticCurveTo(361, 274, 361, 274)
  ctx.moveTo(310, 177) // 左下
  ctx.quadraticCurveTo(364, 272, 364, 272)
  //   ctx.moveTo() // 左下
  //   ctx.quadraticCurveTo()

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const verticalParts2 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#282828'
  ctx.beginPath()
  ctx.moveTo(276, 187) // 左上
  ctx.quadraticCurveTo(345, 308, 345, 308) // 左下
  ctx.quadraticCurveTo(389, 282, 389, 282) // 右下
  ctx.quadraticCurveTo(321, 149, 321, 149) // 右上
  ctx.quadraticCurveTo(276, 187, 276, 187) // 左上
  //   ctx.quadraticCurveTo()
  ctx.fillStyle = leatherColor
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // webTop
  ctx.moveTo(283, 191) // 左-外
  ctx.quadraticCurveTo(341, 294, 341, 294)
  ctx.moveTo(286, 189) // 左-内
  ctx.quadraticCurveTo(344, 292, 344, 292)
  ctx.moveTo(322, 161) // 右-外
  ctx.quadraticCurveTo(374, 262, 374, 262)
  ctx.moveTo(319, 163) // 右-内
  ctx.quadraticCurveTo(371, 264, 371, 264)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const verticalParts3 = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string): void => {
  ctx.strokeStyle = '#282828'

  // 親指寄り
  ctx.beginPath()
  ctx.moveTo(259, 205) // 左上
  ctx.lineTo(349, 349) // 左下
  ctx.lineTo(380, 344) // 右下
  ctx.lineTo(287, 187) // 右上
  ctx.lineTo(259, 205) // 左上
  //   ctx.quadraticCurveTo()
  ctx.fillStyle = leatherColor
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.moveTo(324, 157) // 左上
  ctx.quadraticCurveTo(415, 316, 415, 316) // 左下
  ctx.quadraticCurveTo(436, 287, 436, 287) // 右下
  ctx.quadraticCurveTo(353, 139, 353, 139) // 右上
  ctx.quadraticCurveTo(327, 157, 327, 157) // 左上
  //   ctx.quadraticCurveTo()
  ctx.fillStyle = leatherColor
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  // webTop
  ctx.moveTo(267, 212) // 左-外
  ctx.lineTo(352, 344)
  ctx.moveTo(286, 192) // 左-内
  ctx.lineTo(371, 338)
  ctx.moveTo(330, 161) // 右-内
  ctx.lineTo(415, 309)
  ctx.moveTo(351, 145) // 右-外
  ctx.lineTo(429, 281)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()
}

export const verticalParts4 = (ctx: CanvasRenderingContext2D, leatherColor: string, laceColor: string, stitchColor: string): void => {
  const leftAroundVerticalParts = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, x: number, y: number): void => {
    ctx.strokeStyle = '#282828'
    ctx.beginPath()
    ctx.moveTo(282 + x, 200 + y) // 左上
    ctx.quadraticCurveTo(272 + x, 202 + y, 272 + x, 202 + y) // 左下
    ctx.quadraticCurveTo(278 + x, 214 + y, 305 + x, 202 + y) // 右下
    ctx.quadraticCurveTo(300 + x, 195 + y, 300 + x, 195 + y) // 右上
    ctx.quadraticCurveTo(282 + x, 200 + y, 282 + x, 200 + y) // 左上
    ctx.fill()
    ctx.moveTo(282 + x, 200 + y) // 左上
    ctx.quadraticCurveTo(290 + x, 204 + y, 300 + x, 195 + y) // 左上
    ctx.stroke()
    ctx.closePath()
  }

  const rightAroundVerticalParts = (ctx: CanvasRenderingContext2D, leatherColor: string, stitchColor: string, x: number, y: number): void => {
    ctx.strokeStyle = '#282828'
    ctx.beginPath()
    ctx.moveTo(319 + x, 181 + y) // 左上
    ctx.quadraticCurveTo(323 + x, 188 + y, 323 + x, 188 + y) // 左下
    ctx.quadraticCurveTo(335 + x, 182 + y, 349 + x, 162 + y) // 右下
    ctx.quadraticCurveTo(341 + x, 168 + y, 338 + x, 163 + y) // 右上
    ctx.quadraticCurveTo(319 + x, 181 + y, 319 + x, 181 + y) // 左上
    ctx.fill()
    ctx.moveTo(319 + x, 181 + y) // 左上
    ctx.quadraticCurveTo(326 + x, 182 + y, 338 + x, 163 + y) // 左上
    ctx.stroke()
    ctx.closePath()
  }

  ctx.strokeStyle = '#282828'
  ctx.fillStyle = leatherColor
  ctx.beginPath()
  ctx.moveTo(276, 187) // 左上
  ctx.quadraticCurveTo(371, 353, 371, 353) // 左下
  ctx.quadraticCurveTo(414, 329, 414, 329) // 右下
  ctx.quadraticCurveTo(321, 149, 321, 149) // 右上
  ctx.quadraticCurveTo(276, 187, 276, 187) // 左上
  ctx.stroke()
  ctx.fill()
  ctx.closePath()
  //   ctx.quadraticCurveTo()

  // 中央一番上
  ctx.fillStyle = laceColor
  ctx.beginPath()
  ctx.moveTo(300, 193) // 左上
  ctx.quadraticCurveTo(305, 200, 305, 200) // 左下
  ctx.quadraticCurveTo(311, 200, 321, 188) // 右下
  ctx.quadraticCurveTo(316, 181, 316, 181) // 右上
  ctx.quadraticCurveTo(300, 193, 300, 193) // 左上
  ctx.fill()
  ctx.moveTo(300, 193) // 左上
  ctx.quadraticCurveTo(310, 193, 316, 181) // 左上
  ctx.stroke()
  ctx.closePath()

  ctx.fillStyle = leatherColor

  ctx.strokeStyle = stitchColor
  ctx.beginPath()
  ctx.setLineDash([3, 3])
  ctx.moveTo(283, 191) // 左-外
  ctx.lineTo(370, 341)
  ctx.moveTo(286, 189) // 左-内
  ctx.lineTo(374, 337)
  ctx.moveTo(322, 161) // 右-外
  ctx.lineTo(404, 320)
  ctx.moveTo(319, 163) // 右-内
  ctx.lineTo(402, 322)

  ctx.moveTo(310, 202) // 中央-左
  ctx.lineTo(387, 332)
  ctx.moveTo(319, 195) // 中央-右
  ctx.lineTo(395, 330)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.closePath()

  // laceここから
  ctx.fillStyle = laceColor
  // 縦パーツ中央の革紐
  // laceOfLiningAllow(ctx, laceColor, -49, -38)
  laceOfLiningAllow(ctx, laceColor, 37, -15)
  laceOfLiningAllow(ctx, laceColor, 52, 15)
  laceOfLiningAllow(ctx, laceColor, 67, 45)
  laceOfLiningAllow(ctx, laceColor, 83, 75)

  leftAroundVerticalParts(ctx, leatherColor, stitchColor, 0, 0) // 左1
  leftAroundVerticalParts(ctx, leatherColor, stitchColor, 13, 28) // 左2
  leftAroundVerticalParts(ctx, leatherColor, stitchColor, 26, 56) // 左3
  leftAroundVerticalParts(ctx, leatherColor, stitchColor, 39, 86) // 左3
  leftAroundVerticalParts(ctx, leatherColor, stitchColor, 56, 115) // 左3

  rightAroundVerticalParts(ctx, leatherColor, stitchColor, 0, 0) // 右1
  rightAroundVerticalParts(ctx, leatherColor, stitchColor, 17, 30) // 右1
  rightAroundVerticalParts(ctx, leatherColor, stitchColor, 32, 60) // 右1
  rightAroundVerticalParts(ctx, leatherColor, stitchColor, 47, 90) // 右1
  rightAroundVerticalParts(ctx, leatherColor, stitchColor, 62, 120) // 右1

  // 縦パーツ周りの革紐
  // laceOfVerticalPartsLeft(ctx, laceColor, -5, -24)
  // laceOfVerticalPartsLeft(ctx, laceColor, 0, 0)
  // laceOfVerticalPartsLeft(ctx, laceColor, 10, 28)
  // laceOfVerticalPartsLeft(ctx, laceColor, 20, 60)
  // laceOfVerticalPartsLeft(ctx, laceColor, 29, 83)
  // laceOfVerticalPartsLeft(ctx, laceColor, 40, 111)
}
