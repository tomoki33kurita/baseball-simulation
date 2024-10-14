import { useEffect } from 'react'
import { getCtx } from '@/app/util/canvas/ctx'
import { drawPalmSurface } from '../canvas/drawPalmSurface'
import { State } from '../../types'

export const useDrawGlovePalmSurface = (id: string, state: State) => {
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    drawPalmSurface(ctx, state)
  }, [id, state])
}
