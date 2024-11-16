import React from 'react'
import { Box, InputLabel, OutlinedInput } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'
import { Personal } from '@/types'

const fontColor = '#383838'

type Props = {
  personal: Personal
  register: UseFormRegister<Personal>
}
export const PersonalContents: React.FC<Props> = ({ personal, register }) => {
  return (
    <Box pt={2}>
      <Box pt={2} width={'50%'} mx={'auto'}>
        <Box fontWeight="bold" fontSize="16px">
          お客様情報
        </Box>
        <Box pb={1} display={'flex'} alignItems={'center'}>
          <InputLabel htmlFor="name-label" style={{ color: fontColor }}>
            お名前：
          </InputLabel>
          <OutlinedInput type={'text'} autoComplete={'off'} {...register('userName')} style={{ marginRight: '8px' }} />様
        </Box>
        <Box pb={1} display={'flex'} alignItems={'center'}>
          <InputLabel htmlFor="name-kana-label" style={{ color: fontColor }}>
            お名前(カナ)：
          </InputLabel>
          <OutlinedInput type={'text'} autoComplete={'off'} {...register('userNameKana')} style={{ marginRight: '8px' }} />様
        </Box>
        <Box pb={1} display={'flex'} alignItems={'center'}>
          <InputLabel htmlFor="mail-label" style={{ color: fontColor }}>
            メールアドレス：
          </InputLabel>
          <OutlinedInput type={'email'} autoComplete={'off'} {...register('mailAddress')} />
        </Box>
        <Box pb={1} display={'flex'} alignItems={'center'}>
          <InputLabel htmlFor="phone-label" style={{ color: fontColor }}>
            お電話：
          </InputLabel>
          <OutlinedInput type={'tel'} autoComplete={'off'} {...register('phoneNumber')} />
        </Box>
        <Box pb={1} display={'flex'} alignItems={'center'}>
          <InputLabel htmlFor="league-label" style={{ color: fontColor }}>
            リーグ：
          </InputLabel>
          <OutlinedInput type={'text'} autoComplete={'off'} defaultValue={personal.league} {...register('league')} />
        </Box>
        <Box pb={1} display={'flex'} alignItems={'center'}>
          <InputLabel htmlFor="position-label" style={{ color: fontColor }}>
            ポジション：
          </InputLabel>
          <OutlinedInput type={'text'} autoComplete={'off'} defaultValue={personal.position.toString()} {...register('position')} />
        </Box>
        <Box pb={1} display={'flex'} alignItems={'center'}>
          <InputLabel htmlFor="remarks-label" style={{ color: fontColor }}>
            備考欄：
          </InputLabel>
          <OutlinedInput type={'textArea'} rows={10} multiline autoComplete={'off'} {...register('remarks')} />
        </Box>
        <Box pl={3} textAlign="left" color={'red'}>
          ※料金は予告なく変更される可能性があります。
        </Box>
        <Box pl={3} textAlign="left" color={'red'}>
          ※備考欄に記載いただいたご要望にお応えできない場合がございます。
        </Box>
        <Box pl={3} textAlign="left" color={'red'}>
          ※特別なご要望等は、お手数ですが代理店担当者にもお問い合わせください。
        </Box>
      </Box>
    </Box>
  )
}
