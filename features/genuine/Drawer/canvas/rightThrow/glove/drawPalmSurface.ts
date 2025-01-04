import { canvasResetter } from '../../canvasResetter'
import { listLining } from './front/listLining'
import { thumbBackOut, thumbBackWebSide } from './front/back/thumbFinger'
import { palm } from './front/catchFace'
import { indexBackMiddleSide, indexBackWebSide } from './front/back/indexFinger'
import { middleBackIndexSide, middleBackRingSide } from './front/back/middleFinger'
import { ringBackLittleSide } from './front/back/ringFinger'
import { littleBackOut, littleBackRingSide } from './front/back/littleFinger'
import { welting } from './front/welting'
import { bindings } from './front/bindings'
import { rightLaceOfNetWebDrawer, topLaceDrawer, webOfGloveFrontDrawer } from './front/web/webOfGloveFrontDrawer'
import { lace } from './front/lace'
import { backLaceDrawerOfFront } from './front/lace/backLace'
import { genuineEngravedOfPalm } from './front/engraving'
import { GenuineState } from '../../../../types'
import { getBankLaceDirection, getFingerColor } from '../../../../Components/Setters/logic'
import { paisleySelected } from '../../paisleySelected'
import { pseudoDrawingEngraved } from '@/util/canvas'

export const drawGenuineGlovePalmSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return
  const baseModel = state.baseModel
  const { thumbWebColor, indexWebColor, indexMiddleColor, middleIndexColor, middleRingColor, ringLittleColor } = getFingerColor(state)
  const { bankLaceDirection } = getBankLaceDirection(state)

  pseudoDrawingEngraved(ctx)
  // リセット
  canvasResetter(ctx)
  ctx.font = '24px serif'
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  const laceColor = state.lace.color
  const stitchColor = state.stitch.color
  const palmState = state.palm
  listLining(ctx, state.linings.color) // 裏革
  backLaceDrawerOfFront(ctx, state) // 背面の紐
  webOfGloveFrontDrawer(ctx, state) // ウェブの描画
  palm(ctx, palmState.color) // 捕球面
  thumbBackOut(ctx, state.thumbOut.color) // 親指背面＿外側
  thumbBackWebSide(ctx, thumbWebColor) // 親指背面＿ウェブ側
  indexBackWebSide(ctx, indexWebColor) // 人差し指背面＿ウェブ側
  indexBackMiddleSide(ctx, indexMiddleColor) // 人差し指背面＿中指側
  middleBackIndexSide(ctx, middleIndexColor) // 中指背面＿人差し指側
  middleBackRingSide(ctx, middleRingColor) // 中指背面＿薬指側
  ringBackLittleSide(ctx, ringLittleColor) // 薬指背面＿小指側
  littleBackRingSide(ctx, state.littleRing.color) // 小指背面＿薬指側
  littleBackOut(ctx, state.littleOut.color) // 小指背面＿外側
  welting(ctx, state.welting.color, baseModel.isFingerCrotch, palmState.color) // ハミダシ
  bindings(ctx, state.binding.color, laceColor, stitchColor, bankLaceDirection) // ヘリ革
  rightLaceOfNetWebDrawer(ctx, state) // ネットウェブのみの革紐
  topLaceDrawer(ctx, state) // トップレース
  lace(ctx, laceColor, state) // 革紐
  genuineEngravedOfPalm(ctx, palmState, 0, 0) // メーカー捕球面の刻印
  paisleySelected(ctx, state)
}
