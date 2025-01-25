import { pseudoDrawingEngraved, startInversion, undoInversion } from '@/util/canvas'
import { canvasResetter } from '../../canvasResetter'
import { liningDrawer } from '../../rightThrow/catcherMitt/back/liningDrawer'
import { backStyleDrawer } from '../../rightThrow/catcherMitt/back/backStyleDrawer'
import { catchFaceDrawer } from '../../rightThrow/catcherMitt/back/catchFaceDrawer'
import { webDrawer } from '../../rightThrow/catcherMitt/back/webDrawer'
import { laceDrawer } from '../../rightThrow/catcherMitt/back/lace'
import { thumbHook } from '../../rightThrow/catcherMitt/back/thumbHook'
import { littleHook } from '../../rightThrow/catcherMitt/back/littleHook'
import { genuineCatcherMittLabelDrawer } from '../../label/drawer'
import { paisleySelected } from '../../paisleySelected'
import { GenuineState } from '@/features/genuine/types'
import { genuineLeftThrowBrandMarkEmbroideryDrawer } from '../../genuineMark'
import { fingerEmbroideryDrawerLeftThrow } from '@/util/canvas/embroidery'

export const drawLeftThrowGenuineCatcherMittRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState, width: number): void => {
  if (!ctx) return
  pseudoDrawingEngraved(ctx)

  const baseModel = state.baseModel
  canvasResetter(ctx) // リセット
  ctx.font = '24px serif'
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 50)
  pseudoDrawingEngraved(ctx)

  startInversion(ctx, width)
  liningDrawer(ctx, state, width) // 裏革
  backStyleDrawer(ctx, state) // バックスタイル
  catchFaceDrawer(ctx, state.palm.color, state.stitch.color, state.baseModel.productNumber) // 捕球面側
  webDrawer(ctx, state) // ウェブ
  laceDrawer(ctx, state.lace.color) // 革紐
  thumbHook(ctx, state.thumbHook.color) // かけ紐
  littleHook(ctx, state.littleHook.color) // かけ紐
  undoInversion(ctx, width)
  fingerEmbroideryDrawerLeftThrow(ctx, state.embroideries) // 刺繍
  genuineCatcherMittLabelDrawer(ctx, state) // ラベル描画
  paisleySelected(ctx, state)
  genuineLeftThrowBrandMarkEmbroideryDrawer(ctx, state)
}
