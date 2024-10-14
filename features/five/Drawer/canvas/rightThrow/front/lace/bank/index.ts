import { BaseItem, Position } from '@/types'
import { thumbInner, thumbInner2 } from '../thumnInner'
import { littleInner } from '../littleInner'
import { sideBank, sideBank2 } from './bank'
import { thumbUpper, thumbUpper2 } from '../thumbUpper'
import { toji } from '../toji'

export const bankLace = (ctx: CanvasRenderingContext2D, color: string, materialPack: BaseItem, position: Position): void => {
  // ヨコトジ系の革紐
  sideMaterialPack(ctx, color, materialPack, position)
  // タテトジの革紐
  verticalMaterialPack(ctx, color, materialPack)
}

const sideMaterialPack = (ctx: CanvasRenderingContext2D, color: string, materialPack: BaseItem, position: Position): void => {
  if (position !== 'outfielder') {
    thumbInner(ctx, color, 0, 0) // 一番先端
    thumbInner(ctx, color, 22, 40) // 中間
    thumbInner(ctx, color, 41, 75) //一番手元
    littleInner(ctx, color, 0, 0) // 一番先端
    littleInner(ctx, color, -19, 45) //
    littleInner(ctx, color, -38, 90) //
  }
  if (position === 'outfielder') {
    thumbInner2(ctx, color, -3, -5) // 一番先端
    thumbInner2(ctx, color, 16, 33) // 中間
    thumbInner2(ctx, color, 37, 71) //一番手元
    thumbInner2(ctx, color, 57, 110) //一番手元
    littleInner(ctx, color, -3, -5) // 一番先端
    littleInner(ctx, color, -20, 40) //
    littleInner(ctx, color, -37, 85) //
    littleInner(ctx, color, -54, 132) // 一番根元
  }
  // TODO 本当は undefinedではないようにしたい
  if (['bindDouble', 'sideDouble', 'spaceHingeDouble', undefined, 'unselected'].includes(materialPack.value)) {
    sideBank(ctx, color, 0, 3) // 一番右
    sideBank(ctx, color, -70, -5) // 一番中央
    sideBank2(ctx, color, 10, 10)
    if (position !== 'outfielder') {
      sideBank2(ctx, color, -30, -25)
    }
  }

  // 紐抜き
  if (['sideDoubleNoLace', 'spaceHingeDoubleNoLace'].includes(materialPack?.value)) {
    ctx.beginPath()
    ctx.lineWidth = 1.4
    ctx.fillStyle = '#fff'
    ctx.moveTo(521, 525)
    ctx.arc(521, 525, 4, 0, 2 * Math.PI)
    ctx.moveTo(487, 522)
    ctx.arc(487, 522, 4, 0, 2 * Math.PI)
    ctx.moveTo(451, 518)
    ctx.arc(451, 518, 4, 0, 2 * Math.PI)
    ctx.moveTo(417, 513)
    ctx.arc(417, 513, 4, 0, 2 * Math.PI)
    ctx.moveTo(379, 498)
    ctx.arc(379, 498, 4, 0, 2 * Math.PI)
    ctx.moveTo(360, 482)
    ctx.arc(360, 482, 4, 0, 2 * Math.PI)
    ctx.moveTo(338, 462)
    ctx.arc(338, 462, 4, 0, 2 * Math.PI)
    ctx.moveTo(320, 448)
    ctx.arc(320, 448, 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
  }

  // 通常のダブルヒンジ
  if (['sideDouble', 'sideSingle', 'sideDoubleNoLace', undefined, 'unselected'].includes(materialPack?.value)) {
    thumbUpper(ctx, color, 0, 0) // 親指-土手芯の上部の革紐
    thumbUpper(ctx, color, -92, 160, -20) // 親指-土手芯の上部の革紐2
    thumbUpper(ctx, color, -5, 154, -15) // 親指-土手芯の上部の革紐3
    thumbUpper(ctx, color, 80, 139, -10) // 親指-土手芯の上部の革紐3
    toji(ctx, color, -20, 35) // 土手側
    toji(ctx, color, 0, 0) // 小指側末
    toji(ctx, color, 115, -280, 22) //小指側中間
    toji(ctx, color, 122, -467, 35) //小指側先端
  }
  // スペースダブルヒンジ
  if (['spaceHinge', 'spaceHingeDouble', 'spaceHingeDoubleNoLace'].includes(materialPack?.value)) {
    thumbUpper(ctx, color, 0, 0) // 親指-土手芯の上部の革紐
    thumbUpper(ctx, color, -120, 145, -20) // 親指-土手芯の上部の革紐2
    thumbUpper(ctx, color, -5, 152, -15) // 親指-土手芯の上部の革紐3
    thumbUpper2(ctx, color) // 親指-土手芯の上部の革紐3
    toji(ctx, color, 0, 0) // 小指側末
    toji(ctx, color, 115, -280, 22) //小指側中間
    toji(ctx, color, 122, -467, 35) //小指側先端
    toji(ctx, color, -37, 40) // 土手側
  }
}

// タテトジ
const verticalMaterialPack = (ctx: CanvasRenderingContext2D, color: string, materialPack: BaseItem): void => {
  if (materialPack?.value === 'vertical') {
    ctx.lineWidth = 0.8
    ctx.strokeStyle = '#383838'
    ctx.fillStyle = color
    // 左1
    ctx.beginPath()
    ctx.moveTo(361, 451) // 左上
    ctx.quadraticCurveTo(344, 458, 336, 480) // 左下
    ctx.quadraticCurveTo(337, 483, 344, 481) // 右下
    ctx.quadraticCurveTo(350, 469, 368, 452) // 右上
    ctx.quadraticCurveTo(361, 451, 361, 451) // 左上
    ctx.fill()
    // 側面ライン
    ctx.moveTo(341, 482) // 下
    ctx.quadraticCurveTo(348, 462, 367, 453) // 上
    ctx.stroke()
    ctx.closePath()

    // 左2
    ctx.beginPath()
    ctx.moveTo(401, 474) // 左上
    ctx.quadraticCurveTo(389, 488, 382, 513) // 左下
    ctx.quadraticCurveTo(386, 517, 393, 516) // 右下
    ctx.quadraticCurveTo(398, 496, 410, 478) // 右上
    ctx.quadraticCurveTo(406, 472, 401, 474) // 左上
    ctx.fill()
    // 側面ライン
    ctx.moveTo(390, 516) // 下
    ctx.quadraticCurveTo(397, 493, 409, 475) // 上
    ctx.stroke()
    ctx.closePath()

    // 左3
    ctx.beginPath()
    ctx.moveTo(454, 488) // 左上
    ctx.quadraticCurveTo(449, 506, 449, 530) // 左下
    ctx.quadraticCurveTo(455, 533, 460, 531) // 右下
    ctx.quadraticCurveTo(459, 509, 463, 488) // 右上
    ctx.quadraticCurveTo(454, 488, 454, 488) // 左上
    ctx.fill()
    // 側面ライン
    ctx.moveTo(458, 531) // 下
    ctx.quadraticCurveTo(456, 507, 461, 488) // 上
    ctx.stroke()
    ctx.closePath()

    // 左4
    ctx.beginPath()
    ctx.moveTo(513, 478) // 左上
    ctx.quadraticCurveTo(517, 497, 529, 521) // 左下
    ctx.quadraticCurveTo(537, 520, 538, 514) // 右下
    ctx.quadraticCurveTo(527, 493, 522, 474) // 右上
    ctx.quadraticCurveTo(517, 471, 513, 478) // 左上
    ctx.fill()
    // 側面ライン
    ctx.moveTo(537, 517) // 下
    ctx.quadraticCurveTo(525, 495, 519, 474) // 上
    ctx.stroke()
    ctx.closePath()

    // 左5
    ctx.beginPath()
    ctx.moveTo(564, 449) // 左上
    ctx.quadraticCurveTo(579, 464, 589, 488) // 左下
    ctx.quadraticCurveTo(597, 487, 597, 480) // 右下
    ctx.quadraticCurveTo(585, 456, 570, 442) // 右上
    ctx.quadraticCurveTo(565, 440, 564, 449) // 左上
    ctx.fill()
    // 側面ライン
    ctx.moveTo(591, 488) // 下
    ctx.quadraticCurveTo(580, 459, 565, 448) // 上
    ctx.stroke()
    ctx.closePath()
  }
}
