import React, { SetStateAction } from 'react'
import { Box, Button } from '@mui/material'

type Props = {
  savedId: string
  isCopied: boolean
  isDark?: boolean
  setCopied: React.Dispatch<SetStateAction<boolean>>
}

export const SavedIdDisplay: React.FC<Props> = ({ savedId, isCopied, isDark, setCopied }) => {
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopied(true)
  }
  if (savedId.length === 0) return <></>
  return (
    <Box ml={2} display="flex" justifyContent="center" alignItems="center">
      <Box mr={1} p={2} border={'solid 1px #eee'} color={isDark ? 'white' : 'black'}>
        {'保存ID'}：{savedId}
      </Box>
      <Button
        variant="outlined"
        sx={{
          color: isDark ? 'white' : 'primary.main',
          borderColor: isDark ? 'white' : 'primary.main',
          '&:hover': {
            borderColor: isDark ? 'white' : 'black'
          }
        }}
        onClick={() => handleCopy(savedId)}
      >
        {isCopied ? <>コピーしました</> : <>コピー</>}
      </Button>
    </Box>
  )
}
