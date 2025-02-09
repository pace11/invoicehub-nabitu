'use client'

import { useQueriesMutation } from '@/hooks/useQueriesMutation'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import FormRender from '../../../components/FormRender'
import { FORM_INVOICE } from '../../../constants'
import { useValueForm } from '../../../hooks/useValueForm'

export default function Add() {
  const { handleSubmit, control, errors } = useValueForm()
  const { mutate } = useQueriesMutation({ endpoint: '/invoices' })

  const onSubmit = async (data: object) => {
    const payload = {
      ...data,
      due_date: new Date(data.due_date).toISOString(),
    }

    await mutate({ body: payload })
  }

  return (
    <Container component="form" onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          title={<Typography fontWeight="bold">Invoice Form</Typography>}
          sx={{ borderBottom: `1px solid ${grey[200]}` }}
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
          {FORM_INVOICE.map((item) => (
            <FormRender
              key={item.key}
              name={item.key}
              type={item.type}
              label={item.label}
              options={item.options}
              errors={errors}
              control={control}
            />
          ))}
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
