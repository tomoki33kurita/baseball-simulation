import { createTheme } from '@mui/material/styles'

export const HATAKEYAMA_COLOR = {
  primary: '#284127',
  secondary: '#ffa733'
}

export const hatakeyamaTheme = createTheme({
  palette: {
    primary: {
      main: HATAKEYAMA_COLOR.primary // プライマリカラー
    },
    secondary: {
      main: HATAKEYAMA_COLOR.secondary // セカンダリカラー
    },
    text: {
      primary: '#000000', // テキストのプライマリカラー
      secondary: '#ffffff' // テキストのセカンダリカラー
    }
  }
})
