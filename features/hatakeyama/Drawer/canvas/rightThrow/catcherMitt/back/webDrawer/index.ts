import { shallowWeb } from './shallowWeb'
import { deepWeb } from './deepWeb'
import { towPeaceWeb } from './twoPeaceWeb'
import { HatakeyamaState } from '@/features/hatakeyama/types'

export const webDrawer = (ctx: CanvasRenderingContext2D, state: HatakeyamaState): void => {
  const isShallowWeb = ['onePeaceShallow'].includes(state.coreHardness.value)
  if (isShallowWeb) {
    shallowWeb(ctx, state) // 浅めのウェブ
  }
  const isOnePeace = ['onePeace'].includes(state.coreHardness.value)
  if (isOnePeace) {
    deepWeb(ctx, state) // 普通・深めのウェブ
  }
  const isTwoPeace = ['twoPeace'].includes(state.coreHardness.value)
  if (isTwoPeace) {
    towPeaceWeb(ctx, state) // 普通・深めのウェブ
  }
}
