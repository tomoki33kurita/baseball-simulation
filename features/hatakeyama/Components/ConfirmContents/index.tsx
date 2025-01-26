'use client'

import { Prices } from '@/components/Prices'
import { Box } from '@mui/material'
import { GenuineState } from '@/features/genuine/types'
import { RearSurface } from '@/components/Drawers/RearSurface'
import { PalmSurface } from '@/components/Drawers/PalmSurface'
import { Position } from '@/types'
import { getGenuineBaseCells } from './base'
import { getGenuineColorCells } from './color'
import { useDrawHatakeyamaCatcherMittPalmSurface } from '../../Drawer/hooks/catcherMitt/usePalmSurface'
import { useDrawHatakeyamaCatcherMittRearSurface } from '../../Drawer/hooks/catcherMitt/useRearSurface'
import { SimulationContent } from '../SimulationContent'
import { HatakeyamaState } from '../../types'

type Props = {
  state: HatakeyamaState
  position: Position
}

export const GenuineConfirmContents: React.FC<Props> = ({ state, position }) => {
  const rearSurfaceId = 'rearSurfaceOnDialog'
  const palmSurfaceId = 'palmSurfaceOnDialog'
  useDrawHatakeyamaCatcherMittRearSurface(rearSurfaceId, state)
  useDrawHatakeyamaCatcherMittPalmSurface(palmSurfaceId, state)

  const baseCells = getGenuineBaseCells(state)
  const colorCells = getGenuineColorCells(state)
  const multiColorsCost = 0

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
      <SimulationContent {...{ ...props, baseCells, colorCells, multiColorsCost }} isDark />
      <Prices {...{ state }} isDark />
    </Box>
  )
}
