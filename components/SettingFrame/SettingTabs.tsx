import React from 'react'
import { AppBar, Tabs, Tab } from '@mui/material'
import { tabStyle, a11yProps } from '@/util/drawer/tab'

type Props = {
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

export const SettingTabs: React.FC<Props> = ({ selectedIndex, setSelectedIndex }) => {
  const handleChange = (_: unknown, newValue: number) => setSelectedIndex(newValue)
  return (
    <AppBar position="sticky" style={{ top: 0 }}>
      <Tabs value={selectedIndex} onChange={handleChange} centered aria-label="settings-tab-wrapper">
        <Tab label={'パーツ設定'} {...a11yProps(0)} style={tabStyle(0, selectedIndex)} />
        <Tab label={'カラー設定'} {...a11yProps(1)} style={tabStyle(1, selectedIndex)} />
        <Tab label={'刺繍設定'} {...a11yProps(2)} style={tabStyle(2, selectedIndex)} />
      </Tabs>
    </AppBar>
  )
}
