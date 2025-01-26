import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { HatakeyamaState } from '@/features/hatakeyama/types'
import { drawHatakeyamaCatcherMittRearSurface } from '../../canvas/rightThrow/catcherMitt/drawRearSurface'

export const useDrawHatakeyamaCatcherMittRearSurface = (id: string, state: HatakeyamaState): void => {
  useEffect(() => {
    const { ctx, canvasWidth } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    if (['catcher'].includes(state.baseModel.position)) {
      drawHatakeyamaCatcherMittRearSurface(ctx, state)
    }
  }, [id, state])
}
