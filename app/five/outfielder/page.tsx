'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/five/reducer/outfielder'
import { fiveTheme } from '@/styles/themes/five'
import { PageTemplates } from '@/features/five/PageTemplates'
import { useDrawGloveRearSurface } from '@/features/five/Drawer/hooks/useDrawGloveRearSurface'
import { useDrawGlovePalmSurface } from '@/features/five/Drawer/hooks/useDrawGlovePalmSurface'

const FiveOutfielder = () => {
  const position = 'outfielder'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'palmSurface'
  useDrawGlovePalmSurface(palmSurfaceId, state)
  return <PageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={fiveTheme} />
}

export default FiveOutfielder
