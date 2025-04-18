'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/genuine/reducer/outfielder'
import { genuineTheme } from '@/features/genuine/Styles'
import { GenuinePageTemplates } from '@/features/genuine/Components/PageTemplates'
import { useDrawGenuineGloveRearSurface } from '@/features/genuine/Drawer/hooks/glove/useRearSurface'
import { useDrawGenuineGlovePalmSurface } from '@/features/genuine/Drawer/hooks/glove/usePalmSurface'

const GenuineOutfielder = () => {
  const position = 'outfielder'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  const palmSurfaceId = 'catchingSurface'
  useDrawGenuineGloveRearSurface(rearSurfaceId, state)
  useDrawGenuineGlovePalmSurface(palmSurfaceId, state)
  return <GenuinePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={genuineTheme} />
}

export default GenuineOutfielder
