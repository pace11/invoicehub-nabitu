import { TypeFormInput } from '@/lib/types'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export default function FormInput({
  name,
  label,
  control,
  type,
}: TypeFormInput) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <TextField
            {...field}
            type="number"
            size="small"
            label={label}
            variant="filled"
            error={fieldState.invalid}
            helperText={fieldState?.error?.message}
            onChange={(e) =>
              field.onChange(
                type === 'number'
                  ? Number(e.target.value)
                  : String(e.target.value),
              )
            }
          />
        </>
      )}
    />
  )
}
