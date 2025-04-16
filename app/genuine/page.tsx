'use client'
import { GENUINE_COLOR } from '@/features/genuine/Styles'
import { Box, Button, Grid, useMediaQuery } from '@mui/material'
import Image from 'next/image'

const color = GENUINE_COLOR.thirdly
const border = `solid 2px ${GENUINE_COLOR.primary}`
const backgroundColor = GENUINE_COLOR.backgroundColor

const Brands = () => {
  const isMobile = useMediaQuery('(max-width: 430px)')
  const imageWidth = isMobile ? 390 : 460
  const imageHeight = isMobile ? 390 : 460
  return (
    <Box display={'flex'} justifyContent={'center'} pt={8} bgcolor={'#282828'} height={'100vh'}>
      <Box>
        <Box mb={4} textAlign={'center'}>
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
              <Button size={'large'} variant={'contained'} href={'/genuine/pitcher'} style={{ color, border, backgroundColor }} fullWidth={isMobile}>
                投手
              </Button>
            </Box>
          </Grid>
          <Grid item width={isMobile ? '100%' : 'unset'}>
            <Box m={2}>
              <Button size={'large'} variant={'outlined'} href={'/genuine/infielder'} style={{ color, border, backgroundColor }} fullWidth={isMobile}>
                内野手
              </Button>
            </Box>
          </Grid>
          <Grid item width={isMobile ? '100%' : 'unset'}>
            <Box m={2}>
              <Button
                size={'large'}
                variant={'outlined'}
                href={'/genuine/outfielder'}
                style={{ color, border, backgroundColor }}
                fullWidth={isMobile}
              >
                外野手用
              </Button>
            </Box>
          </Grid>
          <Grid item width={isMobile ? '100%' : 'unset'}>
            <Box m={2}>
              <Button
                size={'large'}
                variant={'outlined'}
                href={'/genuine/first-baseman'}
                style={{ color, border, backgroundColor }}
                fullWidth={isMobile}
              >
                一塁手用
              </Button>
            </Box>
          </Grid>
          <Grid item width={isMobile ? '100%' : 'unset'}>
            <Box m={2}>
              <Button size={'large'} variant={'outlined'} href={'/genuine/catcher'} style={{ color, border, backgroundColor }} fullWidth={isMobile}>
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
