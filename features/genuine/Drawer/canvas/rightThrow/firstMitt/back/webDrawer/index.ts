import { GenuineState } from '@/features/genuine/types'
import { webDrawUtil } from '@/util/canvas'
import { normalWeb } from './normalWeb'
import { cross2Web } from './cross2Web'
import { cross3Web } from './cross3Web'

export const webDrawerOfFirstMitt = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const { webMatcher } = webDrawUtil(state)

  if (webMatcher(['normal', 'normal2'])) normalWeb(ctx, state)
  if (webMatcher(['cross2'])) cross2Web(ctx, state)
  if (webMatcher(['cross3'])) cross3Web(ctx, state)
}
