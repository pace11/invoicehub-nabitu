import { createInvoiceSchema, InvoiceFormValues } from '@/lib/schemas'
import { invoiceFields } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const useValueForm = ({
  values = null,
}: {
  values?: InvoiceFormValues | null
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceFormValues>({
    resolver: zodResolver(createInvoiceSchema),
    defaultValues: values || invoiceFields,
  })

  return { control, handleSubmit, errors }
}
