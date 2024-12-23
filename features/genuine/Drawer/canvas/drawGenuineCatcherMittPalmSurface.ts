import { canvasResetter } from './canvasResetter'
import { genuineEngravedOfPalm, pseudoDrawingEngraved } from './rightThrow/glove/front/engraving'
import { GenuineState } from '../../types'
import { laceOfKnots } from './rightThrow/catcherMitt/front/lace/knots'
import { laceOfBackOfAroundWebDrawer } from './rightThrow/catcherMitt/front/lace/aroundWeb'
import { palmDrawer } from './rightThrow/catcherMitt/front/palm'
import { thumbMachi } from './rightThrow/catcherMitt/front/thumbMachi'
import { littleMachi } from './rightThrow/catcherMitt/front/littleMachi'
import { edgeDrawer } from './rightThrow/catcherMitt/front/binding'
import { stitch } from './rightThrow/catcherMitt/front/stitch'
import { laceDrawer } from './rightThrow/catcherMitt/front/lace'
import { webDrawer } from './rightThrow/catcherMitt/front/web'
import { paisleySelected } from './paisleySelected'

export const drawGenuineCatcherMittPalmSurface = (ctx: CanvasRenderingContext2D | null, state: GenuineState): void => {
  if (!ctx) return

  pseudoDrawingEngraved(ctx)
  const baseModel = state.baseModel
  canvasResetter(ctx) // リセット
  ctx.font = '40px serif'
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

  genuineEngravedOfPalm(ctx, palmState, 0, 0) // メーカー捕球面の刻印
  paisleySelected(ctx, state)
}
