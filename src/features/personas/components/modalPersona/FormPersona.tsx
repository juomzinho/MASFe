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
      <FormInput title="Nome" widthInput={'280px'} {...register('name', { required: true })} error={errors.name} />
      <FormInput title="Idade" widthInput={'80px'} {...register('age', { required: true })} error={errors.age} />
      <FormSelect control={control} title="Gênero" options={Genders} {...register('gender')} error={errors.gender} />
      <FormSelect
        control={control}
        title="Profissão"
        options={Occupations}
        {...register('occupation')}
        error={errors.occupation}
      />
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
