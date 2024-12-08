import { getBackStyle } from '../../Components/Setters/logic'
import { GenuineState } from '../../types'
import { canvasResetter } from './canvasResetter'
import { backStyleOfGloveBackDrawer } from './rightThrow/glove/back/backStyles'
import { fingerGuardDrawer } from './rightThrow/glove/back/fingerCoverOrPad/fingerGuardDrawer'
import { littleHook } from './rightThrow/glove/back/fingerHooks/littleHook'
import { thumbHook } from './rightThrow/glove/back/fingerHooks/thumbHook'
import { genuineLabelDrawer } from './label/drawer'
import { lace } from './rightThrow/glove/back/lace'
import { laceOfWristBeltCrossDrawer } from './rightThrow/glove/back/lace/laceOfWristBeltFix'
import { lining } from './rightThrow/glove/back/lining'
import { webOfGloveBackDrawer } from './rightThrow/glove/back/web/webOfGloveBackDrawer'
import { loopOfRingFingerDrawer } from './rightThrow/glove/back/loopOfFingerDrawer'
// import { meshDrawer } from './rightThrow/glove/back/mesh'

export const drawGenuineGloveRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  const { isFirstBackStyle, isConnectBackStyle } = getBackStyle(state)
  if (!ctx) return

  const baseModel = state.baseModel

  canvasResetter(ctx) // リセット
  ctx.font = '40px serif'
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  const laceColor = state.lace.color
  lining(ctx, state.linings.color) // 裏革
  loopOfRingFingerDrawer(ctx, state)
  backStyleOfGloveBackDrawer(ctx, state) // バックスタイルの描画(ハミダシ,親指刺繍含)
  fingerGuardDrawer(ctx, state) // 指カバー・パッド
  thumbHook(ctx, state.thumbHook.color, 110, -310, 15) // 先端 // 親指掛け紐_上
  webOfGloveBackDrawer(ctx, state)
  lace(ctx, laceColor) // 革紐
  !isFirstBackStyle && !isConnectBackStyle && laceOfWristBeltCrossDrawer(ctx, laceColor)
  genuineLabelDrawer(ctx, state) // ラベル描画
  littleHook(ctx, state.littleHook.color, 15, 240, -10, 0.7) // 小指掛け紐
  thumbHook(ctx, state.thumbHook.color, -14, 30, 0) //手元
  if (['normalMesh', 'crownMesh'].includes(state.backStyle.value)) {
    // console.log('メッシュ指定されている')
    // meshDrawer(ctx, 'red')
  }
}
