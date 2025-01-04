import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineGlovePalmSurface } from '../../canvas/rightThrow/glove/drawPalmSurface'
import { drawLeftThrowGenuineGlovePalmSurface } from '../../canvas/leftThrow/glove/drawPalmSurface'

export const useDrawGenuineGlovePalmSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const { ctx } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    if (['pitcher', 'infielder', 'outfielder'].includes(state.baseModel.position)) {
      if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
        drawGenuineGlovePalmSurface(ctx, state)
      } else {
        drawLeftThrowGenuineGlovePalmSurface(ctx, state)
      }
    }
  }, [id, state])
}
