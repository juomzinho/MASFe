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
  const {data: personas} = usePersonas()
  const {data: verbs} = useVerbs()
  
  return (
    <Form onSubmit={handleSubmit((e) => handleSend(e))}>
      <FormInput title="Titulo" widthInput={'250px'} {...register('name', { required: true })} error={errors.name} />
      <FormSelect
        title="Verbos"
        control={control}
        options={verbs.map((item: VerbSchema) => item.verb)}
        {...register('verb_id', { required: true })}
        error={errors.verb_id}
      />
      <FormSelect
        title="Persona"
        control={control}
        options={personas.map((item: PersonaSchema) => item.name)}
        {...register('persona_id', { required: true })}
        error={errors.persona_id}
      />
      <FormTextArea 
       title="Descrição da História de Usuário" {...register('name', { required: true })} error={errors.name} 
      />
      <button type="submit" ref={ref} style={{ display: 'none' }} />
    </Form>
  )
})

export default FormUX
