import React from 'react'
import { Box } from '@mui/material'

import BaseSetter from './BaseSetter'
import ColorSetter from './ColorSetter'
import EmbroiderySetter from './EmbroiderySetter'
import { SettingTabs } from '@/features/SettingFrame/SettingTabs'
import { SettingButtons } from '@/features/SettingFrame/SettingButtons'
import { SimulationConfirmDialog } from '@/features/Confirm/SimulationConfirmDialog'
import { Position, State } from '../types'
import { ConfirmContents } from '../ConfirmContents'

type Props = {
  state: State
  position: Position
  dispatch: React.Dispatch<unknown>
}

export const Setters: React.FC<Props> = ({ state, position, dispatch }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false)

  const handleDialogOpen = () => setIsDialogOpen(true)
  const handleDialogClose = () => setIsDialogOpen(false)
  return (
    <Box>
      <SettingTabs {...{ selectedIndex, setSelectedIndex }} />
      <BaseSetter {...{ state, selectedIndex, position, dispatch }} />
      <ColorSetter {...{ state, selectedIndex, position, dispatch }} />
      <EmbroiderySetter {...{ state, selectedIndex, dispatch }} />
      <SettingTabs {...{ selectedIndex, setSelectedIndex }} />
      <SettingButtons {...{ handleDialogOpen }} />
      <SimulationConfirmDialog {...{ state, position, isDialogOpen, handleDialogClose, dispatch }}>
        <ConfirmContents {...{ state, position }} />
      </SimulationConfirmDialog>
    </Box>
  )
}
