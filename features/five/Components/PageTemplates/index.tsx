'use client'

import { Box, Grid, Theme } from '@mui/material'
import { Dispatch, FC } from 'react'
import { BaseModelSelector } from '@/Components/BaseModelSelector/index2'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { DrawerIndex, FiveState } from '@/features/five/types'
import { Setters } from '../Setters'
import { SurfaceDrawers } from '@/Components/Drawers'
import { Position } from '@/types'
import { models } from '@/features/five/Constants/model'
import { SET_DRAWER_INDEX } from '@/Constants'

type Props = {
  state: FiveState
  position: Position
  theme: Theme
  rearSurfaceId: string
  palmSurfaceId: string
  dispatch: Dispatch<unknown>
}

export const FivePageTemplates: FC<Props> = ({ state, position, theme, rearSurfaceId, palmSurfaceId, dispatch }) => {
  const { drawerIndex } = state
  const handleDrawerIndex = (_: unknown, newValue: DrawerIndex) => dispatch({ ...state, type: SET_DRAWER_INDEX, drawerIndex: newValue })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseModelSelector {...{ models, position, dispatch }} />
      <Box display={'flex'}>
        <Grid container>
          <Grid item xs={12} md={7} zIndex={20} position={'sticky'} top={0}>
            <SurfaceDrawers {...{ rearSurfaceId, palmSurfaceId, state, drawerIndex, handleDrawerIndex }} />
          </Grid>
          <Grid item xs={12} md={5} zIndex={10}>
            <Setters {...{ state, dispatch, position }} />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}
