import React, { forwardRef } from 'react'
import * as Styles from './Styles'
import { FieldError } from 'react-hook-form'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  widthInput?: string
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, title, widthInput, error, ...props }, ref) => {
    return (
      <Styles.Input
        placeholder={title}
        type={type}
        className={className}
        ref={ref}
        {...props}
        error={error}
        width={widthInput}
      />
    )
  },
)

export default FormInput
