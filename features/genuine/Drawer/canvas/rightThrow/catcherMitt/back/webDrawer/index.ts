import { GenuineState } from '@/features/genuine/types'
import { shallowWeb } from './shallowWeb'
import { deepWeb } from './deepWeb'

export const webDrawer = (ctx: CanvasRenderingContext2D, state: GenuineState): void => {
  const isShallowWebModel = ['YT-22'].includes(state.baseModel.productNumber)
  if (isShallowWebModel) {
    shallowWeb(ctx, state) // 浅めのウェブ
  }
  if (!isShallowWebModel) {
    deepWeb(ctx, state) // 普通・深めのウェブ
  }
}
