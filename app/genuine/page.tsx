'use client'
import { Box, Button, Grid, useMediaQuery } from '@mui/material'
import Image from 'next/image'

const FIVE_COLOR = {
  primary: '#284127',
  secondary: '#ffa733'
}
const color = FIVE_COLOR.primary
const border = `solid 2px ${FIVE_COLOR.primary}`

const Brands = () => {
  const isMobile = useMediaQuery('(max-width: 430px)')
  const imageWidth = isMobile ? 390 : 780
  const imageHeight = isMobile ? 230 : 460
  return (
    <Box display={'flex'} justifyContent={'center'} mt={8}>
      <Box>
        <Box mb={4}>
          <Image
            src={'/genuine/top/heading.jpg'}
            alt={''}
            width={imageWidth}
            height={imageHeight}
            style={{ borderRadius: '8px', objectFit: 'cover' }}
          />
        </Box>
        <Grid container justifyContent={'center'}>
          <Grid item width={isMobile ? '100%' : 'unset'}>
            <Box m={2}>
              <Button size={'large'} variant={'outlined'} href={'/genuine/pitcher'} style={{ color, border }} fullWidth={isMobile}>
                投手
              </Button>
            </Box>
          </Grid>
          <Grid item width={isMobile ? '100%' : 'unset'}>
            <Box m={2}>
              <Button size={'large'} variant={'outlined'} href={'/genuine/infielder'} style={{ color, border }} fullWidth={isMobile}>
                内野手
              </Button>
            </Box>
          </Grid>
          <Grid item width={isMobile ? '100%' : 'unset'}>
            <Box m={2}>
              <Button size={'large'} variant={'outlined'} href={'/genuine/outfielder'} style={{ color, border }} fullWidth={isMobile}>
                外野手用
              </Button>
            </Box>
          </Grid>
          <Grid item width={isMobile ? '100%' : 'unset'}>
            <Box m={2}>
              <Button size={'large'} variant={'outlined'} href={'/genuine/first-baseman'} fullWidth={isMobile}>
                一塁手用
              </Button>
            </Box>
          </Grid>{' '}
          <Grid item width={isMobile ? '100%' : 'unset'}>
            <Box m={2}>
              <Button size={'large'} variant={'outlined'} href={'/genuine/catcher'} fullWidth={isMobile}>
                捕手用
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Brands
