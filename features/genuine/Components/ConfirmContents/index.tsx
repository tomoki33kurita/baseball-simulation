'use client'

import { Prices } from '@/components/Prices'
import { Box } from '@mui/material'
import { GenuineState } from '@/features/genuine/types'
import { useDrawGenuineGloveRearSurface } from '@/features/genuine/Drawer/hooks/glove/useRearSurface'
import { useDrawGenuineGlovePalmSurface } from '@/features/genuine/Drawer/hooks/glove/usePalmSurface'
import { RearSurface } from '@/components/Drawers/RearSurface'
import { PalmSurface } from '@/components/Drawers/PalmSurface'
import { Position } from '@/types'
import { getGenuineBaseCells } from './base'
import { getGenuineColorCells } from './color'
import { useDrawGenuineCatcherMittPalmSurface } from '../../Drawer/hooks/catcherMitt/usePalmSurface'
import { useDrawGenuineCatcherMittRearSurface } from '../../Drawer/hooks/catcherMitt/useRearSurface'
import { useDrawGenuineFirstMittRearSurface } from '../../Drawer/hooks/firstMitt/useRearSurface'
import { useDrawGenuineFirstMittPalmSurface } from '../../Drawer/hooks/firstMitt/usePalmSurface'
import { SimulationContent } from '../SimulationContent'

type Props = {
  state: GenuineState
  position: Position
}

export const GenuineConfirmContents: React.FC<Props> = ({ state, position }) => {
  const rearSurfaceId = 'rearSurfaceOnDialog'
  const palmSurfaceId = 'palmSurfaceOnDialog'
  useDrawGenuineGloveRearSurface(rearSurfaceId, state)
  useDrawGenuineGlovePalmSurface(palmSurfaceId, state)
  useDrawGenuineCatcherMittRearSurface(rearSurfaceId, state)
  useDrawGenuineCatcherMittPalmSurface(palmSurfaceId, state)
  useDrawGenuineFirstMittRearSurface(rearSurfaceId, state)
  useDrawGenuineFirstMittPalmSurface(palmSurfaceId, state)

  const basePrice = 0
  const baseCells = getGenuineBaseCells(state)
  const colorCells = getGenuineColorCells(state)

  const props = { state, position }
  return (
    <Box bgcolor={'#383838'}>
      <Box display={'flex'}>
        <RearSurface rearSurfaceId={rearSurfaceId} maxWidth={'50%'} />
        <PalmSurface palmSurfaceId={palmSurfaceId} maxWidth={'50%'} />
      </Box>
      <Box px={1} textAlign="left" color={'orange'} fontWeight={'bold'} fontSize={14}>
        ※グラブ・ミットの描画、刺繍の位置・書体はイメージであり、実際とは異なる場合があります。
      </Box>
      <SimulationContent {...{ ...props, baseCells, colorCells }} isDark />
      <Prices {...{ ...props, basePrice }} isDark />
    </Box>
  )
}
