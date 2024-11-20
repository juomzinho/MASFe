import React, { forwardRef } from 'react'
import * as Styles from './Styles'
import { FieldError } from 'react-hook-form'

export interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError
}

const FormTextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, type, title, width, error, disabled, ...props }, ref) => {
    return (
      <Styles.FormItem width={700}>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Textarea className={className} ref={ref} {...props} error={error} disabled={disabled} />
      </Styles.FormItem>
    )
  },
)

export default FormTextArea
