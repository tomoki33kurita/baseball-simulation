import React from 'react'
import { Box, TextField, Card } from '@mui/material'

type Props = {
  content: string
  contentMaxLength: number
  embroideryIndex?: number
  caution?: string
  description?: string
  disabled?: boolean
  isDark?: boolean
  handleContent: (selected: string, i?: number) => void
}

export const EmbroideryContent: React.FC<Props> = ({
  content,
  contentMaxLength,
  embroideryIndex,
  caution,
  description,
  disabled,
  isDark,
  handleContent
}) => {
  return (
    <Card style={{ background: isDark ? '#282828' : 'unset' }}>
      <Box fontSize={14} textAlign={'left'} pl={2} py={1} fontWeight={'bold'} color={isDark ? 'white' : 'black'}>
        刺繍内容
      </Box>
      <Box display="flex" alignItems="center" mx={1}>
        <TextField
          maxRows={1}
          onChange={(event) => handleContent(event.target.value.trim(), embroideryIndex)}
          variant="outlined"
          style={{ width: '100%', background: disabled ? 'gainsboro' : isDark ? '#737373' : '#fff' }}
          sx={{
            input: { color: isDark ? 'white' : 'unset' }, // 入力文字の色を白に
            '& .MuiInputBase-input::placeholder': { color: isDark ? 'white' : 'unset' } // placeholderの色を白に
          }}
          defaultValue={content}
          placeholder={'刺繍内容を入力してください'}
          inputProps={{ maxLength: contentMaxLength }}
          disabled={disabled}
        />
      </Box>
      <Box pl={3} fontSize={'12px'} textAlign={'right'} pr={2} color={isDark ? 'white' : 'black'}>
        最大文字数：{contentMaxLength}
        文字
      </Box>
      {caution && (
        <Box pl={3} textAlign="left" color={'red'} fontSize={'12px'}>
          {caution}
        </Box>
      )}
      {description && (
        <Box pl={3} textAlign="left" color={'blue'} fontSize={'12px'}>
          {description}
        </Box>
      )}
    </Card>
  )
}
