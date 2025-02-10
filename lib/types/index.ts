import { Control, FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import { createInvoiceSchema } from '../schemas'

export type TypeInvoice = z.infer<typeof createInvoiceSchema>

export type TypeListInvoices = {
  _id: string
  name: string
  invoice: string
  due_date: string
  amount: number
  status: string
}

export type TypeSelectOptions = {
  label: string
  value: string
}

export type TypeFormRender = {
  control: Control<TypeInvoice>
  name: keyof TypeInvoice
  label?: string
  type?: 'text' | 'currency' | 'date' | 'select'
  errors?: FieldErrors<TypeInvoice>
  options?: TypeSelectOptions[]
}

export type TypeFormInvoice = {
  key: keyof TypeInvoice
  label: string
  type?: 'text' | 'currency' | 'date' | 'select'
  options?: TypeSelectOptions[]
}

export type TypeInvoicesResponse = {
  message: string
  data?: TypeListInvoices[]
}
