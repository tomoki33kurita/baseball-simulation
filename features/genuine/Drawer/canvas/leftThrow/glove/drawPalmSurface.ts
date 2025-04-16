import { getBankLaceDirection, getFingerColor } from '@/features/genuine/Components/Setters/logic'
import { GenuineState } from '@/features/genuine/types'
import { pseudoDrawingEngraved, startInversion, undoInversion } from '@/util/canvas'
import { canvasResetter } from '../../canvasResetter'
import { listLining } from '../../rightThrow/glove/front/listLining'
import { backLaceDrawerOfFront } from '../../rightThrow/glove/front/lace/backLace'
import { rightLaceOfNetWebDrawer, topLaceDrawer, webOfGloveFrontDrawer } from '../../rightThrow/glove/front/web/webOfGloveFrontDrawer'
import { palm } from '../../rightThrow/glove/front/catchFace'
import { thumbBackOut, thumbBackWebSide } from '../../rightThrow/glove/front/back/thumbFinger'
import { indexBackMiddleSide, indexBackWebSide } from '../../rightThrow/glove/front/back/indexFinger'
import { middleBackIndexSide, middleBackRingSide } from '../../rightThrow/glove/front/back/middleFinger'
import { ringBackLittleSide } from '../../rightThrow/glove/front/back/ringFinger'
import { littleBackOut, littleBackRingSide } from '../../rightThrow/glove/front/back/littleFinger'
import { welting } from '../../rightThrow/glove/front/welting'
import { bindings } from '../../rightThrow/glove/front/bindings'
import { lace } from '../../rightThrow/glove/front/lace'
import { genuineEngravedOfPalm, genuineLeftThrowBrandMarkEmbroideryDrawer } from '../../genuineMark'
import { paisleySelected } from '../../paisleySelected'

export const drawLeftThrowGenuineGlovePalmSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState, width: number): void => {
  if (!ctx) return
  const baseModel = state.baseModel
  const { thumbWebColor, indexWebColor, indexMiddleColor, middleIndexColor, middleRingColor, ringLittleColor } = getFingerColor(state)
  const { bankLaceDirection } = getBankLaceDirection(state)

  pseudoDrawingEngraved(ctx)
  // リセット
  canvasResetter(ctx)
  ctx.font = '24px serif'
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = '#282828'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  startInversion(ctx, width)

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

  undoInversion(ctx, width)

  genuineEngravedOfPalm(ctx, palmState, -70, 0) // メーカー捕球面の刻印
  paisleySelected(ctx, state)
}
