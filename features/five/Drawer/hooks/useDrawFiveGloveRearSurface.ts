import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { drawFiveRearSurface } from '../canvas/drawFiveRearSurface'
import { FiveState } from '../../types'

export const useDrawFiveGloveRearSurface = (id: string, state: FiveState) => {
  useEffect(() => {
    const { ctx } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    drawFiveRearSurface(ctx, state)
  }, [id, state])
}
