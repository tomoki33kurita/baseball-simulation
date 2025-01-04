import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineGloveRearSurface } from '../../canvas/rightThrow/glove/drawRearSurface'
import { drawLeftThrowGenuineGloveRearSurface } from '../../canvas/leftThrow/glove/drawRearSurface'

export const useDrawGenuineGloveRearSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const { ctx, canvasWidth } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    if (['pitcher', 'infielder', 'outfielder'].includes(state.baseModel.position)) {
      if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
        drawGenuineGloveRearSurface(ctx, state, canvasWidth)
      } else {
        drawLeftThrowGenuineGloveRearSurface(ctx, state, canvasWidth)
      }
    }
  }, [id, state])
}
