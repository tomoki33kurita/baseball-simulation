'use client'
import { Box, AppBar, Toolbar, ThemeProvider } from '@mui/material'
import { FC, useState } from 'react'
import { Brand, SavedData, State } from '@/types'
import { Auth } from '../auth'
import { SearchForm } from './Components/SearchForm'
import { SearchResult } from './Components/SearchResult'
import { RetailInfo } from './Components/RetailInfo'
import { auth } from '@/app/api/server/firebase'
import { useLoadAuth } from './hooks/useLoadAuth'
import { RetailContext } from './hooks/useRetailContext'
import { useRetailInformation } from './hooks/useRetailInformation'
import { commonTheme } from '@/styles/themes'

const toSignIn = () => location.replace('/signIn')
const failedLogOut = (err: any) => console.log('ログアウトに失敗しました', err)

const Retail: FC = () => {
  const [response, setResponse] = useState<SavedData<State> | null>(null)
  const { email, handleToTop } = useLoadAuth()
  const handleSignOut = async () => await auth.signOut().then(toSignIn).catch(failedLogOut)
  const { retail } = useRetailInformation(email)
  const disabled = false //!isSelectableBrand

  if (!retail) return null
  return (
    <ThemeProvider theme={commonTheme}>
      <RetailContext.Provider value={retail}>
        <Auth>
          <Box>
            <AppBar>
              <Toolbar style={{ display: 'flex', justifyContent: 'end' }}>
                <RetailInfo {...{ retail, handleToTop, handleSignOut }} />
              </Toolbar>
            </AppBar>
            <SearchForm {...{ disabled, setResponse }} />
            {response !== null && <SearchResult {...{ response }} />}
          </Box>
        </Auth>
      </RetailContext.Provider>
    </ThemeProvider>
  )
}

export default Retail
