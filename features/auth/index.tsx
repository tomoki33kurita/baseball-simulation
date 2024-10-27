import React, { ReactNode } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { useAuth } from './hooks'

type Props = {
  children: ReactNode
}

export const Auth: React.FC<Props> = ({ children }) => {
  const { isAuthSuccess } = useAuth()

  if (isAuthSuccess) return <>{children}</>
  return (
    <Box style={{ position: 'absolute', top: '50%', left: '50%' }}>
      読み込み中...
      <CircularProgress size={14} />
    </Box>
  )
}
