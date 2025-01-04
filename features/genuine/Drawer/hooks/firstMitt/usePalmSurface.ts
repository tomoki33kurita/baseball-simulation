import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineFirstMittPalmSurface } from '../../canvas/rightThrow/firstMitt/drawPalmSurface'
import { drawLeftThrowGenuineFirstMittPalmSurface } from '../../canvas/leftThrow/firstMitt/drawPalmSurface'
import { startInversion } from '@/util/canvas'

export const useDrawGenuineFirstMittPalmSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const { ctx, canvasWidth } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    if (['firstBaseman'].includes(state.baseModel.position)) {
      if (['rightThrow', 'unselected'].includes(state.dominantArm.value)) {
        drawGenuineFirstMittPalmSurface(ctx, state)
      } else {
        startInversion(ctx, canvasWidth)
        drawLeftThrowGenuineFirstMittPalmSurface(ctx, state)
      }
    }
  }, [id, state])
}
