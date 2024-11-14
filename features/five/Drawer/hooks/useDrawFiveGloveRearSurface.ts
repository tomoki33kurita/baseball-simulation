import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { drawFiveRearSurface } from '../canvas/drawFiveRearSurface'
import { FiveState } from '../../types'

export const useDrawFiveGloveRearSurface = (id: string, state: FiveState) => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    drawFiveRearSurface(ctx, state)
  }, [id, state])
}
