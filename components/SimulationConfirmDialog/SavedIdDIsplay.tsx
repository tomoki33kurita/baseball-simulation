import React, { SetStateAction } from 'react'
import { Box, Button } from '@mui/material'

type Props = {
  savedId: string
  isCopied: boolean
  setCopied: React.Dispatch<SetStateAction<boolean>>
}

export const SavedIdDisplay: React.FC<Props> = ({ savedId, isCopied, setCopied }) => {
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value)
    setCopied(true)
  }
  if (savedId.length === 0) return <></>
  return (
    <Box ml={2} display="flex" justifyContent="center" alignItems="center">
      <Box mr={1} p={2} border={'solid 1px #eee'}>
        {'保存ID'}：{savedId}
      </Box>
      <Button variant="outlined" color={'primary'} style={{ padding: '8px' }} onClick={() => handleCopy(savedId)}>
        {isCopied ? <>コピーしました</> : <>コピー</>}
      </Button>
    </Box>
  )
}
