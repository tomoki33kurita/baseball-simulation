import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineFirstMittPalmSurface } from '../../canvas/drawGenuineFirstMittPalmSurface'
import { useMediaQuery } from '@mui/material'

export const useDrawGenuineFirstMittPalmSurface = (id: string, state: GenuineState): void => {
  const isMobile = useMediaQuery('(max-width: 430px)')
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    if (['firstBaseman'].includes(state.baseModel.position)) {
      drawGenuineFirstMittPalmSurface(ctx, state, isMobile)
    }
  }, [id, state])
}
