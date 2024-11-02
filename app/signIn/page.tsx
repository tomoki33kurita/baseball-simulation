'use client'
import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Button, CircularProgress, ThemeProvider } from '@mui/material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { auth } from '../api/server/firebase'
import { ControlledTextField } from '@/components/ControlledTextField'
import { commonTheme } from '@/styles/themes'

const SignIn: React.FC = () => {
  const { handleSubmit, control, register } = useForm()
  const router = useRouter()
  const [isLogining, setIsLogining] = React.useState(false)
  const handleSignIn = async (data: any) => {
    setIsLogining(true)
    const { email, password } = data
    try {
      await setPersistence(auth, browserSessionPersistence).then(() => signInWithEmailAndPassword(auth, email, password))
      router.replace('/retail')
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
          <Box p={2} pt={4}>
            小売店員の方はログインの上、お客様のシミュレーション結果をIDで検索をしてください
          </Box>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Box>
              <ControlledTextField name={'email'} label={'メールアドレス'} control={control} register={register} />
            </Box>
            <Box>
              <ControlledTextField name={'password'} type={'password'} label={'パスワード'} control={control} register={register} />
            </Box>
            <Button type="submit" fullWidth variant="contained" color="secondary">
              ログイン
            </Button>
            {isLogining && (
              <Box style={{ textAlign: 'right' }}>
                ログイン中...
                <CircularProgress size={14} />
              </Box>
            )}
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
