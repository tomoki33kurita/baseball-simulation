import { GenuineState } from '../../types'
import { canvasResetter } from './canvasResetter'
import { genuineLabelDrawer } from './label/drawer'
import { backStyleDrawer } from './rightThrow/catcherMitt/back/backStyleDrawer'
import { catchFaceDrawer } from './rightThrow/catcherMitt/back/catchFaceDrawer'
import { fingerGuardDrawer } from './rightThrow/catcherMitt/back/fingerGuardDrawer'
import { laceDrawer } from './rightThrow/catcherMitt/back/lace'
import { liningDrawer } from './rightThrow/catcherMitt/back/liningDrawer'
import { littleHook } from './rightThrow/catcherMitt/back/littleHook'
import { thumbHook } from './rightThrow/catcherMitt/back/thumbHook'
import { webDrawer } from './rightThrow/catcherMitt/back/webDrawer'

export const drawGenuineCatcherMittRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return

  const baseModel = state.baseModel

  canvasResetter(ctx) // リセット
  ctx.font = '40px serif'
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)
  canvasResetter(ctx)
  liningDrawer(ctx, state) // 裏革
  backStyleDrawer(ctx, state) // バックスタイル
  catchFaceDrawer(ctx, state.palm.color, state.stitch.color, state.baseModel.productNumber) // 捕球面側
  fingerGuardDrawer(ctx, state) // 指カバー・指当て
  // fingerEmbroideryDrawer(ctx, state.embroideries) // 親指、小指の刺繍
  webDrawer(ctx, state) // ウェブ
  laceDrawer(ctx, state.lace.color) // 革紐
  thumbHook(ctx, state.thumbHook.color) // かけ紐
  littleHook(ctx, state.littleHook.color) // かけ紐
  genuineLabelDrawer(ctx, state) // ラベル描画
}
