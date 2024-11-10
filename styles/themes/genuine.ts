import { createTheme } from '@mui/material/styles'

// export const FIVE_COLOR = {
//   primary: '#284127',
//   secondary: '#ffa733'
// }

export const genuineTheme = createTheme({
  palette: {
    primary: {
      main: '#080704' // プライマリカラー
    },
    secondary: {
      main: '#f5bd05' // セカンダリカラー
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
