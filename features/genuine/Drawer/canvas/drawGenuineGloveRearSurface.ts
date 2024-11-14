import { GenuineState } from '../../types'
import { canvasResetter } from './canvasResetter'
import { backStyleOfGloveBackDrawer } from './rightThrow/back/backStyles'
import { fingerGuardDrawer } from './rightThrow/back/fingerCoverOrPad/fingerGuardDrawer'
import { littleHook } from './rightThrow/back/fingerHooks/littleHook'
import { thumbHook } from './rightThrow/back/fingerHooks/thumbHook'
import { fiveLabel } from './rightThrow/back/label'
import { lace } from './rightThrow/back/lace'
import { laceOfWristBeltCrossDrawer } from './rightThrow/back/lace/laceOfWristBeltFix'
import { lining } from './rightThrow/back/lining'
import { webOfGloveBackDrawer } from './rightThrow/back/web/webOfGloveBackDrawer'

export const drawGenuineGloveRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return

  const baseModel = state.baseModel

  canvasResetter(ctx) // リセット
  ctx.font = '40px serif'
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  const webColor = state.web.color
  const laceColor = state.lace.color
  const stitchColor = state.stitch.color
  lining(ctx, state.linings.color) // 裏革
  backStyleOfGloveBackDrawer(ctx, state) // バックスタイルの描画(ハミダシ,親指刺繍含)
  fingerGuardDrawer(ctx, state) // 指カバー・パッド
  thumbHook(ctx, state.thumbHook.color, 110, -310, 15) // 先端 // 親指掛け紐_上
  webOfGloveBackDrawer(ctx, state, webColor, laceColor, stitchColor)
  lace(ctx, laceColor) // 革紐
  laceOfWristBeltCrossDrawer(ctx, laceColor)
  fiveLabel(ctx, state, 20, 38, 0, 0.95) // ラベル描画
  littleHook(ctx, state.littleHook.color, 25, 240, -10, 0.7) // 小指掛け紐
  thumbHook(ctx, state.thumbHook.color, -14, 30, 0) //手元
}
