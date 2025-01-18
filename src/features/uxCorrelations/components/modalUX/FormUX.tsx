import Form from '../../../../components/form/Form'
import FormInput from '../../../../components/form/FormInput'
import FormSelect from '../../../../components/form/FormSelect'
import { forwardRef, Ref, useEffect } from 'react'
import { useFormUX, UXProps } from '../../hooks/useFormUX'
import FormTextArea from '../../../../components/form/FormTextArea'
import { usePersonas } from '../../../personas/hooks/usePersonas'
import { PersonaSchema } from '../../../personas/hooks/useFormPersona'
import { useVerbs } from '../../../verbs/hooks/useVerbs'
import { VerbSchema } from '../../../verbs/hooks/useFormVerb'
import * as Styles from './Styles'
import { DimensionArr, getDimension } from '../../../../utils/defines/dimension'
import { isMobile } from 'react-device-detect'

interface Props {
  submit: (e: UXProps) => void
  edit?: UXProps | null
  ref: Ref<HTMLButtonElement>
}

const FormUX = forwardRef<HTMLButtonElement, Props>(function FormVerbREf({ submit, edit }, ref) {
  const { control, errors, handleSend, handleSubmit, register, currentDimenison } = useFormUX({ submit, edit })
  const { data: personas } = usePersonas()
  const { data: verbs } = useVerbs()
  
  useEffect(()=>{
    console.log(verbs.filter((item: VerbSchema) => item.dimension === 1))
  }, [])

  return (
    <Form onSubmit={handleSubmit((e) => handleSend(e))}>
      <FormInput title="Titulo" widthInput={isMobile?'calc(100vw - 100px)':'600px'} {...register('name')} error={errors.name} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
        <Styles.FormText>História com foco em </Styles.FormText>
        <FormSelect
          title="Dimensão"
          control={control}
          options={DimensionArr}
          {...register('dimension')}
          error={errors.dimension}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: !currentDimenison?"0.5":"1" }}>
        <Styles.FormText>Eu, </Styles.FormText>
        <FormSelect
          title="Persona"
          control={control}
          options={personas.map((item: PersonaSchema) => item.name)}
          {...register('persona_id')}
          error={errors.persona_id}
          disabled={!currentDimenison}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: !currentDimenison?"0.5":"1"  }}>
        <Styles.FormText>, quero que o sistema possa </Styles.FormText>
        <FormSelect
          title="Verbos"
          control={control}
          options={verbs.filter((item: VerbSchema) => item.dimension === getDimension(currentDimenison, true)).map((item: VerbSchema) => item.verb)}
          {...register('verb_id')}
          error={errors.verb_id}
          disabled={!currentDimenison}
        />
      </div>
      <FormTextArea title="Descrição da História de Usuário" 
          disabled={!currentDimenison} {...register('description')} error={errors.name} />
      <button type="submit" ref={ref} style={{ display: 'none', opacity: !currentDimenison?"0.5":"1"  }} />
    </Form>
  )
})

export default FormUX
