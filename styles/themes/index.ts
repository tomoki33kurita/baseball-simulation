import { createTheme } from '@mui/material/styles'

// commonっていう命名嫌いだけど、他に思いつかないのでこれで進める // 2024/11/02
export const commonTheme = createTheme({
  palette: {
    primary: {
      main: '#2b2b2b' // プライマリカラー
    },
    secondary: {
      main: '#949494' // セカンダリカラー
    },
    // background: {
    //   default: '#487e4c' // 背景のデフォルトカラー
    // },
    text: {
      primary: '#000000', // テキストのプライマリカラー
      secondary: '#ffffff' // テキストのセカンダリカラー
    }
  }
})
