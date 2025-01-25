import { getBackStyle } from '../../../../Components/Setters/logic'
import { GenuineState } from '../../../../types'
import { canvasResetter } from '../../canvasResetter'
import { backStyleOfGloveBackDrawer } from './back/backStyles'
import { fingerGuardDrawer } from './back/fingerCoverOrPad/fingerGuardDrawer'
import { thumbHook } from './back/fingerHooks/thumbHook'
import { genuineLabelDrawer } from '../../label/drawer'
import { lace } from './back/lace'
import { laceOfWristBeltCrossDrawer } from './back/lace/laceOfWristBeltFix'
import { lining } from './back/lining'
import { webOfGloveBackDrawer } from './back/web/webOfGloveBackDrawer'
import { loopOfRingFingerDrawer } from './back/loopOfFingerDrawer'
import { paisleySelected } from '../../paisleySelected'
import { littleHookDrawer } from './back/fingerHooks'
import { pseudoDrawingEngraved } from '@/util/canvas'
import { genuineBrandMarkEmbroideryDrawer } from '../../genuineMark'
import { bandSideEmbroideryDrawer, liningEmbroideryDrawer, nonThumbEmbroideryDrawer, thumbEmbroideryDrawer } from '@/util/canvas/embroidery'
// import { meshDrawer } from './rightThrow/glove/back/mesh'

// const drawPaisley = (ctx: CanvasRenderingContext2D, state: GenuineState) => {
//   ctx.strokeStyle = 'red'
//   ctx.beginPath()
//   ctx.moveTo(225, 145)
//   // ctx.quadraticCurveTo()
//   // ctx.quadraticCurveTo()
//   ctx.stroke()
//   ctx.closePath()
// }

export const drawGenuineGloveRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState, width: number): void => {
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
  lining(ctx, state.linings.color) // 裏革
  liningEmbroideryDrawer(ctx, state.embroideries, 'first') // 裏革の刺繍
  liningEmbroideryDrawer(ctx, state.embroideries, 'second') // 裏革の刺繍
  loopOfRingFingerDrawer(ctx, state)
  backStyleOfGloveBackDrawer(ctx, state) // バックスタイルの描画(ハミダシ,)
  thumbEmbroideryDrawer(ctx, state.embroideries) // 親指の刺繍
  nonThumbEmbroideryDrawer(ctx, 'childFinger', state.embroideries) // 小指の刺繍
  genuineBrandMarkEmbroideryDrawer(ctx, state)
  fingerGuardDrawer(ctx, state) // 指カバー・パッド
  thumbHook(ctx, state.thumbHook.color, 110, -310, 15) // 先端 // 親指掛け紐_上
  webOfGloveBackDrawer(ctx, state)
  lace(ctx, laceColor) // 革紐
  !isFirstBackStyle && !isConnectBackStyle && laceOfWristBeltCrossDrawer(ctx, laceColor)
  genuineLabelDrawer(ctx, state, width) // ラベル描画
  littleHookDrawer(ctx, state) // 小指掛け紐
  bandSideEmbroideryDrawer(ctx, state) // サイドの刺繍
  thumbHook(ctx, state.thumbHook.color, -14, 30, 0) //手元
  paisleySelected(ctx, state)
  // drawPaisley(ctx, state)
}
