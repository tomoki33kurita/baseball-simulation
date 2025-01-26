'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/hatakeyama/reducer/catcher'
import { hatakeyamaTheme } from '@/features/hatakeyama/Styles'
import { HatakeyamaPageTemplates } from '@/features/hatakeyama/Components/PageTemplates'
import { useDrawHatakeyamaCatcherMittRearSurface } from '@/features/hatakeyama/Drawer/hooks/catcherMitt/useRearSurface'
import { useDrawHatakeyamaCatcherMittPalmSurface } from '@/features/hatakeyama/Drawer/hooks/catcherMitt/usePalmSurface'

const HatakeyamaCatcher = () => {
  const position = 'catcher'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  const palmSurfaceId = 'catchingSurface'
  useDrawHatakeyamaCatcherMittRearSurface(rearSurfaceId, state)
  useDrawHatakeyamaCatcherMittPalmSurface(palmSurfaceId, state)
  return <HatakeyamaPageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={hatakeyamaTheme} />
}

export default HatakeyamaCatcher
