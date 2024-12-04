import { Retail } from '@/types'
import { Box, Link } from '@mui/material'
import { FC } from 'react'

type Props = {
  retail: Retail | null
  handleToTop: () => void
  handleSignOut: () => void
}

export const RetailInfo: FC<Props> = ({ retail, handleToTop, handleSignOut }) => {
  if (!retail) return <></>
  return (
    <Box>
      <Box>
        <Box fontWeight={'bold'} textAlign={'center'} pb={1}>
          {retail.name} ({retail.email})
        </Box>
        <Box display={'flex'} justifyContent={'space-around'} gap={'16px'}>
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
