import { createTheme } from '@mui/material/styles'

export const GENUINE_COLOR = {
  primary: '#080704',
  secondary: '#f5bd05'
}

export const genuineTheme = createTheme({
  palette: {
    primary: {
      main: GENUINE_COLOR.primary // プライマリカラー
    },
    secondary: {
      main: GENUINE_COLOR.secondary // セカンダリカラー
    },
    text: {
      primary: '#000000', // テキストのプライマリカラー
      secondary: '#ffffff' // テキストのセカンダリカラー
    }
  }
})
