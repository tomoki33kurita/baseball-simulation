import { getBackStyle } from '@/features/genuine/Components/Setters/logic'
import { GenuineState } from '@/features/genuine/types'
import { pseudoDrawingEngraved, startInversion, undoInversion } from '@/util/canvas'
import { canvasResetter } from '../../canvasResetter'
import { lining } from '../../rightThrow/glove/back/lining'
import { loopOfRingFingerDrawer } from '../../rightThrow/glove/back/loopOfFingerDrawer'
import { backStyleOfGloveBackDrawer } from '../../rightThrow/glove/back/backStyles'
import { fingerGuardDrawer } from '../../rightThrow/glove/back/fingerCoverOrPad/fingerGuardDrawer'
import { thumbHook } from '../../rightThrow/glove/back/fingerHooks/thumbHook'
import { webOfGloveBackDrawer } from '../../rightThrow/glove/back/web/webOfGloveBackDrawer'
import { lace } from '../../rightThrow/glove/back/lace'
import { laceOfWristBeltCrossDrawer } from '../../rightThrow/glove/back/lace/laceOfWristBeltFix'
import { genuineLabelDrawer } from '../../label/drawer'
import { littleHookDrawer } from '../../rightThrow/glove/back/fingerHooks'
import { paisleySelected } from '../../paisleySelected'
import { genuineLeftThrowBrandMarkEmbroideryDrawer } from '../../genuineMark'
import {
  bandSideEmbroideryDrawer,
  liningEmbroideryDrawerLeftThrow,
  nonThumbEmbroideryDrawerLeftThrow,
  thumbEmbroideryDrawerLeftThrow,
  underWebEmbroideryDrawerLeftThrow
} from '@/util/canvas/embroidery'

export const drawLeftThrowGenuineGloveRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState, width: number): void => {
  const { isFirstBackStyle, isConnectBackStyle } = getBackStyle(state)
  if (!ctx) return

  const baseModel = state.baseModel

  pseudoDrawingEngraved(ctx)
  canvasResetter(ctx) // リセット
  ctx.font = '24px serif'
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = '#282828'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  const laceColor = state.lace.color

  startInversion(ctx, width)
  lining(ctx, state.linings.color) // 裏革
  undoInversion(ctx, width)
  liningEmbroideryDrawerLeftThrow(ctx, state.embroideries, 'first') // 平裏の刺繍描画1段目
  liningEmbroideryDrawerLeftThrow(ctx, state.embroideries, 'second') // 平裏の刺繍描画2段目
  startInversion(ctx, width)

  loopOfRingFingerDrawer(ctx, state)
  backStyleOfGloveBackDrawer(ctx, state) // バックスタイルの描画(ハミダシ,親指刺繍含)
  fingerGuardDrawer(ctx, state) // 指カバー・パッド
  thumbHook(ctx, state.thumbHook.color, 110, -310, 15) // 先端 // 親指掛け紐_上
  undoInversion(ctx, width)

  nonThumbEmbroideryDrawerLeftThrow(ctx, 'childFinger', state.embroideries) // 小指への刺繍
  startInversion(ctx, width)

  webOfGloveBackDrawer(ctx, state)
  lace(ctx, laceColor) // 革紐
  !isFirstBackStyle && !isConnectBackStyle && laceOfWristBeltCrossDrawer(ctx, laceColor)

  undoInversion(ctx, width)
  thumbEmbroideryDrawerLeftThrow(ctx, state) // 親指への刺繍
  underWebEmbroideryDrawerLeftThrow(ctx, state.embroideries) // ウェブ下の刺繍... ファーストバックのみ
  genuineLeftThrowBrandMarkEmbroideryDrawer(ctx, state)
  genuineLabelDrawer(ctx, state, width) // ラベル描画

  bandSideEmbroideryDrawer(ctx, state) // バンド横の刺繍

  startInversion(ctx, width)
  littleHookDrawer(ctx, state) // 小指掛け紐
  thumbHook(ctx, state.thumbHook.color, -14, 30, 0) //手元

  undoInversion(ctx, width)
  paisleySelected(ctx, state)
  // drawPaisley(ctx, state)
}
