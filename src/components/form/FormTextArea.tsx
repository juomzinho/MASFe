import React, { forwardRef, useEffect, useRef, useState } from 'react'
import * as Styles from './Styles'
import { FieldError } from 'react-hook-form'
import { useThemeStore } from '../../store/theme'
import { Popover } from '@mui/material'
import { darkTheme, lightTheme } from '../../utils/theme/theme'
import Text from '../texts/text/Text'

export interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError
}

const FormTextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, type, title, width, error, disabled, ...props }, ref) => {
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
      <Styles.FormItem width={700} ref={divRef}>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Textarea className={className} ref={ref} {...props} error={error} disabled={disabled} />
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

export default FormTextArea
