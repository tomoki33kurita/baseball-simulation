import React, { SetStateAction, useContext } from 'react'
import axios from 'axios'
import Select from 'react-select'
import { Box, Button, Grid } from '@mui/material'
import { BrandOption, SavedData, State } from '@/types'
import { useForm, Controller } from 'react-hook-form'
import { borderStyle as border } from '@/styles'
import { ControlledTextField } from '@/components/ControlledTextField'
import { RetailContext } from '../hooks/useRetailContext'

const GET_DOCUMENT_PATH = '/api/server/getDocument'

type FormValues = { brand: BrandOption; documentId: string }

type Props = {
  disabled: boolean
  setResponse: React.Dispatch<SetStateAction<SavedData<State> | null>>
}

export const SearchForm: React.FC<Props> = ({ disabled, setResponse }) => {
  const retail = useContext(RetailContext)
  const { handleSubmit, control, register, reset } = useForm<FormValues>({
    defaultValues: {
      brand: { label: '', value: '' },
      documentId: ''
    }
  })
  const handleClick = async (value: FormValues) => {
    const documentId = value.documentId
    const brand = value.brand.value
    if (documentId.length >= 1) {
      // documentId:"retail/retailName Request Method: POST" だったら、API叩かない
      await axios.get(`${GET_DOCUMENT_PATH}?docId=${documentId}&brand=${brand}`).then((res) => {
        if (!res.data) {
          console.log('No documentId! Please set documentId')
          return
        }
        setResponse({
          state: res.data.state,
          createdAt: res.data.createdAt,
          savedId: value?.documentId
        })
      })
    } else {
      console.log('No documentId! Please set documentId')
    }
  }
  return (
    <Box p={8} pt={10} width={'100%'}>
      <Box display={'flex'} justifyContent={'center'}>
        <form>
          <Box
            sx={{
              display: { xs: 'grid', md: 'flex' }
            }}
            alignItems={'center'}
          >
            <Grid item xs={12}>
              <Box mb={1} mr={1}>
                <Box>ブランドを選択</Box>
                <Controller
                  name="brand"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={retail ? retail.selectableBrands : []}
                      minMenuHeight={50}
                      isSearchable={false}
                      styles={{
                        container: (p) => ({
                          ...p,
                          margin: '8px',
                          minWidth: '200px'
                        }),
                        control: (p) => ({
                          ...p,
                          minHeight: '50px'
                        }),
                        menu: (p) => ({ ...p, zIndex: 9999 })
                      }}
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={1}>
                <Box>シミュレーションID</Box>
                <ControlledTextField name={'documentId'} label={'IDを入力'} {...{ control, register, disabled }} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display={'flex'} alignItems={'center'} mt={3} ml={2}>
                <Button variant={'contained'} color={'primary'} type={'submit'} onClick={handleSubmit(handleClick)} disabled={disabled}>
                  検索
                </Button>
                <Box ml={1}>
                  <Button
                    variant={'outlined'}
                    style={{ border }}
                    onClick={() => {
                      reset({ documentId: '' }), setResponse(null)
                    }}
                  >
                    リセット
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
