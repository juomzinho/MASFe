import Form from '../../../../components/form/Form'
import FormInput from '../../../../components/form/FormInput'
import FormSelect from '../../../../components/form/FormSelect'
import { forwardRef, Ref } from 'react'
import { ACSchema, useFormAC } from '../../hooks/useFormAC'
import { useVerbs } from '../../../verbs/hooks/useVerbs'
import { DimensionArr } from '../../../../utils/defines/dimension'

interface Props {
  submit: (e: ACSchema) => void
  edit?: ACSchema | null
  ref: Ref<HTMLButtonElement>
}

const FormPersona = forwardRef<HTMLButtonElement, Props>(function FormPersonaRef({ submit, edit }, ref) {
  const { control, errors, handleSend, handleSubmit, register } = useFormAC({ submit, edit })
  const { data } = useVerbs()
  console.log(data)
  return (
    <Form onSubmit={handleSubmit((e) => handleSend(e))}>
      <FormInput
        placeholder="Nome"
        widthInput={'250px'}
        {...register('criteria', { required: true })}
        error={errors.criteria}
      />
      <FormSelect
        control={control}
        options={DimensionArr}
        {...register('dimension', { required: true })}
        error={errors.dimension}
      />
      <button type="submit" ref={ref} style={{ display: 'none' }} />
    </Form>
  )
})

export default FormPersona
