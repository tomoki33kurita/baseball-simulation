import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

type Props = {
  selectedIndex: number
  index: number
  children: ReactNode
}

export const TabPanel: React.FC<Props> = ({ selectedIndex, index, children }) => {
  if (index !== selectedIndex) return <></>
  return (
    <Box border={'solid 1px #eee'} bgcolor={'#eee'} textAlign="center">
      {children}
    </Box>
  )
}
