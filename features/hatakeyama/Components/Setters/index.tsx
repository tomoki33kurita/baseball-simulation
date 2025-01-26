import React from 'react'
import { Position } from '@/types'
import { BaseSetter } from './BaseSetter'
import { ColorSetter } from './ColorSetter'
import { EmbroiderySetter } from './EmbroiderySetter'
import { SimulationConfirmDialog } from '@/components/SimulationConfirmDialog'
import { GenuineConfirmContents } from '../ConfirmContents'
import { SettingTabs } from '@/components/SettingFrame/SettingTabs'
import { SettingButtons } from '@/components/SettingFrame/SettingButtons'
import { HatakeyamaState } from '../../types'

type Props = {
  state: HatakeyamaState
  position: Position
  dispatch: React.Dispatch<unknown>
}

export const Setters: React.FC<Props> = ({ state, position, dispatch }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false)
  const toTopPath = '/hatakeyama/catcher'
  const handleDialogOpen = () => setIsDialogOpen(true)
  const handleDialogClose = () => setIsDialogOpen(false)
  return (
    <>
      <SettingTabs {...{ selectedIndex, setSelectedIndex }} />
      <BaseSetter {...{ state, selectedIndex, position, dispatch }} />
      <ColorSetter {...{ state, selectedIndex, position, dispatch }} />
      <EmbroiderySetter {...{ state, selectedIndex, dispatch }} isDark />
      <SettingTabs {...{ selectedIndex, setSelectedIndex }} />
      <SettingButtons {...{ toTopPath, handleDialogOpen }} isDark />
      <SimulationConfirmDialog {...{ state, position, isDialogOpen, handleDialogClose, dispatch }} isDark>
        <GenuineConfirmContents {...{ state, position }} />
      </SimulationConfirmDialog>
    </>
  )
}
