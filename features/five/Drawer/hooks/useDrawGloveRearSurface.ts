import { useEffect } from 'react'
import { getCtx } from '@/app/util/canvas/ctx'
import { drawRearSurface } from '../canvas/drawRearSurface'
import { State } from '../../types'

export const useDrawGloveRearSurface = (id: string, state: State) => {
  useEffect(() => {
    const ctx = getCtx(id) // useEventEffect使って見える
    if (state.baseModel.productNumber === '') return
    drawRearSurface(ctx, state)
  }, [id, state])
}
