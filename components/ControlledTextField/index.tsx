import { TextField } from '@mui/material'
import { Control, Controller, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  control: Control<any, any>
  register: UseFormRegister<any>
  name: 'email' | 'password' | 'documentId' // ドメイン情報だけど選択肢が少ないのでここで定義
  label: string
  disabled?: boolean
  type?: 'password'
}

export const ControlledTextField: React.FC<Props> = ({ control, register, name, label, disabled, type = 'text' }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            id={field.name}
            label={label}
            variant="outlined"
            {...register(name)}
            margin="normal"
            required
            type={type}
            autoFocus
            style={{ width: '100%' }}
            disabled={disabled}
            {...register(name)}
          />
        )
      }}
    />
  )
}
