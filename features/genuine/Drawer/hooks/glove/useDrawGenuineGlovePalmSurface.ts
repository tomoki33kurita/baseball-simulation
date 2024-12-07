import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineGlovePalmSurface } from '../../canvas/drawGenuineGlovePalmSurface'
import { useMediaQuery } from '@mui/material'

export const useDrawGenuineGlovePalmSurface = (id: string, state: GenuineState): void => {
  const isMobile = useMediaQuery('(max-width: 430px)')

  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    if (['pitcher', 'infielder', 'outfielder'].includes(state.baseModel.position)) {
      drawGenuineGlovePalmSurface(ctx, state, isMobile)
    }
  }, [id, state])
}
