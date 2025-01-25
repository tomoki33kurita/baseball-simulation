import { Box } from '@mui/material'

type Props = {
  message: string
  isDark?: boolean
}

export const BrockCard: React.FC<Props> = ({ message, isDark }) => {
  return (
    <Box pl={3} my={3} textAlign={'center'} color={isDark ? '#2ebdff' : 'blue'} fontSize={'12px'} fontWeight={isDark ? 'bold' : 'normal'}>
      {message}
    </Box>
  )
}
