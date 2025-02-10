import { TypeFormRender } from '@/lib/types'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { Controller } from 'react-hook-form'

export default function FormDate({ name, label, control }: TypeFormRender) {
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
              field.onChange(newValue ? newValue.toDate() : null)
            }}
            slotProps={{
              textField: {
                error: fieldState.invalid,
                helperText: fieldState.error?.message,
                variant: 'filled',
                size: 'small',
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  )
}
