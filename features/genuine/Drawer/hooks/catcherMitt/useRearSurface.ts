import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineCatcherMittRearSurface } from '../../canvas/rightThrow/catcherMitt/drawRearSurface'
import { drawLeftThrowGenuineCatcherMittRearSurface } from '../../canvas/leftThrow/catcherMitt/drawRearSurface'

export const useDrawGenuineCatcherMittRearSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    if (['catcher'].includes(state.baseModel.position)) {
      if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
        drawGenuineCatcherMittRearSurface(ctx, state)
      } else {
        drawLeftThrowGenuineCatcherMittRearSurface(ctx, state)
      }
    }
  }, [id, state])
}
