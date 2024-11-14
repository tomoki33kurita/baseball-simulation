'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/five/reducer/infielder'
import { fiveTheme } from '@/styles/themes/five'
import { useDrawFiveGloveRearSurface } from '@/features/five/Drawer/hooks/useDrawFiveGloveRearSurface'
import { useDrawFiveGlovePalmSurface } from '@/features/five/Drawer/hooks/useDrawFiveGlovePalmSurface'
import { FivePageTemplates } from '@/features/five/Components/PageTemplates'

const FiveInfielder = () => {
  const position = 'infielder'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawFiveGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'palmSurface'
  useDrawFiveGlovePalmSurface(palmSurfaceId, state)
  return <FivePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={fiveTheme} />
}

export default FiveInfielder
