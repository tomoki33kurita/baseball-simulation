import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineCatcherMittPalmSurface } from '../../canvas/drawGenuineCatcherMittPalmSurface'

export const useDrawGenuineCatcherMittPalmSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    if (['catcher'].includes(state.baseModel.position)) {
      drawGenuineCatcherMittPalmSurface(ctx, state)
    }
  }, [id, state])
}
