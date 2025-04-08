import { canvasResetter } from '../../canvasResetter'
import { GenuineState } from '../../../../types'
import { laceOfKnots } from './front/lace/knots'
import { laceOfBackOfAroundWebDrawer } from './front/lace/aroundWeb'
import { palmDrawer } from './front/palm'
import { thumbMachi } from './front/thumbMachi'
import { littleMachi } from './front/littleMachi'
import { edgeDrawer } from './front/binding'
import { stitch } from './front/stitch'
import { laceDrawer } from './front/lace'
import { webDrawer } from './front/web'
import { paisleySelected } from '../../paisleySelected'
import { pseudoDrawingEngraved } from '@/util/canvas'
import { genuineEngravedOfPalm } from '../../genuineMark'
import { palmWelting } from './front/welting'

export const drawGenuineCatcherMittPalmSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return

  pseudoDrawingEngraved(ctx)
  const baseModel = state.baseModel
  canvasResetter(ctx) // リセット
  ctx.font = '24px serif'
  ctx.strokeStyle = '#383838'
  ctx.fillStyle = '#383838'
  ctx.strokeText('型番：' + baseModel.productNumber, 50, 70)

  const palmState = state.palm
  laceOfKnots(ctx, state.lace.color, 0, 0)
  laceOfBackOfAroundWebDrawer(ctx, state)
  webDrawer(ctx, state)
  palmDrawer(ctx, state)

  thumbMachi(ctx, state.thumbMachi.color)
  littleMachi(ctx, state.littleMachi.color)

  const palmWeltingItem = state.welting.value === 'none' ? state.palmWelting : state.welting
  palmWelting(ctx, palmWeltingItem)
  edgeDrawer(ctx, state)
  stitch(ctx, state.stitch.color, palmWeltingItem)
  laceDrawer(ctx, state)

  genuineEngravedOfPalm(ctx, palmState, 0, 0) // メーカー捕球面の刻印
  paisleySelected(ctx, state)
}
