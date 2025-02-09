import { TypeFormInput } from '@/lib/types'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { Controller } from 'react-hook-form'

export default function FormDate({ name, label, control }: TypeFormInput) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <DatePicker
            label={label}
            value={field.value ? dayjs(field.value) : null}
            onChange={(newValue: Dayjs | null) => {
              field.onChange(newValue ? newValue.toDate() : null) // Convert dayjs to Date
            }}
            slotProps={{
              textField: {
                error: fieldState.invalid,
                helperText: fieldState.error?.message,
                variant: 'filled',
              },
            }}
          />
          // <TextField
          //   {...field}
          //   type={type}
          //   size="small"
          //   label={label}
          //   variant="filled"
          //   error={fieldState.invalid}
          //   helperText={fieldState?.error?.message}
          // />
        )}
      />
    </LocalizationProvider>
  )
}
