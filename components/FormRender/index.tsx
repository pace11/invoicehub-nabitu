import { TypeFormRender } from '@/lib/types'
import React from 'react'
import FormCurrency from './FormCurrency'
import FormDate from './FormDate'
import FormInput from './FormInput'
import FormSelect from './FormSelect'

const templates = [
  {
    type: 'date',
    children: FormDate,
  },
  {
    type: 'text',
    children: FormInput,
  },
  {
    type: 'currency',
    children: FormCurrency,
  },
  {
    type: 'select',
    children: FormSelect,
  },
]

const FormRender = (props: TypeFormRender) => {
  const { type } = props

  const component = templates.find(
    (template) => template.type === type,
  )?.children

  if (!component) return null

  return React.createElement(component, props)
}

export default FormRender
