import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '../../types'
import { drawGenuineCatcherMittPalmSurface } from '../canvas/drawGenuineCatcherMittPalmSurface'

export const useDrawGenuineCatcherMittPalmSurface = (id: string, state: GenuineState) => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    drawGenuineCatcherMittPalmSurface(ctx, state)
  }, [id, state])
}
