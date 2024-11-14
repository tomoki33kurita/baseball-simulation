import { GenuineState } from '@/features/genuine/types'
import { listCross } from '../lace/listCross'
import { edgesOfAroundWeb } from './edgeOfAroundWeb'
import { edgesOfNormal } from './edgeOfNormal'

export const edgeDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  edgesOfNormal(ctx, state.binding.color)
  edgesOfAroundWeb(ctx, state.binding.color)
  listCross(ctx, state.lace.color)
}
