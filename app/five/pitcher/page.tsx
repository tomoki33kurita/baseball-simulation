'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/five/Pitcher/reducer'
import { fiveTheme } from '@/styles/themes/five'
import { PageTemplates } from '@/features/PageTemplates'
import { useDrawGloveRearSurface } from '@/features/five/Drawer/hooks/useDrawGloveRearSurface'
import { useDrawGlovePalmSurface } from '@/features/five/Drawer/hooks/useDrawGlovePalmSurface'

const FivePitcher = () => {
  const position = 'pitcher'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'catchingSurface'
  useDrawGlovePalmSurface(palmSurfaceId, state)
  return <PageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={fiveTheme} />
}

export default FivePitcher
