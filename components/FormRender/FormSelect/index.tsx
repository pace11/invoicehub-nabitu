import { TypeFormSelect } from '@/lib/types'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { Controller } from 'react-hook-form'

export default function FormSelect({
  name,
  label,
  control,
  options,
  errors,
}: TypeFormSelect) {
  return (
    <FormControl fullWidth error={!!errors[name]}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Select {...field} size="small" label={label} variant="filled">
              {options?.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
            {fieldState.error && (
              <FormHelperText>{fieldState.error.message}</FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  )
}
