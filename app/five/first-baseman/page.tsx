// import Image from "next/image"
// import styles from "./page.module.css"
import { Box, Button } from '@mui/material'

const HatakeyamaFirstBaseMan = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box>
        <Box>一塁手用のページ</Box>
        <Box>この配下にブランドが集まるイメージ</Box>
        <Box m={2}>
          <Button size={'large'} variant={'outlined'} color={'primary'} href={'/brands'} disabled>
            シミュレーションを開始
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default HatakeyamaFirstBaseMan
