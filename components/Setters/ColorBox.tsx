import React from 'react'
import { Box } from '@mui/material'

type Props = {
  bgcolor: string
}

export const ColorBox: React.FC<Props> = ({ bgcolor }) => (
  <Box display="inline-block" border="solid 1px #eee" bgcolor={bgcolor} width={'16px'} height={'16px'} mr={0.3} />
)
