'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/five/reducer/infielder'
import { fiveTheme } from '@/styles/themes/five'
import { useDrawGloveRearSurface } from '@/features/five/Drawer/hooks/useDrawGloveRearSurface'
import { useDrawGlovePalmSurface } from '@/features/five/Drawer/hooks/useDrawGlovePalmSurface'
import { FivePageTemplates } from '@/features/five/Components/PageTemplates'

const FiveInfielder = () => {
  const position = 'infielder'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'palmSurface'
  useDrawGlovePalmSurface(palmSurfaceId, state)
  return <FivePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={fiveTheme} />
}

export default FiveInfielder
