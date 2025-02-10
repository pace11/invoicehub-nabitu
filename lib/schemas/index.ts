import { z } from 'zod'

export const createInvoiceSchema = z.object({
  name: z.string().min(1, 'Name is required').default(''),
  invoice: z.string().min(1, 'Invoice number is required').default(''),
  due_date: z.date({ required_error: 'Date is required' }).default(new Date()),
  amount: z
    .string()
    .min(1, 'Amount is required')
    .transform((val) => Number(val))
    .refine((val) => val > 0, { message: 'Amount must be greater than 0' })
    .default(''),
  status: z.string().min(1, 'Status is required').default(''),
})
