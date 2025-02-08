import { Control, FieldErrors } from 'react-hook-form'

export type Invoice = {
  name: string
  invoice: string
  due_date: string
  amount: string
  status: string
}

export type TypeFormInput = {
  control: Control
  name: string
  label?: string
  type?: string
}

export type TypeSelectOptions = {
  label: string
  value: string
}

export type TypeFormSelect = {
  control: Control
  name: string
  label?: string
  errors: FieldErrors
  options: TypeSelectOptions[]
}

export type TypeFormRender = {
  control: Control
  name: string
  label?: string
  type?: string
  errors: FieldErrors
  options: TypeSelectOptions[]
}
