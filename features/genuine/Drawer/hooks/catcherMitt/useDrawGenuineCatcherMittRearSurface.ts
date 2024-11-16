import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineCatcherMittRearSurface } from '../../canvas/drawGenuineCatcherMittRearSurface'

export const useDrawGenuineCatcherMittRearSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    if (['catcher'].includes(state.baseModel.position)) {
      drawGenuineCatcherMittRearSurface(ctx, state)
    }
  }, [id, state])
}
