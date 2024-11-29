import Form from '../../../../components/form/Form'
import FormInput from '../../../../components/form/FormInput'
import FormSelect from '../../../../components/form/FormSelect'
import { GarretArr } from '../../../../utils/defines/garret'
import { DimensionArr } from '../../../../utils/defines/dimension'
import { useFormVerb, VerbSchema } from '../../hooks/useFormVerb'
import { forwardRef, Ref } from 'react'

interface Props {
  submit: (e: VerbSchema) => void
  edit?: VerbSchema | null
  ref: Ref<HTMLButtonElement>
}

const FormVerb = forwardRef<HTMLButtonElement, Props>(function FormVerbREf({ submit, edit }, ref) {
  const { control, errors, handleSend, handleSubmit, register } = useFormVerb({ submit, edit })
  return (
    <Form onSubmit={handleSubmit((e) => handleSend(e))}>
      <FormInput title="Verbo" widthInput={'250px'} {...register('verb', { required: true })} error={errors.verb} />
      <FormSelect
        title="Dimensão"
        control={control}
        options={DimensionArr}
        {...register('dimension', { required: true })}
        error={errors.dimension}
      />
      <FormSelect
        title="Garret"
        control={control}
        options={GarretArr}
        {...register('garret', { required: true })}
        error={errors.garret}
      />
      <button type="submit" ref={ref} style={{ display: 'none' }} />
    </Form>
  )
})

export default FormVerb
