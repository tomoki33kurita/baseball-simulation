import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineGloveRearSurface } from '../../canvas/rightThrow/glove/drawGenuineGloveRearSurface'

export const useDrawGenuineGloveRearSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    if (['pitcher', 'infielder', 'outfielder'].includes(state.baseModel.position)) {
      drawGenuineGloveRearSurface(ctx, state)
    }
  }, [id, state])
}
