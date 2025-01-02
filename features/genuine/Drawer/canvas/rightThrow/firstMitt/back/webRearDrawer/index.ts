import { GenuineState } from '@/features/genuine/types'
import { webDrawUtil } from '@/util/canvas'
import { normalWeb } from './normalWeb'
import { normalJointWeb } from './normalJointWeb'
import { cross2Web } from './cross2Web'
import { cross3Web } from './cross3Web'
import { crossV2Web } from './crossV2Web'
import { tNet2Web } from './tNet2Web'
import { tNet3Web } from './tNet3Web'

export const webRearDrawerOfFirstMitt = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const { webMatcher } = webDrawUtil(state)
  if (webMatcher(['normal', 'unselected'])) normalWeb(ctx, state)
  if (webMatcher(['normal2'])) normalJointWeb(ctx, state)
  if (webMatcher(['cross2'])) cross2Web(ctx, state)
  if (webMatcher(['cross3'])) cross3Web(ctx, state)
  if (webMatcher(['crossV2'])) crossV2Web(ctx, state)
  if (webMatcher(['tNet2'])) tNet2Web(ctx, state)
  if (webMatcher(['tNet3'])) tNet3Web(ctx, state)
}
