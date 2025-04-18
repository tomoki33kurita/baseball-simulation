import { GenuineState } from '@/features/genuine/types'
import { canvasResetter } from '../../canvasResetter'
import { liningDrawer } from './back/liningDrawer'
import { backStyleDrawer } from './back/backStyleDrawer'
import { catchFaceDrawer } from './back/catchFaceDrawer'
import { webDrawer } from './back/webDrawer'
import { laceDrawer } from './back/lace'
import { thumbHook } from './back/thumbHook'
import { littleHook } from './back/littleHook'
import { genuineCatcherMittLabelDrawer } from '../../label/drawer'
import { paisleySelected } from '../../paisleySelected'
import { pseudoDrawingEngraved } from '@/util/canvas'
import { genuineBrandMarkEmbroideryDrawer } from '../../genuineMark'
import { fingerEmbroideryDrawer, onWebEmbroideryDrawer } from '@/util/canvas/embroidery'

export const drawGenuineCatcherMittRearSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return
  pseudoDrawingEngraved(ctx)

  const baseModel = state.baseModel
  canvasResetter(ctx) // リセット
  ctx.font = '24px serif'
  ctx.strokeStyle = '#282828'
  ctx.fillStyle = '#282828'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 50)
  pseudoDrawingEngraved(ctx)

  liningDrawer(ctx, state, 0) // 裏革
  backStyleDrawer(ctx, state) // バックスタイル
  catchFaceDrawer(ctx, state.palm.color, state.stitch.color, state.baseModel.productNumber) // 捕球面側
  webDrawer(ctx, state) // ウェブ
  fingerEmbroideryDrawer(ctx, state.embroideries) // 刺繍
  laceDrawer(ctx, state.lace.color) // 革紐
  thumbHook(ctx, state.thumbHook.color) // かけ紐
  littleHook(ctx, state.littleHook.color) // かけ紐
  genuineCatcherMittLabelDrawer(ctx, state) // ラベル描画
  paisleySelected(ctx, state)
  genuineBrandMarkEmbroideryDrawer(ctx, state)
  onWebEmbroideryDrawer(ctx, state)
}
