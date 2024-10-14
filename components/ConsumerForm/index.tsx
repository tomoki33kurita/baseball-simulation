import React from 'react'
import { Grid, Box, OutlinedInput } from '@mui/material'
import { useDebounce } from 'use-debounce'
import Select from 'react-select'
import { UseFormRegister } from 'react-hook-form'

import { positionChecker } from '@/util/logic'
import { Personal, Position } from '@/types'
export const SET_PERSONAL = 'setPersonal'

const POSITION_OPTIONS = [
  { label: '投手用', value: 'pitcher', attribute: 'pitcher' },
  { label: '捕手用', value: 'catcher', attribute: 'catcher' },
  { label: '一塁手', value: 'firstBaseman', attribute: 'first' },
  { label: '二塁手', value: 'secondBaseman', attribute: 'infielder' },
  { label: '三塁手', value: 'thirdBaseman', attribute: 'infielder' },
  { label: '遊撃手', value: 'shortStop', attribute: 'infielder' },
  { label: '左翼手', value: 'leftFielder', attribute: 'outfielder' },
  { label: '中堅手', value: 'centerFielder', attribute: 'outfielder' },
  { label: '右翼手', value: 'rightFielder', attribute: 'outfielder' }
]

export const LEAGUE_OPTIONS = [
  { label: 'プロ野球(NPB,独立L)', value: 'professional' },
  { label: '社会人野球', value: 'inCorporate' },
  { label: '大学野球', value: 'collegeLeague' },
  { label: '高校野球', value: 'highSchool' },
  { label: 'ボーイズリーグ', value: 'boysLeague' },
  { label: 'シニアリーグ', value: ' seniorLeague' },
  { label: 'ヤングリーグ', value: 'youngLeague' },
  { label: 'リトルリーグ', value: '' },
  { label: '草野球', value: 'hobby' }
]

type Props = {
  position: Position
  isDisabled: boolean
  dispatch: React.Dispatch<unknown>
  register: UseFormRegister<{ mailAddress: string; mailAddress2: string }>
}

export const ConsumerForm: React.FC<Props> = ({ position, isDisabled, dispatch, register }) => {
  const [personalData, setPersonalData] = React.useState<Personal>()
  const personal = useDebounce(personalData, 500)
  React.useEffect(() => {
    dispatch({ type: SET_PERSONAL, personal: personal[0] })
  }, [personal[0]])

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
