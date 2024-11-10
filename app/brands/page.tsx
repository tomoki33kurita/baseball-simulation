'use client'
// import Image from "next/image"
// import styles from "./page.module.css"
import { commonTheme } from '@/styles/themes'
import { Box, Button, ThemeProvider } from '@mui/material'

const Brands = () => {
  return (
    <ThemeProvider theme={commonTheme}>
      <Box display={'flex'} justifyContent={'center'}>
        <Box>
          {/* <Box>シミュレーションしたいブランドを選んでね</Box> */}
          <Box m={2}>
            <Button size={'large'} variant={'outlined'} color={'primary'} href={'/five'}>
              FIVE
            </Button>
          </Box>
          {/* <Box m={2}>
            <Button size={'large'} variant={'outlined'} color={'primary'} href={'/genuine'} sx={{ textTransform: 'none' }}>
              Genuine
            </Button>
          </Box> */}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Brands
