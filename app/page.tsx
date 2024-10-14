// import Image from "next/image"
// import styles from "./page.module.css"
import { Box, Button } from "@mui/material"

const Home = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box>
        <Box>これから始まるシミュレーションシステム</Box>
        <Box>この配下にブランドが集まるイメージ</Box>
        <Box m={2}>
          <Button
            size={"large"}
            variant={"outlined"}
            color={"primary"}
            href={"/brands"}
          >
            シミュレーションを開始
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
