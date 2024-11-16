'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/genuine/reducer/catcher'
import { genuineTheme } from '@/features/genuine/Styles'
import { GenuinePageTemplates } from '@/features/genuine/Components/PageTemplates'
import { useDrawGenuineCatcherMittRearSurface } from '@/features/genuine/Drawer/hooks/useDrawGenuineCatcherMittRearSurface'
import { useDrawGenuineCatcherMittPalmSurface } from '@/features/genuine/Drawer/hooks/useDrawGenuineCatcherMittPalmSurface'

const GenuineCatcher = () => {
  const position = 'catcher'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawGenuineCatcherMittRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'catchingSurface'
  useDrawGenuineCatcherMittPalmSurface(palmSurfaceId, state)
  return <GenuinePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={genuineTheme} />
}

export default GenuineCatcher
