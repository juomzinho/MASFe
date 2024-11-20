import React, { forwardRef } from 'react'
import * as Styles from './Styles'
import { Control, Controller, FieldError } from 'react-hook-form'

export interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: string[]
  number?: boolean
  control: Control<any>
  error?: FieldError
}

const FormSelect = forwardRef<HTMLSelectElement, Props>(
  ({ title, width, disabled, options, error, name, ...props }) => {
    return (
      <Controller
        name={name ?? ''}
        {...props}
        render={({ field: { onChange, onBlur, value, ref } }) => {
          return (
            <Styles.Select
              value={value}
              disabled={disabled}
              onBlur={onBlur}
              onChange={onChange}
              error={error}
              ref={ref}
            >
              {['Selecionar', ...options].map((item, index) => (
                <Styles.Option value={item} key={index.toString()}>
                  {item}
                </Styles.Option>
              ))}
            </Styles.Select>
          )
        }}
      />
    )
  },
)

export default FormSelect
