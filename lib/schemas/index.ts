import { z } from 'zod'

const INVOICE_CODE = `INV-${Date.now()}`

export const createInvoiceSchema = z.object({
  name: z.string().min(1, 'Name is required').default(''),
  invoice: z
    .string()
    .min(1, 'Invoice number is required')
    .default(INVOICE_CODE),
  due_date: z.date({ required_error: 'Date is required' }).default(new Date()),
  amount: z
    .string()
    .min(1, 'Amount is required')
    .transform((val) => Number(val))
    .refine((val) => val > 0, { message: 'Amount must be greater than 0' })
    .default(''),
  status: z.string().min(1, 'Status is required').default(''),
})

export type InvoiceFormValues = z.infer<typeof createInvoiceSchema>
