import { webKnots } from '@/util/canvas/lace/webKnots'
import { topSidePartOfWebForPitcher } from './parts/sideParts'
import { jointOfCatchFace, jointOfIndexFinger, jointOfThumbFinger2 } from './parts/earJointParts'

export const flat5Web = (ctx: CanvasRenderingContext2D, webColor: string, laceColor: string, stitchColor: string): void => {
  ctx.lineWidth = 0.8
  ctx.strokeStyle = '#282828'
  // web先端の革パーツ
  topSidePartOfWebForPitcher(ctx, webColor, laceColor, stitchColor)
  // ウェブ-人差し指のジョイントパーツ
  jointOfIndexFinger(ctx, webColor, laceColor, 3, 30)
  jointOfIndexFinger(ctx, webColor, laceColor, -24, 90)
  jointOfIndexFinger(ctx, webColor, laceColor, -45, 160)
  jointOfCatchFace(ctx, webColor, laceColor, -10, 12)
  jointOfCatchFace(ctx, webColor, laceColor, 38, 57)
  jointOfThumbFinger2(ctx, webColor, laceColor, 53, -56)
  jointOfThumbFinger2(ctx, webColor, laceColor, 19, -30)
  jointOfThumbFinger2(ctx, webColor, laceColor, -18, -5)
  // web本体のflatパーツ
  ctx.fillStyle = webColor
  ctx.beginPath()
  ctx.moveTo(549, 81) // 左上
  ctx.quadraticCurveTo(502, 166, 482, 247) // 左下1
  ctx.quadraticCurveTo(480, 256, 486, 268) // 左下2
  ctx.quadraticCurveTo(516, 326, 565, 357) // 右下1
  ctx.quadraticCurveTo(571, 362, 582, 362) // 右下2
  ctx.quadraticCurveTo(637, 324, 693, 280) // 右上
  ctx.quadraticCurveTo(660, 140, 549, 81) // 左上
  ctx.fill()
  ctx.stroke()
  ctx.closePath()

  // ウェブ上のデザイン
  ctx.strokeStyle = '#ffffff'
  ctx.beginPath()
  ctx.moveTo(581, 101) // 左上
  ctx.quadraticCurveTo(540, 164, 520, 241)
  ctx.quadraticCurveTo(512, 262, 545, 297)
  ctx.quadraticCurveTo(579, 327, 593, 311)
  ctx.quadraticCurveTo(682, 242, 682, 242)
  // ctx.quadraticCurveTo()
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
  ctx.strokeStyle = '#282828'

  // stitchここから
  ctx.beginPath()
  ctx.lineWidth = 1.3
  ctx.strokeStyle = stitchColor
  ctx.setLineDash([3, 3])
  // 外側
  ctx.moveTo(552, 87) // 左上
  ctx.quadraticCurveTo(508, 163, 486, 253)
  ctx.quadraticCurveTo(515, 327, 580, 357)
  ctx.quadraticCurveTo(690, 276, 690, 276)
  // 内側
  ctx.moveTo(556, 87) // 左上
  ctx.quadraticCurveTo(510, 163, 490, 253)
  ctx.quadraticCurveTo(513, 317, 580, 353)
  ctx.quadraticCurveTo(690, 272, 690, 272)

  //
  ctx.moveTo(576, 100) // 左上
  ctx.quadraticCurveTo(539, 153, 518, 231)
  ctx.quadraticCurveTo(506, 265, 538, 296)
  ctx.quadraticCurveTo(570, 319, 570, 319)
  ctx.quadraticCurveTo(579, 324, 602, 309)
  ctx.quadraticCurveTo(682, 248, 682, 248)
  // ctx.quadraticCurveTo()

  // 左上→右下
  ctx.moveTo(524, 234) // 左上
  ctx.quadraticCurveTo(528, 277, 528, 277)
  ctx.moveTo(533, 198) // 左上
  ctx.quadraticCurveTo(543, 247, 543, 295)
  ctx.moveTo(545, 166) // 左上
  ctx.quadraticCurveTo(561, 233, 561, 307)
  ctx.moveTo(564, 129) // 左上
  ctx.quadraticCurveTo(582, 203, 587, 315)
  ctx.moveTo(583, 106) // 左上
  ctx.quadraticCurveTo(609, 195, 609, 301)
  ctx.moveTo(615, 134) // 左上
  ctx.quadraticCurveTo(632, 209, 629, 286)
  ctx.moveTo(643, 166) // 左上
  ctx.quadraticCurveTo(657, 223, 652, 273)
  ctx.moveTo(668, 211) // 左上
  ctx.quadraticCurveTo(675, 245, 671, 255)

  // 左下→右上
  ctx.moveTo(570, 112) // 左下
  ctx.quadraticCurveTo(590, 108, 590, 108)
  ctx.moveTo(552, 138) // 左下
  ctx.quadraticCurveTo(613, 131, 613, 131)
  ctx.moveTo(539, 170) // 左下
  ctx.quadraticCurveTo(638, 160, 638, 160)
  ctx.moveTo(527, 202) // 左下
  ctx.quadraticCurveTo(658, 189, 658, 189)
  ctx.moveTo(519, 231) // 左下
  ctx.quadraticCurveTo(670, 214, 670, 214)
  ctx.moveTo(515, 260) // 左下
  ctx.quadraticCurveTo(681, 241, 681, 241)
  ctx.moveTo(527, 284) // 左下
  ctx.quadraticCurveTo(652, 270, 652, 270)
  ctx.moveTo(553, 306) // 左下
  ctx.quadraticCurveTo(611, 300, 611, 300)

  ctx.stroke()
  ctx.setLineDash([])
  ctx.strokeStyle = laceColor
  ctx.closePath()
  // stitchここまで
  webKnots(ctx, laceColor, -110, 110, 1) // ウェブ先端寄りのウェブ結び目
}
