import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineFirstMittPalmSurface } from '../../canvas/rightThrow/firstMitt/drawPalmSurface'
import { drawLeftThrowGenuineFirstMittPalmSurface } from '../../canvas/leftThrow/firstMitt/drawPalmSurface'

export const useDrawGenuineFirstMittPalmSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const { ctx, canvasWidth } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    if (['firstBaseman'].includes(state.baseModel.position)) {
      switch (state.dominantArm.value) {
        case 'rightThrow':
        case 'unselected':
          drawGenuineFirstMittPalmSurface(ctx, state)
          break
        case 'leftThrow':
          drawLeftThrowGenuineFirstMittPalmSurface(ctx, state, canvasWidth)
          break
      }
    }
  }, [id, state])
}
