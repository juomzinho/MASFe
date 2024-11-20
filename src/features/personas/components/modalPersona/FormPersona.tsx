import Form from '../../../../components/form/Form'
import FormInput from '../../../../components/form/FormInput'
import FormSelect from '../../../../components/form/FormSelect'
import { forwardRef, Ref } from 'react'
import { PersonaSchema, useFormPersona } from '../../hooks/useFormPersona'
import { Genders, Occupations } from '../../../../utils/defines/persona'
import FormTextArea from '../../../../components/form/FormTextArea'

interface Props {
  submit: (e: PersonaSchema) => void
  edit?: PersonaSchema | null
  ref: Ref<HTMLButtonElement>
}

const FormPersona = forwardRef<HTMLButtonElement, Props>(function FormPersonaRef({ submit, edit }, ref) {
  const { control, errors, handleSend, handleSubmit, register } = useFormPersona({ submit, edit })
  return (
    <Form onSubmit={handleSubmit((e) => handleSend(e))}>
      <FormInput
        placeholder="Nome"
        widthInput={'250px'}
        {...register('name', { required: true })}
        error={errors.name}
      />
      <FormInput placeholder="Idade" widthInput={'50px'} {...register('age', { required: true })} error={errors.age} />
      <FormSelect control={control} options={Occupations} {...register('occupation')} error={errors.occupation} />
      <FormSelect control={control} options={Genders} {...register('gender')} error={errors.gender} />
      <FormTextArea width={600} title="Necessidade" {...register('needs', { required: true })} error={errors.needs} />
      <FormTextArea
        width={600}
        title="Possíveis soluções"
        {...register('possible_solutions', { required: true })}
        error={errors.needs}
      />
      <button type="submit" ref={ref} style={{ display: 'none' }} />
    </Form>
  )
})

export default FormPersona
