import React, { SetStateAction } from 'react'
import axios from 'axios'
import Select from 'react-select'
import { Box, Button } from '@mui/material'
import { Brand, BrandOption, RetailShop, SavedData, State } from '@/types'
import { useForm, Controller } from 'react-hook-form'
import { borderStyle as border } from '@/styles'
import { ControlledTextField } from '@/components/ControlledTextField'

const GET_DOCUMENT_PATH = '/api/server/getDocument'

type FormValues = { brand: BrandOption; documentId: string }

type Props = {
  retailShop: RetailShop | null
  disabled: boolean
  setResponse: React.Dispatch<SetStateAction<SavedData<State> | null>>
  setBrand: React.Dispatch<SetStateAction<Brand | null>>
}

export const SearchForm: React.FC<Props> = ({ retailShop, disabled, setResponse, setBrand }) => {
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
          <Box display={'flex'} alignItems={'center'}>
            <Box mb={1} mr={1}>
              <Box>ブランドを選択</Box>
              <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={retailShop ? retailShop.selectableBrands : []}
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
            <Box mb={1}>
              <Box>シミュレーションID</Box>
              <ControlledTextField name={'documentId'} label={'IDを入力'} {...{ control, register, disabled }} />
            </Box>
            <Box display={'flex'} alignItems={'center'} mt={3} ml={2}>
              <Button variant={'contained'} color={'primary'} type={'submit'} onClick={handleSubmit(handleClick)} disabled={disabled}>
                検索
              </Button>
              <Box ml={1}>
                <Button
                  variant={'outlined'}
                  style={{ border }}
                  onClick={() => {
                    reset({ documentId: '' }), setResponse(null), setBrand(null)
                  }}
                >
                  リセット
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
