import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { drawRearSurface } from '../canvas/drawRearSurface'
import { FiveState } from '../../types'

export const useDrawGloveRearSurface = (id: string, state: FiveState) => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    drawRearSurface(ctx, state)
  }, [id, state])
}
