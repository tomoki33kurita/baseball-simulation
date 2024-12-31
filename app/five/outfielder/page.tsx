'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/five/reducer/outfielder'
import { fiveTheme } from '@/features/five/Styles'
import { FivePageTemplates } from '@/features/five/Components/PageTemplates/index2'
import { useDrawFiveGloveRearSurface } from '@/features/five/Drawer/hooks/useDrawFiveGloveRearSurface'
import { useDrawFiveGlovePalmSurface } from '@/features/five/Drawer/hooks/useDrawFiveGlovePalmSurface'

const FiveOutfielder = () => {
  const position = 'outfielder'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawFiveGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'palmSurface'
  useDrawFiveGlovePalmSurface(palmSurfaceId, state)
  return <FivePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={fiveTheme} />
}

export default FiveOutfielder
