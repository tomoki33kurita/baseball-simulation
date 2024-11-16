import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineGlovePalmSurface } from '../../canvas/drawGenuineGlovePalmSurface'

export const useDrawGenuineGlovePalmSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    if (['pitcher', 'infielder', 'outfielder'].includes(state.baseModel.position)) {
      drawGenuineGlovePalmSurface(ctx, state)
    }
  }, [id, state])
}
