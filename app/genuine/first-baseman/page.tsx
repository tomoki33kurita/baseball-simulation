'use client'

import { useReducer } from 'react'
import { initialState, reducer } from '@/features/genuine/reducer/firstBaseman'
import { genuineTheme } from '@/features/genuine/Styles'
import { GenuinePageTemplates } from '@/features/genuine/Components/PageTemplates'
import { useDrawGenuineFirstMittRearSurface } from '@/features/genuine/Drawer/hooks/firstMitt/useDrawGenuineFIrstMittRearSurface'
import { useDrawGenuineFirstMittPalmSurface } from '@/features/genuine/Drawer/hooks/firstMitt/useDrawGenuineFIrstMittPalmSurface'

const GenuineFirstBaseman = () => {
  const position = 'firstBaseman'
  const [state, dispatch] = useReducer(reducer, initialState)

  const rearSurfaceId = 'rearSurface'
  const palmSurfaceId = 'catchingSurface'
  useDrawGenuineFirstMittRearSurface(rearSurfaceId, state)
  useDrawGenuineFirstMittPalmSurface(palmSurfaceId, state)
  return <GenuinePageTemplates {...{ state, position, rearSurfaceId, palmSurfaceId, dispatch }} theme={genuineTheme} />
}

export default GenuineFirstBaseman
