'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/genuine/reducer/outfielder'
import { genuineTheme } from '@/styles/themes/genuine'
import { GenuinePageTemplates } from '@/features/genuine/Components/PageTemplates'
import { useDrawGloveRearSurface } from '@/features/genuine/Drawer/hooks/useDrawGloveRearSurface'
import { useDrawGlovePalmSurface } from '@/features/genuine/Drawer/hooks/useDrawGlovePalmSurface'

const GenuineOutfielder = () => {
  const position = 'outfielder'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'catchingSurface'
  useDrawGlovePalmSurface(palmSurfaceId, state)
  return <GenuinePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={genuineTheme} />
}

export default GenuineOutfielder