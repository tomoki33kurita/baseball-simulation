import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { HatakeyamaState } from '@/features/hatakeyama/types'
import { drawHatakeyamaCatcherMittPalmSurface } from '../../canvas/rightThrow/catcherMitt/drawPalmSurface'

export const useDrawHatakeyamaCatcherMittPalmSurface = (id: string, state: HatakeyamaState): void => {
  useEffect(() => {
    const { ctx, canvasWidth } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    if (['catcher'].includes(state.baseModel.position)) {
      drawHatakeyamaCatcherMittPalmSurface(ctx, state)
    }
  }, [id, state])
}
