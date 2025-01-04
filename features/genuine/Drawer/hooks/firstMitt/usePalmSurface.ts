import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineFirstMittPalmSurface } from '../../canvas/rightThrow/firstMitt/drawPalmSurface'
import { drawLeftThrowGenuineFirstMittPalmSurface } from '../../canvas/leftThrow/firstMitt/drawPalmSurface'

export const useDrawGenuineFirstMittPalmSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    if (['firstBaseman'].includes(state.baseModel.position)) {
      if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
        drawGenuineFirstMittPalmSurface(ctx, state)
      } else {
        drawLeftThrowGenuineFirstMittPalmSurface(ctx, state)
      }
    }
  }, [id, state])
}
