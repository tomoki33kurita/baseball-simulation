import { webTop, webTop2, webTop3 } from './webTop'
import { thumbEdge0, thumbEdge1, thumbEdge2, thumbEdge3, thumbEdge4 } from './thumbEdge'
import { bankEdge1, bankEdge2 } from './bankEdge'
import { littleEdge, littleEdge2, littleEdge3, littleEdge4, littleEdge4_1, littleEdge5, littleEdge6 } from './littleToIndexEdge'
import { boomerang, boomerang2 } from './boomerang'
import { hingeUpper, hingeUpper2, hingeLower, hingeLower2, hingeLower3 } from './hinge'
import { bankMaterial, bankMaterial2 } from './bankMaterial'
import { connectCross } from './connectCross'
import { underLeft, underCenter, underRight, underWebRight } from './underWeb'
import { webConnectTopUpper, webConnectTopLower } from './webConnect'
import { knot, singleKnot } from './knot'
import { GenuineState } from '@/features/genuine/types'

export const laces = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const color = state.lace.color

  // 親指ヘリ革周り
  thumbEdge0(ctx, color)
  thumbEdge1(ctx, color)
  thumbEdge2(ctx, color, -30, -50)
  thumbEdge2(ctx, color, 0, 0)
  thumbEdge3(ctx, color, 0, 0)
  thumbEdge3(ctx, color, 18, 40)
  thumbEdge3(ctx, color, 34, 76)
  thumbEdge3(ctx, color, 50, 110)
  thumbEdge3(ctx, color, 87, 212)
  thumbEdge4(ctx, color, 0, 0)
  thumbEdge4(ctx, color, 10, 37)

  // 土手ヘリ革周り
  bankEdge1(ctx, color)
  bankEdge2(ctx, color, 0, 0)
  bankEdge2(ctx, color, 35, 5)
  bankEdge2(ctx, color, -39, 90, -10)
  bankEdge2(ctx, color, 0, 93, -10)

  // 小指->人差し指ヘリ革周り
  littleEdge(ctx, color, 0, 0)
  littleEdge(ctx, color, -30, 30, -5)
  littleEdge(ctx, color, 13, -15, -3)
  littleEdge2(ctx, color)
  littleEdge3(ctx, color, -170, 140, -20)
  littleEdge3(ctx, color, -145, 110, -20)
  littleEdge3(ctx, color, -180, 117, -25)
  littleEdge3(ctx, color, -265, 145, -35)
  littleEdge3(ctx, color, -298, 140, -40)
  littleEdge3(ctx, color, -484, 177, -58)
  littleEdge3(ctx, color, -512, 153, -63)
  littleEdge3(ctx, color, -562, 127, -70)
  littleEdge4(ctx, color, 0, 0)
  littleEdge4(ctx, color, -62, 70, -10)
  littleEdge4_1(ctx, color)
  littleEdge5(ctx, color, 39, -135, 15)
  littleEdge5(ctx, color, 0, 0)
  littleEdge5(ctx, color, -30, -7, 1)
  littleEdge6(ctx, color, 0, 0)
  littleEdge6(ctx, color, -43, 72, -9)

  // 人差し指 - 小指のブーメラン芯部分
  boomerang(ctx, color)
  boomerang2(ctx, color, -250, 225, -35)
  boomerang2(ctx, color, 0, 0)
  boomerang2(ctx, color, 85, -270, 30)
  boomerang2(ctx, color, 105, -379, 45) // 小指一番下

  // ヒンジ部分
  hingeUpper(ctx, color)
  hingeUpper2(ctx, color, 0, 0)
  hingeUpper2(ctx, color, -130, 120, -20)
  hingeLower3(ctx, color)
  hingeLower2(ctx, color)
  hingeLower(ctx, color)

  // // 親指芯 -> 土手芯
  const materialPack = state.materialPack
  const isSideSingle = materialPack.value === 'sideSingle'
  const isSideDouble = materialPack.value === 'sideDouble'
  const isSideDoubleNoLace = materialPack.value === 'sideDoubleNoLace'

  if (isSideSingle) {
    console.log('sideSingle')
  }
  if (isSideDouble) {
    bankMaterial(ctx, color)
    bankMaterial2(ctx, color, 0, 0)
    bankMaterial2(ctx, color, 85, 8)
  }
  if (isSideDoubleNoLace) {
    ctx.beginPath()
    ctx.lineWidth = 1.4
    ctx.fillStyle = '#fff'
    ctx.moveTo(392, 475)
    ctx.arc(392, 475, 4, 0, 2 * Math.PI)
    ctx.moveTo(406, 500)
    ctx.arc(406, 500, 4, 0, 2 * Math.PI)
    ctx.moveTo(443, 526)
    ctx.arc(443, 526, 4, 0, 2 * Math.PI)
    ctx.moveTo(484, 529)
    ctx.arc(484, 529, 4, 0, 2 * Math.PI)
    ctx.moveTo(527, 538)
    ctx.arc(527, 538, 4, 0, 2 * Math.PI)
    ctx.moveTo(569, 541)
    ctx.arc(569, 541, 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
  }

  underLeft(ctx, color, 0, 0)
  underLeft(ctx, color, 25, -12)
  underCenter(ctx, color)
  underRight(ctx, color, 0, 0)
  underRight(ctx, color, 15, -27)
  // ブーメラン下捕球面の左側面
  underWebRight(ctx, color, 0, 0)
  underWebRight(ctx, color, -47, 45, -10)
  underWebRight(ctx, color, -130, 105, -25)
  underWebRight(ctx, color, -235, 180, -40)
  // ウェブ右側、人差し指芯のヘリ革周り
  underWebRight(ctx, color, -230, 90, -40)
  underWebRight(ctx, color, -35, -80)
  underWebRight(ctx, color, -235, 120, -40)

  // クロス
  connectCross(ctx, color, 0, 0)
  connectCross(ctx, color, -180, 178, -27)
  connectCross(ctx, color, -552, 290, -67)
  connectCross(ctx, color, -663, 240, -77)

  // web -> ブーメラン
  webConnectTopUpper(ctx, color)
  webConnectTopLower(ctx, color)
  underWebRight(ctx, color, -254, 180, -40)

  // 結び目
  knot(ctx, color, 0, 0)
  knot(ctx, color, 50, 200, -5)
  singleKnot(ctx, color, 10, -45, 8)
  singleKnot(ctx, color, 0, 0)
}
