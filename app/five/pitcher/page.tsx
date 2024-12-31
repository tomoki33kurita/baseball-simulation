'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/five/reducer/pitcher'
import { fiveTheme } from '@/features/five/Styles'
import { FivePageTemplates } from '@/features/five/Components/PageTemplates'
import { useDrawFiveGloveRearSurface } from '@/features/five/Drawer/hooks/useDrawFiveGloveRearSurface'
import { useDrawFiveGlovePalmSurface } from '@/features/five/Drawer/hooks/useDrawFiveGlovePalmSurface'

const FivePitcher = () => {
  const position = 'pitcher'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawFiveGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'catchingSurface'
  useDrawFiveGlovePalmSurface(palmSurfaceId, state)
  return <FivePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={fiveTheme} />
}

export default FivePitcher
