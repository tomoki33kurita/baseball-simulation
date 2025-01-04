import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { drawFivePalmSurface } from '../canvas/drawFivePalmSurface'
import { FiveState } from '../../types'

export const useDrawFiveGlovePalmSurface = (id: string, state: FiveState) => {
  useEffect(() => {
    const { ctx } = getCtx(id)
    if (ctx === null) return
    if (state.baseModel.productNumber === '') return
    drawFivePalmSurface(ctx, state)
  }, [id, state])
}
