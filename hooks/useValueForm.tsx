import { createInvoiceSchema } from '@/lib/schemas'
import { TypeInvoice } from '@/lib/types'
import { invoiceFields } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const useValueForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeInvoice>({
    resolver: zodResolver(createInvoiceSchema),
    defaultValues: invoiceFields,
  })

  return { control, handleSubmit, errors, reset }
}
