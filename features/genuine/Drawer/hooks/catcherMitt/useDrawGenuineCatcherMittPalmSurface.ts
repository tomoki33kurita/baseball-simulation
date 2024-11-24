import { useEffect } from 'react'
import { getCtx } from '@/util/canvas/ctx'
import { GenuineState } from '@/features/genuine/types'
import { drawGenuineCatcherMittPalmSurface } from '../../canvas/drawGenuineCatcherMittPalmSurface'
import { useMediaQuery } from '@mui/material'

export const useDrawGenuineCatcherMittPalmSurface = (id: string, state: GenuineState): void => {
  const isMobile = useMediaQuery('(max-width: 430px)')
  useEffect(() => {
    const ctx = getCtx(id)
    if (state.baseModel.productNumber === '') return
    if (['catcher'].includes(state.baseModel.position)) {
      drawGenuineCatcherMittPalmSurface(ctx, state, isMobile)
    }
  }, [id, state])
}
