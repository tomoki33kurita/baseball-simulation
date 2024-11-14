'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/genuine/reducer/firstBaseman'
import { genuineTheme } from '@/styles/themes/genuine'
import { GenuinePageTemplates } from '@/features/genuine/Components/PageTemplates'
import { useDrawGloveRearSurface } from '@/features/genuine/Drawer/hooks/useDrawGenuineGloveRearSurface'
import { useDrawGlovePalmSurface } from '@/features/genuine/Drawer/hooks/useDrawGenuineGlovePalmSurface'

const GenuineFirstBaseman = () => {
  const position = 'firstBaseman'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'catchingSurface'
  useDrawGlovePalmSurface(palmSurfaceId, state)
  return <GenuinePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={genuineTheme} />
}

export default GenuineFirstBaseman
