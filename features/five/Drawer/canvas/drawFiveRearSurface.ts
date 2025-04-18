import { getFLexEngraving, getOrderType } from '@/features/five/Components/Setters/logic'
import { FiveState } from '../../types'
import { canvasResetter } from './canvasResetter'
import { backStyleOfGloveBackDrawer } from './rightThrow/back/backStyles'
import { fingerGuardDrawer } from './rightThrow/back/fingerCoverOrPad/fingerGuardDrawer'
import { littleHook } from './rightThrow/back/fingerHooks/littleHook'
import { thumbHook } from './rightThrow/back/fingerHooks/thumbHook'
import { fiveLabel } from './rightThrow/back/label'
import { flexEngraving } from './rightThrow/back/label/flex'
import { lace } from './rightThrow/back/lace'
import { laceOfWristBeltCrossDrawer } from './rightThrow/back/lace/laceOfWristBeltFix'
import { lining } from './rightThrow/back/lining'
import { webOfGloveBackDrawer } from './rightThrow/back/web/webOfGloveBackDrawer'

export const drawFiveRearSurface = (ctx: CanvasRenderingContext2D | null, state: FiveState): void => {
  if (!ctx) return

  const { isBasicOrder } = getOrderType(state.orderType)
  const { isFLexEngraving } = getFLexEngraving(state.fLexEngraving)
  const baseModel = state.baseModel

  canvasResetter(ctx) // リセット
  ctx.font = '40px serif'
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = '#282828'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  // Basicオーダーの場合、色の指定は不可
  if (isBasicOrder) {
    const basicColors = baseModel.basicColors
    const basicColor = basicColors.leather.color
    const basicLaceColor = basicColors.lace.color
    const webColor = basicColors.leather.color
    const laceColor = basicColors.lace.color
    const stitchColor = basicColors.stitch.color
    lining(ctx, basicColor) // 裏革
    backStyleOfGloveBackDrawer(ctx, state) // バックスタイルの描画(ハミダシ,親指刺繍含)
    fingerGuardDrawer(ctx, state) // 指カバー・パッド
    thumbHook(ctx, basicColor, 110, -310, 15) // 先端  // 親指掛け紐_上
    webOfGloveBackDrawer(ctx, state, webColor, laceColor, stitchColor)
    lace(ctx, basicLaceColor) // 革紐
    laceOfWristBeltCrossDrawer(ctx, basicLaceColor)
    fiveLabel(ctx, state, 20, 38, 0, 0.95) // ラベル描画
    isFLexEngraving && flexEngraving(ctx, '#ccc', 1200, 1300, 0, 0.3) // Fレックスの刻印
    littleHook(ctx, basicColor, 25, 240, -10, 0.7) // 小指掛け紐
    thumbHook(ctx, basicColor, -14, 30, 0)
    return
  }
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
  isFLexEngraving && flexEngraving(ctx, '#ccc', 1200, 1300, 0, 0.3) // Fレックスの刻印
  littleHook(ctx, state.littleHook.color, 25, 240, -10, 0.7) // 小指掛け紐
  thumbHook(ctx, state.thumbHook.color, -14, 30, 0) //手元
}
