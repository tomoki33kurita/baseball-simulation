import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { drawGenuinePalmSurface } from '../canvas/drawGenuinePalmSurface'
import { GenuineState } from '../../types'

export const useDrawGenuineGlovePalmSurface = (id: string, state: GenuineState) => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    drawGenuinePalmSurface(ctx, state)
  }, [id, state])
}
