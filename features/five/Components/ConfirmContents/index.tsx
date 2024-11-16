'use client'

import { Prices } from '@/components/Prices'
import { Box } from '@mui/material'
import { FiveState } from '../../types'
import { useDrawFiveGloveRearSurface } from '../../Drawer/hooks/useDrawFiveGloveRearSurface'
import { useDrawFiveGlovePalmSurface } from '../../Drawer/hooks/useDrawFiveGlovePalmSurface'
import { RearSurface } from '@/components/Drawers/RearSurface'
import { PalmSurface } from '@/components/Drawers/PalmSurface'
import { Position } from '@/types'
import { getFiveBaseCells } from './base'
import { getFiveColorCells } from './color'
import { SimulationContent } from '../SimulationContent'

type Props = {
  state: FiveState
  position: Position
}

export const FiveConfirmContents: React.FC<Props> = ({ state, position }) => {
  const rearSurfaceId = 'rearSurfaceOnDialog'
  useDrawFiveGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'palmSurfaceOnDialog'
  useDrawFiveGlovePalmSurface(palmSurfaceId, state)

  const basePrice = state.orderType.price // 今はFIVEのことだけ想定
  const baseCells = getFiveBaseCells(state)
  const colorCells = getFiveColorCells(state)

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
