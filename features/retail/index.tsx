import { Box, AppBar, Toolbar } from '@mui/material'
import { FC, useState } from 'react'
import { Brand, SavedData } from '@/types'
import { FiveState } from '../five/types'
import { Auth } from '../auth'
import { SearchForm } from './Components/SearchForm'
import { SearchResult } from './Components/SearchResult'
import { RetailInfo } from './Components/RetailInfo'
import { auth } from '@/app/api/server/firebase'
import { useLoadAuth } from './hooks/useLoadAuth'
import { RetailContext } from './hooks/useRetailContext'
import { useRetailInformation } from './hooks/useRetailInformation'

const toSignIn = () => location.replace('/signIn')
const failedLogOut = (err: any) => console.log('ログアウトに失敗しました', err)

const Retail: FC = () => {
  const [brand, setBrand] = useState<Brand | null>(null)
  const [response, setResponse] = useState<SavedData<FiveState> | null>(null)
  const { email, handleToTop } = useLoadAuth()
  const handleSignOut = async () => await auth.signOut().then(toSignIn).catch(failedLogOut)
  const { isSelectableBrand, retailName } = useRetailInformation(email, brand)
  const disabled = !isSelectableBrand

  return (
    <RetailContext.Provider value={{ email }}>
      <Auth>
        <Box>
          <AppBar>
            <Toolbar style={{ display: 'flex', justifyContent: 'end' }}>
              <RetailInfo {...{ email, handleToTop, handleSignOut }} />
            </Toolbar>
          </AppBar>
          <SearchForm {...{ disabled, setResponse, setBrand }} />
          <SearchResult {...{ response, email }} />
        </Box>
      </Auth>
    </RetailContext.Provider>
  )
}

export default Retail
