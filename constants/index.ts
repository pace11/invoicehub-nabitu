import { TypeFormInvoice, TypeSelectOptions } from '@/lib/types'
import { NoteAdd, Receipt } from '@mui/icons-material'

export const STATUS: TypeSelectOptions[] = [
  { label: 'Paid', value: 'paid' },
  { label: 'Unpaid', value: 'unpaid' },
  { label: 'Pending', value: 'pending' },
]

export const FORM_INVOICE: TypeFormInvoice[] = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'invoice', label: 'Invoice', type: 'text' },
  { key: 'due_date', label: 'Due Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'currency' },
  { key: 'status', label: 'Status', type: 'select', options: STATUS },
]

export const SIDENAV_MENU = [
  {
    label: 'Add Invoice',
    url: '/add',
    icon: NoteAdd,
  },
  {
    label: 'My Invoice',
    url: '/list',
    icon: Receipt,
  },
]
