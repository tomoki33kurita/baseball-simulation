import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '../../types'
import { drawGenuineFirstMittPalmSurface } from '../canvas/drawGenuineFirstMittPalmSurface'

export const useDrawGenuineFirstMittPalmSurface = (id: string, state: GenuineState) => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    drawGenuineFirstMittPalmSurface(ctx, state)
  }, [id, state])
}
