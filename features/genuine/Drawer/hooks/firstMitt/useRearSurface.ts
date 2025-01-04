import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineFirstMittRearSurface } from '../../canvas/rightThrow/firstMitt/drawRearSurface'
import { drawLeftThrowGenuineFirstMittRearSurface } from '../../canvas/leftThrow/firstMitt/drawRearSurface'

export const useDrawGenuineFirstMittRearSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const { ctx } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    if (['firstBaseman'].includes(state.baseModel.position)) {
      if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
        drawGenuineFirstMittRearSurface(ctx, state)
      } else {
        drawLeftThrowGenuineFirstMittRearSurface(ctx, state)
      }
    }
  }, [id, state])
}
