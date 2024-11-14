import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '../../types'
import { drawGenuineFirstMittRearSurface } from '../canvas/drawGenuineFirstMittRearSurface'

export const useDrawGenuineFirstMittRearSurface = (id: string, state: GenuineState) => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    drawGenuineFirstMittRearSurface(ctx, state)
  }, [id, state])
}
