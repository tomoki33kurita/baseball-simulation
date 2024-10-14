import { Box, Button } from '@mui/material'

const Brands = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box>
        <Box>ブランドトップページ</Box>
        <Box m={2}>
          <Button size={'large'} variant={'outlined'} color={'primary'} href={'/five/pitcher'}>
            投手
          </Button>
        </Box>
        <Box m={2}>
          <Button size={'large'} variant={'outlined'} color={'primary'} href={'/five/infielder'}>
            内野手
          </Button>
        </Box>
        <Box m={2}>
          <Button size={'large'} variant={'outlined'} color={'primary'} href={'/five/outfielder'}>
            外野手用
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Brands
