'use client'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  InputAdornment,
  MenuItem,
  TextField,
} from '@mui/material'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  number_invoice: z.string().min(1, 'Invoice number is required'),
  date: z.string().min(1, 'Date is required'),
  amount: z.number().min(1, 'Amount is required'),
  status: z.string().min(1, 'Status is required'),
})

export default function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      number_invoice: '',
      date: null,
      amount: '',
      status: '',
    },
  })

  const onSubmit = (data: object) => {
    console.log('Form Data:', data)
  }

  return (
    <Container component="form" onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          title="Invoice Form"
          sx={{ borderBottom: '1px solid black' }}
        />
        <CardContent
          sx={{
            mx: 'auto',
            p: 3,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 4,
            backgroundColor: 'white',
          }}
        >
          <TextField
            label="Name"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
            size="small"
            variant="filled"
          />
          <TextField
            label="Number"
            {...register('number_invoice')}
            error={!!errors.number_invoice}
            helperText={errors.number_invoice?.message}
            fullWidth
            size="small"
            variant="filled"
          />
          <TextField
            label="Due Date"
            {...register('date')}
            type="date"
            error={!!errors.date}
            helperText={errors.date?.message}
            fullWidth
            size="small"
            variant="filled"
          />
          <TextField
            label="Amount"
            {...register('amount', { valueAsNumber: true })}
            type="number"
            error={!!errors.amount}
            helperText={errors.amount?.message}
            fullWidth
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">Rp</InputAdornment>
                ),
              },
            }}
            variant="filled"
          />
          <TextField
            select
            label="Status"
            {...register('status')}
            error={!!errors.status}
            helperText={errors.status?.message}
            type=""
            fullWidth
            size="small"
            variant="filled"
          >
            <MenuItem value="paid">Paid</MenuItem>
            <MenuItem value="Unpaid">Unpaid</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </TextField>
        </CardContent>
        <CardActions sx={{ p: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
