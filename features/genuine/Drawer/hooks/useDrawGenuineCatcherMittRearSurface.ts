import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '../../types'
import { drawGenuineCatcherMittRearSurface } from '../canvas/drawGenuineCatcherMittRearSurface'

export const useDrawGenuineCatcherMittRearSurface = (id: string, state: GenuineState) => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    drawGenuineCatcherMittRearSurface(ctx, state)
  }, [id, state])
}
