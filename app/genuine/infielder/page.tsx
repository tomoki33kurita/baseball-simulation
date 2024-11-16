'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/genuine/reducer/infielder'
import { genuineTheme } from '@/features/genuine/Styles'
import { GenuinePageTemplates } from '@/features/genuine/Components/PageTemplates'
import { useDrawGenuineGloveRearSurface } from '@/features/genuine/Drawer/hooks/glove/useDrawGenuineGloveRearSurface'
import { useDrawGenuineGlovePalmSurface } from '@/features/genuine/Drawer/hooks/glove/useDrawGenuineGlovePalmSurface'

const GenuineInfielder = () => {
  const position = 'infielder'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  const palmSurfaceId = 'catchingSurface'
  useDrawGenuineGloveRearSurface(rearSurfaceId, state)
  useDrawGenuineGlovePalmSurface(palmSurfaceId, state)
  return <GenuinePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={genuineTheme} />
}

export default GenuineInfielder
