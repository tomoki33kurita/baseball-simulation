import { FiveState } from '@/features/five/types'
import { canvasResetter } from './canvasResetter'
import { listLining } from './rightThrow/front/listLining'
import { thumbBackOut, thumbBackWebSide } from './rightThrow/front/back/thumbFinger'
import { palm } from './rightThrow/front/catchFace'
import { indexBackMiddleSide, indexBackWebSide } from './rightThrow/front/back/indexFinger'
import { middleBackIndexSide, middleBackRingSide } from './rightThrow/front/back/middleFinger'
import { ringBackLittleSide } from './rightThrow/front/back/ringFinger'
import { littleBackOut, littleBackRingSide } from './rightThrow/front/back/littleFinger'
import { welting } from './rightThrow/front/welting'
import { bindings } from './rightThrow/front/bindings'
import { rightLaceOfNetWebDrawer, webOfGloveFrontDrawer } from './rightThrow/front/web/webOfGloveFrontDrawer'
import { lace } from './rightThrow/front/lace'
import { backLaceDrawerOfFront } from './rightThrow/front/lace/backLace'
import { fiveEngravedOfPalm } from './rightThrow/front/engraving'
import { getOrderType } from '../../Setters/logic'

export const drawPalmSurface = (ctx: CanvasRenderingContext2D | null, state: FiveState): void => {
  if (!ctx) return

  const { isBasicOrder, isBasicWithEmbroideryOrder } = getOrderType(state.orderType)
  const baseModel = state.baseModel
  const position = baseModel.position
  // リセット
  canvasResetter(ctx)
  ctx.font = '40px serif'
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  if (isBasicOrder || isBasicWithEmbroideryOrder) {
    const basicColors = baseModel.basicColors
    const basicColor = basicColors.leather.color
    const basicLaceColor = basicColors.lace.color
    const basicWeltingColor = basicColors.welting.color
    const basicBindingColor = basicColors.binding.color
    const basicStitchColor = basicColors.stitch.color

    listLining(ctx, basicColor) // 裏革
    backLaceDrawerOfFront(ctx, basicLaceColor, position) // 背面の紐
    // ウェブの描画
    webOfGloveFrontDrawer(ctx, state, basicColor, basicLaceColor, basicStitchColor) // ✅
    palm(ctx, basicColor) // 捕球面
    thumbBackOut(ctx, basicColor) // 親指背面＿外側
    thumbBackWebSide(ctx, basicColor) // 親指背面＿ウェブ側
    indexBackWebSide(ctx, basicColor) // 人差し指背面＿ウェブ側
    indexBackMiddleSide(ctx, basicColor) // 人差し指背面＿中指側
    middleBackIndexSide(ctx, basicColor) // 中指背面＿人差し指側
    middleBackRingSide(ctx, basicColor) // 中指背面＿薬指側
    ringBackLittleSide(ctx, basicColor) // 薬指背面＿小指側
    littleBackRingSide(ctx, basicColor) // 小指背面＿薬指側
    littleBackOut(ctx, basicColor) // 小指背面＿外側
    welting(ctx, basicWeltingColor) // ハミダシ
    bindings(ctx, basicBindingColor, basicLaceColor, basicStitchColor, baseModel.bankLaceDirection) // ヘリ革
    rightLaceOfNetWebDrawer(ctx, basicLaceColor) // ネットウェブのみの革紐
    lace(ctx, basicLaceColor, state) // 革紐
    fiveEngravedOfPalm(ctx, baseModel.basicColors.leather, 0, 0) // メーカー捕球面の刻印
    return
  }

  const laceColor = state.lace.color
  const stitchColor = state.stitch.color
  const palmState = state.palm
  listLining(ctx, state.linings.color) // 裏革
  backLaceDrawerOfFront(ctx, laceColor, position) // 背面の紐
  webOfGloveFrontDrawer(ctx, state, state.web.color, laceColor, stitchColor) // ウェブの描画
  palm(ctx, palmState.color) // 捕球面
  thumbBackOut(ctx, state.thumbOut.color) // 親指背面＿外側
  thumbBackWebSide(ctx, state.thumbWeb.color) // 親指背面＿ウェブ側
  indexBackWebSide(ctx, state.indexWeb.color) // 人差し指背面＿ウェブ側
  indexBackMiddleSide(ctx, state.indexMiddle.color) // 人差し指背面＿中指側
  middleBackIndexSide(ctx, state.middleIndex.color) // 中指背面＿人差し指側
  middleBackRingSide(ctx, state.middleRing.color) // 中指背面＿薬指側
  ringBackLittleSide(ctx, state.ringLittle.color) // 薬指背面＿小指側
  littleBackRingSide(ctx, state.littleRing.color) // 小指背面＿薬指側
  littleBackOut(ctx, state.littleOut.color) // 小指背面＿外側
  welting(ctx, state.welting.color) // ハミダシ
  bindings(ctx, state.binding.color, laceColor, stitchColor, baseModel.bankLaceDirection) // ヘリ革
  rightLaceOfNetWebDrawer(ctx, laceColor) // ネットウェブのみの革紐
  lace(ctx, laceColor, state) // 革紐
  fiveEngravedOfPalm(ctx, palmState, 0, 0) // メーカー捕球面の刻印
}
