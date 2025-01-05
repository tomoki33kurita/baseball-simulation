import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

type Props = {
  selectedIndex: number
  index: number
  children: ReactNode
  isDark?: boolean
}

export const TabPanel: React.FC<Props> = ({ selectedIndex, index, children, isDark }) => {
  if (index !== selectedIndex) return <></>
  return (
    <Box border={`solid 1px ${isDark ? 'black' : '#eee'}`} bgcolor={isDark ? 'black' : '#eee'} textAlign="center">
      {children}
    </Box>
  )
}
