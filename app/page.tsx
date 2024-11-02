'use client'
// import Image from "next/image"
// import styles from "./page.module.css"
import { commonTheme } from '@/styles/themes'
import { ThemeProvider } from '@emotion/react'
import { Box, Button } from '@mui/material'

const Home = () => {
  return (
    <ThemeProvider theme={commonTheme}>
      <Box display={'flex'} justifyContent={'center'}>
        <Box>
          <Box>これから始まるシミュレーションシステム</Box>
          <Box>この配下にブランドが集まるイメージ</Box>
          <Box m={2}>
            <Button size={'large'} variant={'outlined'} color={'primary'} href={'/brands'}>
              シミュレーションを開始
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Home
