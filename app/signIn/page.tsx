'use client'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Button, ThemeProvider } from '@mui/material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { browserSessionPersistence, setPersistence, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import Link from 'next/link'
import { auth } from '../api/server/firebase'
// import { ControlledTextField } from '@/components/ControlledTextField'
import { commonTheme } from '@/styles/themes'

const SignIn: React.FC = () => {
  const { handleSubmit, control, register } = useForm()
  const router = useRouter()
  const handleSignIn = async (data: any) => {
    const googleProvider = new GoogleAuthProvider()
    try {
      await setPersistence(auth, browserSessionPersistence)
        .then(() => signInWithPopup(auth, googleProvider))
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
            {/* <Box>
              <ControlledTextField name={'email'} label={'メールアドレス'} control={control} register={register} />
            </Box>
            <Box>
              <ControlledTextField name={'password'} type={'password'} label={'パスワード'} control={control} register={register} />
            </Box> */}
            <Button type="submit" fullWidth variant="contained" color="primary">
              Googleアカウントでログイン
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
