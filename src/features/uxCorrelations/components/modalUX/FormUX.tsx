import Form from '../../../../components/form/Form'
import FormInput from '../../../../components/form/FormInput'
import FormSelect from '../../../../components/form/FormSelect'
import { forwardRef, Ref } from 'react'
import { useFormUX, UXProps } from '../../hooks/useFormUX'
import FormTextArea from '../../../../components/form/FormTextArea'
import { usePersonas } from '../../../personas/hooks/usePersonas'
import { PersonaSchema } from '../../../personas/hooks/useFormPersona'
import { useVerbs } from '../../../verbs/hooks/useVerbs'
import { VerbSchema } from '../../../verbs/hooks/useFormVerb'

interface Props {
  submit: (e: UXProps) => void
  edit?: UXProps | null
  ref: Ref<HTMLButtonElement>
}

const FormUX = forwardRef<HTMLButtonElement, Props>(function FormVerbREf({ submit, edit }, ref) {
  const { control, errors, handleSend, handleSubmit, register } = useFormUX({ submit, edit })
  // const { data: personas } = usePersonas()
  // const { data: verbs } = useVerbs()

  return (
    <Form onSubmit={handleSubmit((e) => handleSend(e))}>
      <FormInput title="Titulo" widthInput={'600px'} {...register('name')} error={errors.name} />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
        <h1>Eu </h1>
        <FormSelect
          title="Persona"
          control={control}
          options={[].map((item: PersonaSchema) => item.name)}
          {...register('persona_id')}
          error={errors.persona_id}
        />{' '}
        <h2>, quero que o sistema </h2>
        <FormSelect
          title="Verbos"
          control={control}
          options={[].map((item: VerbSchema) => item.verb)}
          {...register('verb_id')}
          error={errors.verb_id}
        />
      </div>
      <FormTextArea title="Descrição da História de Usuário" {...register('name')} error={errors.name} />
      <button type="submit" ref={ref} style={{ display: 'none' }} />
    </Form>
  )
})

export default FormUX
