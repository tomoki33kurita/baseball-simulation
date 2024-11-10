import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { drawPalmSurface } from '../canvas/drawPalmSurface'
import { GenuineState } from '../../types'

export const useDrawGlovePalmSurface = (id: string, state: GenuineState) => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    drawPalmSurface(ctx, state)
  }, [id, state])
}
