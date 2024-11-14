'use client'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Button, ThemeProvider } from '@mui/material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { auth } from '../api/server/firebase'
import { commonTheme } from '@/styles/themes'
import { ControlledTextField } from '@/components/ControlledTextField'

const SignIn: React.FC = () => {
  const [isLoggingIn, setIsLoggingIn] = React.useState(false)
  const { handleSubmit, control, register } = useForm()
  const router = useRouter()
  const handleSignIn = async (data: any) => {
    const { email, password } = data
    try {
      setIsLoggingIn(true)
      await setPersistence(auth, browserSessionPersistence)
        .then(() => signInWithEmailAndPassword(auth, email, password))
        .then(() => router.replace('/retail'))
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <ThemeProvider theme={commonTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box pt={3}>
          <Box textAlign={'center'}>
            <Typography component="h1" variant="h5">
              小売店用ログイン画面
            </Typography>
          </Box>
          <Box pt={4}>小売店員の方はログインの上、お客様のシミュレーション結果をIDで検索してください。</Box>
          <Box display={'flex'} justifyContent={'center'} fontSize={14} pb={2}>
            ※システムへの事前申請が必要です。
          </Box>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Box>
              <ControlledTextField name={'email'} label={'メールアドレス'} control={control} register={register} />
            </Box>
            <Box>
              <ControlledTextField name={'password'} type={'password'} label={'パスワード'} control={control} register={register} />
            </Box>
            <Button type="submit" fullWidth variant="contained" color="primary">
              ログイン
              {isLoggingIn && '中...'}
            </Button>
          </form>
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Box textAlign={'center'} p={2}>
            <Link href={'/'}>トップへ戻る</Link>
          </Box>
          {/* <Box textAlign={'center'} p={2}>
          <Link href={'/reset/password'}>パスワードをリセット</Link>
        </Box> */}
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default SignIn
