'use client'

import { Prices } from '@/components/Prices'
import { Box } from '@mui/material'
import { FiveState } from '../../types'
import { useDrawGloveRearSurface } from '../../Drawer/hooks/useDrawGloveRearSurface'
import { useDrawGlovePalmSurface } from '../../Drawer/hooks/useDrawGlovePalmSurface'
import { RearSurface } from '@/components/Drawers/RearSurface'
import { PalmSurface } from '@/components/Drawers/PalmSurface'
import { Position } from '@/types'
import { getBaseCells } from './base'
import { getColorCells } from './color'
import { SimulationContent } from '@/components/SimulationContent'

type Props = {
  state: FiveState
  position: Position
}

export const ConfirmContents: React.FC<Props> = ({ state, position }) => {
  const rearSurfaceId = 'rearSurfaceOnDialog'
  useDrawGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'palmSurfaceOnDialog'
  useDrawGlovePalmSurface(palmSurfaceId, state)

  const basePrice = state.orderType.price // 今はFIVEのことだけ想定
  const baseCells = getBaseCells(state)
  const colorCells = getColorCells(state)

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
