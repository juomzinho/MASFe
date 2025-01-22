import React, { forwardRef, useEffect, useRef, useState } from 'react'
import * as Styles from './Styles'
import { FieldError } from 'react-hook-form'
import { Popover } from '@mui/material'
import { useThemeStore } from '../../store/theme'
import Text from '../texts/text/Text'
import { darkTheme, lightTheme } from '../../utils/theme/theme'
import { Icons } from '../../utils/defines/icons'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  widthInput?: string
  passoword?: boolean
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, title, widthInput, error, passoword, ...props }, ref) => {
    const [open, toggleOpen] = useState<boolean>(!!error)
    const { theme } = useThemeStore()
    const divRef = useRef<HTMLDivElement>(null)
    const [view, toggleView] = useState(false)

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
        <Styles.Input
          type={passoword && !view ? 'password' : type}
          className={className}
          ref={ref}
          {...props}
          error={error}
          width={widthInput}
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
          <Text size='small' text={error?.message ?? ''} />
        </Popover>
        
        {passoword && (
          <Styles.EyeBtn onClick={() => toggleView(!view)}>
            <Styles.EyeIcon
              src={view ? Icons[theme].eyeSlash : Icons[theme].eyeRegular}
            />
          </Styles.EyeBtn>
        )}
      </Styles.FormItem>
    )
  },
)

export default FormInput
