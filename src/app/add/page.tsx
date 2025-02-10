/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useQueriesMutation } from '@/hooks/useQueriesMutation'
import { invoiceFields } from '@/utils'
import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { useEffect } from 'react'
import FormRender from '../../../components/FormRender'
import { FORM_INVOICE } from '../../../constants'
import { useValueForm } from '../../../hooks/useValueForm'

export default function Add() {
  const { handleSubmit, control, errors, reset } = useValueForm()
  const { mutate, successMutation, loadingMutation } = useQueriesMutation({
    endpoint: '/invoices',
  })

  const onSubmit = async (data: object) => {
    const payload = {
      ...data,
      due_date: new Date((data as { due_date: string }).due_date).toISOString(),
    }

    await mutate({ body: payload })
  }

  useEffect(() => {
    if (!!successMutation) {
      reset(invoiceFields)
    }
  }, [successMutation])

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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loadingMutation}
            loading={loadingMutation}
            loadingPosition="start"
          >
            Submit
          </Button>
        </CardActions>
      </Card>
      {successMutation && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success Alert with an encouraging title.
        </Alert>
      )}
    </Container>
  )
}
