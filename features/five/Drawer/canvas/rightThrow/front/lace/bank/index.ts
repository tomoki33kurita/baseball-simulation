import { BaseItem, Position } from '@/types'
import { thumbInner, thumbInner2 } from '../thumnInner'
import { littleInner } from '../littleInner'
import { sideBank, sideBank2 } from './bank'
import { thumbUpper, thumbUpper2 } from '../thumbUpper'
import { toji } from '../toji'

export const bankLace = (ctx: CanvasRenderingContext2D, color: string, materialPack: BaseItem, position: Position, productNumber: string): void => {
  // ヨコトジ系の革紐
  sideMaterialPack(ctx, color, materialPack, position, productNumber)
}

const sideMaterialPack = (ctx: CanvasRenderingContext2D, color: string, materialPack: BaseItem, position: Position, productNumber: string): void => {
  if (['pitcher', 'infielder'].includes(position)) {
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

  if (['bindDouble', 'sideDouble', 'spaceHingeDouble', 'unselected'].includes(materialPack.value)) {
    sideBank(ctx, color, 0, 3) // 一番右
    sideBank(ctx, color, -70, -5) // 一番中央
    sideBank2(ctx, color, 10, 10)
    if (['pitcher', 'infielder'].includes(position)) sideBank2(ctx, color, -30, -25)
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
  if (['sideDouble', 'sideSingle', 'sideDoubleNoLace', 'unselected'].includes(materialPack.value)) {
    if (['F101', 'F501', 'F801'].includes(productNumber)) {
      thumbUpper(ctx, color, -70, 128, -15) //
    }
    if (['F101', 'F601', 'F801'].includes(productNumber)) {
      thumbUpper(ctx, color, 0, 0) // 親指-土手芯の上部の革紐
      thumbUpper(ctx, color, -5, 154, -15) // 親指-土手芯の上部の革紐3
      thumbUpper(ctx, color, 80, 139, -10) // 親指-土手芯の上部の革紐3
      toji(ctx, color, -20, 35) // 土手側
    }
    if (productNumber === 'F501') {
      thumbUpper(ctx, color, 0, 0)
      thumbUpper(ctx, color, -15, 158, -15) // 親指-土手芯の上部の革紐3
      thumbUpper(ctx, color, 120, 104, -5) // 親指-土手芯の上部の革紐3
      toji(ctx, color, -30, 45) // 土手側
      toji(ctx, color, -12, 25) // 土手側
    }
    if (productNumber === 'F601') {
      thumbUpper(ctx, color, -92, 160, -20)
    }
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
