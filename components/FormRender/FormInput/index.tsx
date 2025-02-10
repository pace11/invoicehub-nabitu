import { TypeFormRender } from '@/lib/types'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export default function FormInput({
  name,
  label,
  control,
  type,
}: TypeFormRender) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <TextField
            {...field}
            type={type}
            size="small"
            label={label}
            variant="filled"
            error={fieldState.invalid}
            helperText={fieldState?.error?.message}
          />
        </>
      )}
    />
  )
}
