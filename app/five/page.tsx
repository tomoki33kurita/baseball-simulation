import { Box, Button } from '@mui/material'

const FIVE_COLOR = {
  primary: '#284127',
  secondary: '#ffa733'
}
const color = FIVE_COLOR.primary
const border = `solid 2px ${FIVE_COLOR.primary}`

const Brands = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box>
        <Box>FIVEトップページ(準備中)</Box>
        <Box m={2}>
          <Button size={'large'} variant={'outlined'} href={'/five/pitcher'} style={{ color, border }}>
            投手
          </Button>
        </Box>
        <Box m={2}>
          <Button size={'large'} variant={'outlined'} href={'/five/infielder'} style={{ color, border }}>
            内野手
          </Button>
        </Box>
        <Box m={2}>
          <Button size={'large'} variant={'outlined'} href={'/five/outfielder'} style={{ color, border }}>
            外野手用
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Brands
