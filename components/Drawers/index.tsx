import { FC } from 'react'
import { Box, AppBar, Tabs, Tab } from '@mui/material'
import { RearSurface } from './RearSurface'
import { PalmSurface } from './PalmSurface'
import { TabPanel } from '@/components/TabPanel'
import { a11yProps, tabStyle } from '@/util/drawer/tab'
import { FiveState } from '@/features/five/types'

type Props = {
  rearSurfaceId: string
  palmSurfaceId: string
  state: FiveState
  drawerIndex: number
  handleDrawerIndex: (_: unknown, newValue: 0 | 1) => void
}

export const SurfaceDrawers: FC<Props> = ({ rearSurfaceId, palmSurfaceId, drawerIndex, handleDrawerIndex }) => {
  return (
    <Box>
      <TabPanel selectedIndex={drawerIndex} index={1}>
        <RearSurface rearSurfaceId={rearSurfaceId} devFlg />
      </TabPanel>
      <TabPanel selectedIndex={drawerIndex} index={0}>
        <PalmSurface palmSurfaceId={palmSurfaceId} devFlg />
      </TabPanel>
      <AppBar position="static">
        <Tabs value={drawerIndex} onChange={handleDrawerIndex} aria-label="figure-tab-wrapper" centered>
          <Tab label={'背面'} {...a11yProps(0)} style={tabStyle(0, drawerIndex)} />
          <Tab label={'捕球面'} {...a11yProps(1)} style={tabStyle(1, drawerIndex)} />
        </Tabs>
      </AppBar>
    </Box>
  )
}
