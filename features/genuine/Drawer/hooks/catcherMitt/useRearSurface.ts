import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineCatcherMittRearSurface } from '../../canvas/rightThrow/catcherMitt/drawRearSurface'
import { drawLeftThrowGenuineCatcherMittRearSurface } from '../../canvas/leftThrow/catcherMitt/drawRearSurface'

export const useDrawGenuineCatcherMittRearSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const { ctx, canvasWidth } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    if (['catcher'].includes(state.baseModel.position)) {
      if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
        drawGenuineCatcherMittRearSurface(ctx, state)
      } else {
        drawLeftThrowGenuineCatcherMittRearSurface(ctx, state, canvasWidth)
      }
    }
  }, [id, state])
}
