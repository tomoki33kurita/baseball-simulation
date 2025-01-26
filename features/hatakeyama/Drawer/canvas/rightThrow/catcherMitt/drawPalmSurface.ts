import { canvasResetter } from '../../canvasResetter'
import { HatakeyamaState } from '../../../../types'
import { laceOfKnots } from './front/lace/knots'
import { laceOfBackOfAroundWebDrawer } from './front/lace/aroundWeb'
import { palmDrawer } from './front/palm'
import { thumbMachi } from './front/thumbMachi'
import { littleMachi } from './front/littleMachi'
import { edgeDrawer } from './front/binding'
import { stitch } from './front/stitch'
import { laceDrawer } from './front/lace'
import { webDrawer } from './front/web'
import { pseudoDrawingEngraved } from '@/util/canvas'

export const drawHatakeyamaCatcherMittPalmSurface = (ctx: CanvasRenderingContext2D | null, state: HatakeyamaState): void => {
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

  edgeDrawer(ctx, state)
  stitch(ctx, state.stitch.color)
  laceDrawer(ctx, state)
}
