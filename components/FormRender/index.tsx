import { TypeFormRender } from '@/lib/types'
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

const FormRender = ({
  control,
  name,
  label,
  type,
  errors,
  options,
}: TypeFormRender) => {
  return templates
    .filter((template) => template.type === type)
    .map((component, index) => (
      <component.children
        key={index}
        type={type}
        control={control}
        name={name}
        label={label}
        errors={errors}
        options={options}
      />
    ))
}

export default FormRender
