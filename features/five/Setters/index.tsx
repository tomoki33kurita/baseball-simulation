import React from 'react'
import { Box } from '@mui/material'

import BaseSetter from './BaseSetter'
import ColorSetter from './ColorSetter'
import EmbroiderySetter from './EmbroiderySetter'
import { SimulationConfirmDialog } from '@/features/Confirm/SimulationConfirmDialog'
import { Position, State } from '../types'
import { ConfirmContents } from '../ConfirmContents'
import { SettingTabs } from '@/components/SettingFrame/SettingTabs'
import { SettingButtons } from '@/components/SettingFrame/SettingButtons'

type Props = {
  state: State
  position: Position
  dispatch: React.Dispatch<unknown>
}

export const Setters: React.FC<Props> = ({ state, position, dispatch }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false)
  const toTopPath = '/five'
  const handleDialogOpen = () => setIsDialogOpen(true)
  const handleDialogClose = () => setIsDialogOpen(false)
  return (
    <Box>
      <SettingTabs {...{ selectedIndex, setSelectedIndex }} />
      <BaseSetter {...{ state, selectedIndex, position, dispatch }} />
      <ColorSetter {...{ state, selectedIndex, position, dispatch }} />
      <EmbroiderySetter {...{ state, selectedIndex, dispatch }} />
      <SettingTabs {...{ selectedIndex, setSelectedIndex }} />
      <SettingButtons {...{ toTopPath, handleDialogOpen }} />
      <SimulationConfirmDialog {...{ state, position, isDialogOpen, handleDialogClose, dispatch }}>
        <ConfirmContents {...{ state, position }} />
      </SimulationConfirmDialog>
    </Box>
  )
}
