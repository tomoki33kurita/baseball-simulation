'use client'

import { Prices } from '@/components/Prices'
import { Box } from '@mui/material'
import { GenuineState } from '../../types'
import { useDrawGenuineGloveRearSurface } from '../../Drawer/hooks/useDrawGenuineGloveRearSurface'
import { useDrawGenuineGlovePalmSurface } from '../../Drawer/hooks/useDrawGenuineGlovePalmSurface'
import { RearSurface } from '@/components/Drawers/RearSurface'
import { PalmSurface } from '@/components/Drawers/PalmSurface'
import { Position } from '@/types'
import { getGenuineBaseCells } from './base'
import { getGenuineColorCells } from './color'
import { SimulationContent } from '@/components/SimulationContent'

type Props = {
  state: GenuineState
  position: Position
}

export const GenuineConfirmContents: React.FC<Props> = ({ state, position }) => {
  const rearSurfaceId = 'rearSurfaceOnDialog'
  useDrawGenuineGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'palmSurfaceOnDialog'
  useDrawGenuineGlovePalmSurface(palmSurfaceId, state)

  const basePrice = state.orderType.price // 今はFIVEのことだけ想定
  const baseCells = getGenuineBaseCells(state)
  const colorCells = getGenuineColorCells(state)

  const props = { state, position }
  return (
    <>
      <Box display={'flex'}>
        <RearSurface rearSurfaceId={rearSurfaceId} maxWidth={'50%'} />
        <PalmSurface palmSurfaceId={palmSurfaceId} maxWidth={'50%'} />
      </Box>
      <Box px={1} textAlign="left" color={'red'} bgcolor={'white'} fontSize={14}>
        ※グラブ・ミットの描画、刺繍の位置・書体はイメージであり、実際とは異なる場合があります。
      </Box>
      <SimulationContent {...{ ...props, baseCells, colorCells }} />
      <Prices {...{ ...props, basePrice }} />
    </>
  )
}
