import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineFirstMittRearSurface } from '../../canvas/rightThrow/firstMitt/drawRearSurface'

export const useDrawGenuineFirstMittRearSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    if (['firstBaseman'].includes(state.baseModel.position)) {
      drawGenuineFirstMittRearSurface(ctx, state)
    }
  }, [id, state])
}
