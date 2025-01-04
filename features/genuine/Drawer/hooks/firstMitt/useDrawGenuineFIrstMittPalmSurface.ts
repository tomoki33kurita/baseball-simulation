import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineFirstMittPalmSurface } from '../../canvas/rightThrow/firstMitt/drawPalmSurface'

export const useDrawGenuineFirstMittPalmSurface = (id: string, state: GenuineState): void => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    if (['firstBaseman'].includes(state.baseModel.position)) {
      drawGenuineFirstMittPalmSurface(ctx, state)
    }
  }, [id, state])
}
