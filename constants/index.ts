export const STATUS = [
  { label: 'Paid', value: 'paid' },
  { label: 'Unpaid', value: 'unpaid' },
  { label: 'Pending', value: 'pending' },
]

export const FORM_INVOICE = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'invoice', label: 'Invoice', type: 'text' },
  { key: 'due_date', label: 'Due Date', type: 'date' },
  { key: 'amount', label: 'Amount', type: 'number' },
  { key: 'status', label: 'Status', type: 'select', options: STATUS },
]
