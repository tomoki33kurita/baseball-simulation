import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineGloveRearSurface } from '../../canvas/rightThrow/glove/drawRearSurface'
import { drawLeftThrowGenuineGloveRearSurface } from '../../canvas/leftThrow/glove/drawRearSurface'

export const useDrawGenuineGloveRearSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    if (['pitcher', 'infielder', 'outfielder'].includes(state.baseModel.position)) {
      if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
        drawGenuineGloveRearSurface(ctx, state)
      } else {
        drawLeftThrowGenuineGloveRearSurface(ctx, state)
      }
    }
  }, [id, state])
}
