import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { drawRearSurface } from '../canvas/drawRearSurface'
import { GenuineState } from '../../types'

export const useDrawGloveRearSurface = (id: string, state: GenuineState) => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    drawRearSurface(ctx, state)
  }, [id, state])
}
