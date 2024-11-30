import { crossBackLace } from './crossBackLace'
import { straightBackLace } from './straightBackLace'
import { outfielderDefaultBackLace } from './outfielderDefaultBackLace'
import { GenuineState } from '@/features/genuine/types'

export const backLaceDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const backLaceValue = state.backLaceStyle.value
  const laceColor = state.lace.color
  switch (backLaceValue) {
    case 'normal':
      straightBackLace(ctx, laceColor)
      return
    // case 'mix':
    //   mixBackLace(ctx, laceColor)
    //   return
    case 'cross':
      crossBackLace(ctx, laceColor)
      return
    case 'none':
      return
    default:
      switch (state.baseModel.position) {
        case 'outfielder':
          outfielderDefaultBackLace(ctx, laceColor, 0, 0)
          return
        default:
          return
      }
  }
}
