import React, { forwardRef, useEffect, useRef, useState } from 'react'
import * as Styles from './Styles'
import { Control, Controller, FieldError } from 'react-hook-form'
import { useThemeStore } from '../../store/theme'
import { Popover } from '@mui/material'
import { darkTheme, lightTheme } from '../../utils/theme/theme'
import Text from '../texts/text/Text'

export interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: string[]
  number?: boolean
  control: Control<any>
  error?: FieldError
}

const FormSelect = forwardRef<HTMLSelectElement, Props>(
  ({ title, width, disabled, options, error, name, ...props }) => {
    const [open, toggleOpen] = useState<boolean>(!!error)
    const { theme } = useThemeStore()
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!!error) toggleOpen(true)
    }, [error])

    const handleClose = () => {
      toggleOpen(false)
    }

    const id = open ? 'simple-popover' : undefined
    return (
      <Styles.FormItem ref={divRef}>
        <Styles.Title>{title}</Styles.Title>
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
        <Popover
          id={id}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          anchorEl={divRef.current}
          sx={{
            '.MuiPopover-paper': {
              background: theme === 'light' ? lightTheme.color.primary.color : darkTheme.color.primary.color,
              padding: 1,
            },
          }}
        >
          <Text size="small" text={error?.message ?? ''} />
        </Popover>
      </Styles.FormItem>
    )
  },
)

export default FormSelect
