'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/genuine/reducer/catcher'
import { genuineTheme } from '@/features/genuine/Styles'
import { GenuinePageTemplates } from '@/features/genuine/Components/PageTemplates'
import { useDrawGenuineCatcherMittRearSurface } from '@/features/genuine/Drawer/hooks/catcherMitt/useDrawGenuineCatcherMittRearSurface'
import { useDrawGenuineCatcherMittPalmSurface } from '@/features/genuine/Drawer/hooks/catcherMitt/useDrawGenuineCatcherMittPalmSurface'

const GenuineCatcher = () => {
  const position = 'catcher'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  const palmSurfaceId = 'catchingSurface'
  useDrawGenuineCatcherMittRearSurface(rearSurfaceId, state)
  useDrawGenuineCatcherMittPalmSurface(palmSurfaceId, state)
  return <GenuinePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={genuineTheme} />
}

export default GenuineCatcher
