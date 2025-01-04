import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineFirstMittRearSurface } from '../../canvas/rightThrow/firstMitt/drawRearSurface'
import { drawLeftThrowGenuineFirstMittRearSurface } from '../../canvas/leftThrow/firstMitt/drawRearSurface'

export const useDrawGenuineFirstMittRearSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const { ctx, canvasWidth } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    if (['firstBaseman'].includes(state.baseModel.position)) {
      switch (state.dominantArm.value) {
        case 'rightThrow':
        case 'unselected':
          drawGenuineFirstMittRearSurface(ctx, state)
          break
        case 'leftThrow':
          drawLeftThrowGenuineFirstMittRearSurface(ctx, state, canvasWidth)
          break
      }
    }
  }, [id, state])
}
