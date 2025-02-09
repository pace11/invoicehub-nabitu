import { createInvoiceSchema } from '../lib/schemas'

export const invoiceKey = Object.keys(createInvoiceSchema.shape)

type InvoiceFields = {
  [key in (typeof invoiceKey)[number]]: string | number
}

export const invoiceFields: InvoiceFields = invoiceKey.reduce((key, field) => {
  key[field] = createInvoiceSchema.shape[field]._def.defaultValue()
  return key
}, {} as InvoiceFields)

export const formatCurrency = (value: string | number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
    Number(value),
  )
