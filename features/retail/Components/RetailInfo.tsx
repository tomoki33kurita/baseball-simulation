import { Box, Link } from '@mui/material'
import { FC } from 'react'

type Props = {
  email?: string
  handleToTop: () => void
  handleSignOut: () => void
}

export const RetailInfo: FC<Props> = ({ email, handleToTop, handleSignOut }) => {
  if (!email) return <></>
  return (
    <Box>
      <Box>
        <Box fontWeight={'bold'} pb={1}>
          {email}
        </Box>
        <Box display={'flex'} justifyContent={'space-around'}>
          <Link onClick={handleToTop} style={{ cursor: 'pointer', color: 'orange' }}>
            トップへ
          </Link>
          <Link onClick={() => handleSignOut()} style={{ cursor: 'pointer', color: 'orange' }}>
            ログアウト
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
