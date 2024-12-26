import Form from '../../../../components/form/Form'
import FormInput from '../../../../components/form/FormInput'
import FormSelect from '../../../../components/form/FormSelect'
import { GarretArr, GarretVars } from '../../../../utils/defines/garret'
import { DimensionArr } from '../../../../utils/defines/dimension'
import { useFormVerb, VerbSchema } from '../../hooks/useFormVerb'
import { forwardRef, Ref } from 'react'
import FormCheck from '../../../../components/form/FormCheck'
import * as Styles from './Styles'

interface Props {
  submit: (e: VerbSchema) => void
  edit?: VerbSchema | null
  ref: Ref<HTMLButtonElement>
}

const FormVerb = forwardRef<HTMLButtonElement, Props>(function FormVerbREf({ submit, edit }, ref) {
  const { control, errors, handleSend, handleSubmit, register } = useFormVerb({ submit, edit })
  return (
    <Form onSubmit={handleSubmit((e) => handleSend(e))}>
      <FormInput title="Verbo" widthInput={'450px'} {...register('verb', { required: true })} error={errors.verb} />
      <FormSelect
        title="Dimensão"
        control={control}
        options={DimensionArr}
        {...register('dimension', { required: true })}
        error={errors.dimension}
      />
      <div>
        <Styles.Title>Selecione em quais elementos de garret o verbo será incluído</Styles.Title>
        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', gap: 10 }}>
          {GarretArr.map((item, index) => (
            <FormCheck current={false} {...register(GarretVars[index])} title={item} key={index} control={control} />
          ))}
        </div>
      </div>
      <button type="submit" ref={ref} style={{ display: 'none' }} />
    </Form>
  )
})

export default FormVerb
