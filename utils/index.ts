import { createInvoiceSchema } from '../lib/schemas'

/**
 * convert invoiceSchema.shape from object{} => string[]
 */
export const invoiceKey = Object.keys(createInvoiceSchema.shape)

type InvoiceFields = {
  [key in (typeof invoiceKey)[number]]: string | number | null
}

/**
 * creating defaultValues from invoiceSchema
 */
export const invoiceFields: InvoiceFields = invoiceKey.reduce((key, field) => {
  key[field] = field === 'date' ? null : field === 'amount' ? 0 : ''
  return key
}, {} as InvoiceFields)
