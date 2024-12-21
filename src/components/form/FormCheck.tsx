import { forwardRef } from 'react'
import * as Body from './Styles'
import { Control, Controller, FieldError } from 'react-hook-form'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  number?: boolean
  control: Control<any>
  error?: FieldError
  width?: string
  current: boolean | null
}

const FormCheck = forwardRef<HTMLInputElement, Props>(({ current, disabled, control, ...props }, ref) => {
  return (
    <Body.FormItem width={props.width}>
      <Body.CheckboxContainer checked={current ?? false}>
        <Controller
          control={control}
          name={props.name ?? ''}
          render={({ field: { onChange, value, ...field } }) => (
            <Body.HiddenCheckbox
              disabled={disabled}
              {...field}
              type="checkbox"
              ref={ref}
              checked={Boolean(value)}
              onChange={(e) => onChange(e.target.checked ? true : false)}
            />
          )}
        />
        {props.title && <Body.Label>{props.title}</Body.Label>}
      </Body.CheckboxContainer>
    </Body.FormItem>
  )
})

export default FormCheck
