import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { drawGenuineRearSurface } from '../canvas/drawGenuineRearSurface'
import { GenuineState } from '../../types'

export const useDrawGenuineGloveRearSurface = (id: string, state: GenuineState) => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    drawGenuineRearSurface(ctx, state)
  }, [id, state])
}
