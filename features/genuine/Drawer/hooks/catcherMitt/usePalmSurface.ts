import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineCatcherMittPalmSurface } from '../../canvas/rightThrow/catcherMitt/drawPalmSurface'
import { drawLeftThrowGenuineCatcherMittPalmSurface } from '../../canvas/leftThrow/catcherMitt/drawPalmSurface'

export const useDrawGenuineCatcherMittPalmSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    if (['catcher'].includes(state.baseModel.position)) {
      if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
        drawGenuineCatcherMittPalmSurface(ctx, state)
      } else {
        drawLeftThrowGenuineCatcherMittPalmSurface(ctx, state)
      }
    }
  }, [id, state])
}
