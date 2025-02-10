import { TypeInvoice } from '@/lib/types'

export const invoiceFields: TypeInvoice = {
  name: '',
  invoice: `INV-${Date.now()}`,
  due_date: new Date(),
  amount: 0,
  status: '',
}

export const formatCurrency = (value: string | number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(Number(value))
