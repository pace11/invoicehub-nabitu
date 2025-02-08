import { z } from 'zod'

export const createInvoiceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  invoice: z.string().min(1, 'Invoice number is required'),
  due_date: z.string().min(1, 'Date is required'),
  amount: z.number().min(1, 'Amount is required'),
  status: z.string().min(1, 'Status is required'),
})

export type InvoiceFormValues = z.infer<typeof createInvoiceSchema>
