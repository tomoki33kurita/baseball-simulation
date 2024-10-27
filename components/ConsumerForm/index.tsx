import React from 'react'
import { Grid, Box, OutlinedInput } from '@mui/material'
import { useDebounce } from 'use-debounce'
import Select from 'react-select'
import { UseFormRegister } from 'react-hook-form'

import { positionChecker } from '@/util/logic'
import { Personal, Position } from '@/types'
import { initialPersonal, LEAGUE_OPTIONS, POSITION_OPTIONS } from '@/features/retail/Constants/personal'
export const SET_PERSONAL = 'setPersonal'

type Props = {
  position: Position
  isDisabled: boolean
  dispatch: React.Dispatch<unknown>
  register: UseFormRegister<{ mailAddress: string; mailAddress2: string }>
}

export const ConsumerForm: React.FC<Props> = ({ position, isDisabled, dispatch, register }) => {
  const [personalData, setPersonalData] = React.useState<Personal>(initialPersonal)
  const personal = useDebounce(personalData, 500)
  React.useEffect(() => {
    dispatch({ type: SET_PERSONAL, personal: personal[0] })
  }, [personal, dispatch])

  const positionOptions = POSITION_OPTIONS.filter((option) => option.attribute === position).map((option) => ({
    label: option.label,
    value: option.value
  }))
  const { isPitcher } = positionChecker(position)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box pt={2} mr={1} display={'flex'} alignItems={'center'}>
          <Box fontWeight="bold" fontSize="16px" mb={1}>
            お客様情報
          </Box>
        </Box>
        {isDisabled && <Box color={'red'}>項目を全て選択後、お客様情報をご入力いただけます。</Box>}
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box p={1}>
              <Box>{'リーグ'}</Box>
              <Select
                options={LEAGUE_OPTIONS}
                styles={{ menu: (provided: any) => ({ ...provided, zIndex: 9999 }) }}
                isDisabled={isDisabled}
                isSearchable={false}
                onChange={(value) => setPersonalData({ ...personalData, league: value ? value.label : 'nodata' })}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={1}>
              <Box>{'守備位置'}</Box>
              <Select
                styles={{ menu: (provided: any) => ({ ...provided, zIndex: 9999 }) }}
                options={positionOptions}
                defaultValue={isPitcher && positionOptions[0]}
                isMulti
                isSearchable={false}
                isDisabled={isDisabled}
                onChange={(values) =>
                  setPersonalData({
                    ...personalData,
                    position: values.map((value) => (value ? value.label : 'nodata'))
                  })
                }
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={1}>
              <Box>メールアドレス</Box>
              <Box pb={1} display={'flex'} alignItems={'center'}>
                <OutlinedInput type={'email'} autoComplete={'off'} fullWidth {...register('mailAddress')} disabled={isDisabled} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={1}>
              <Box>メールアドレス(再入力)</Box>
              <Box pb={1} display={'flex'} alignItems={'center'}>
                <OutlinedInput type={'email'} autoComplete={'off'} fullWidth {...register('mailAddress2')} disabled={isDisabled} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
