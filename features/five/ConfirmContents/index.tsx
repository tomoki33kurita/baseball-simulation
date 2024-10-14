'use client'

import { Prices } from '@/features/Confirm/Prices'
import { SimulationContent } from '@/features/Confirm/SimulationContent'
import { PalmSurface } from '@/features/Drawers/PalmSurface'
import { RearSurface } from '@/features/Drawers/RearSurface'
import { Box } from '@mui/material'
import { Position, State } from '../types'
import { useDrawGloveRearSurface } from '../Drawer/hooks/useDrawGloveRearSurface'
import { useDrawGlovePalmSurface } from '../Drawer/hooks/useDrawGlovePalmSurface'

type Props = {
  state: State
  position: Position
}

export const ConfirmContents: React.FC<Props> = ({ state, position }) => {
  const rearSurfaceId = 'rearSurfaceOnDialog'
  useDrawGloveRearSurface(rearSurfaceId, state)
  const palmSurfaceId = 'palmSurfaceOnDialog'
  useDrawGlovePalmSurface(palmSurfaceId, state)

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
      <SimulationContent {...{ ...props }} />
      <Prices {...{ ...props }} />
    </>
  )
}
