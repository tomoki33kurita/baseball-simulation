// import Image from "next/image"
// import styles from "./page.module.css"
import { Box, Button } from '@mui/material'

const Brands = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box>
        <Box>シミュレーションしたいブランドを選んでね</Box>
        <Box m={2}>
          <Button size={'large'} variant={'outlined'} color={'primary'} href={'/five'}>
            FIVE
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Brands
