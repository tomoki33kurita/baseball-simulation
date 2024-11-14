'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/genuine/reducer/pitcher'
import { genuineTheme } from '@/styles/themes/genuine'
import { GenuinePageTemplates } from '@/features/genuine/Components/PageTemplates'
import { useDrawGenuineGloveRearSurface } from '@/features/genuine/Drawer/hooks/useDrawGenuineGloveRearSurface'
import { useDrawGenuineGlovePalmSurface } from '@/features/genuine/Drawer/hooks/useDrawGenuineGlovePalmSurface'

const GenuinePitcher = () => {
  const position = 'pitcher'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawGenuineGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'catchingSurface'
  useDrawGenuineGlovePalmSurface(palmSurfaceId, state)
  return <GenuinePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={genuineTheme} />
}

export default GenuinePitcher
