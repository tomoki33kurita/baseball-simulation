'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/five/reducer/pitcher'
import { fiveTheme } from '@/styles/themes/five'
import { FivePageTemplates } from '@/features/five/Components/PageTemplates'
import { useDrawGloveRearSurface } from '@/features/five/Drawer/hooks/useDrawGloveRearSurface'
import { useDrawGlovePalmSurface } from '@/features/five/Drawer/hooks/useDrawGlovePalmSurface'

const FivePitcher = () => {
  const position = 'pitcher'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  useDrawGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'catchingSurface'
  useDrawGlovePalmSurface(palmSurfaceId, state)
  return <FivePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={fiveTheme} />
}

export default FivePitcher
