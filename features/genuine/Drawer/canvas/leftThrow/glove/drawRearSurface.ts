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

export const drawLeftThrowGenuineGloveRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState, width: number): void => {
  const { isFirstBackStyle, isConnectBackStyle } = getBackStyle(state)
  if (!ctx) return

  const baseModel = state.baseModel

  pseudoDrawingEngraved(ctx)
  canvasResetter(ctx) // リセット
  ctx.font = '24px serif'
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  const laceColor = state.lace.color

  startInversion(ctx, width)
  lining(ctx, state.linings.color) // 裏革
  loopOfRingFingerDrawer(ctx, state)
  backStyleOfGloveBackDrawer(ctx, state) // バックスタイルの描画(ハミダシ,親指刺繍含)
  fingerGuardDrawer(ctx, state) // 指カバー・パッド
  thumbHook(ctx, state.thumbHook.color, 110, -310, 15) // 先端 // 親指掛け紐_上
  webOfGloveBackDrawer(ctx, state)
  lace(ctx, laceColor) // 革紐
  !isFirstBackStyle && !isConnectBackStyle && laceOfWristBeltCrossDrawer(ctx, laceColor)

  undoInversion(ctx, width)
  genuineLeftThrowBrandMarkEmbroideryDrawer(ctx, state)
  genuineLabelDrawer(ctx, state, width) // ラベル描画

  startInversion(ctx, width)
  littleHookDrawer(ctx, state) // 小指掛け紐
  thumbHook(ctx, state.thumbHook.color, -14, 30, 0) //手元

  undoInversion(ctx, width)
  paisleySelected(ctx, state)
  // drawPaisley(ctx, state)
}
