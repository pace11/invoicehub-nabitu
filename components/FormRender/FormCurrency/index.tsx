import { TypeFormInput } from '@/lib/types'
import { InputAdornment, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export default function FormCurrency({ name, label, control }: TypeFormInput) {
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
            onChange={(e) => field.onChange(e.target.value)}
            value={Number(field.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">Rp</InputAdornment>
                ),
              },
            }}
          />
        </>
      )}
    />
  )
}
