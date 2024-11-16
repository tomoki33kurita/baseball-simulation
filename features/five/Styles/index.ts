import { createTheme } from '@mui/material/styles'

export const FIVE_COLOR = {
  primary: '#284127',
  secondary: '#ffa733'
}

export const fiveTheme = createTheme({
  palette: {
    primary: {
      main: FIVE_COLOR.primary // プライマリカラー
    },
    secondary: {
      main: FIVE_COLOR.secondary // セカンダリカラー
    },
    text: {
      primary: '#000000', // テキストのプライマリカラー
      secondary: '#ffffff' // テキストのセカンダリカラー
    }
  }
})
