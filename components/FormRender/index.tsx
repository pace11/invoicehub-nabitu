import { TypeFormRender } from '@/lib/types'
import FormInput from './FormInput'
import FormSelect from './FormSelect'

const templates = [
  {
    type: 'text',
    children: FormInput,
  },
  {
    type: 'date',
    children: FormInput,
  },
  {
    type: 'number',
    children: FormInput,
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
    .map((component) => (
      <component.children
        key={component.type}
        control={control}
        name={name}
        label={label}
        errors={errors}
        options={options}
      />
    ))
}

export default FormRender
