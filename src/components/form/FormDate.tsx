import { forwardRef, InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import * as Styles from './Styles'
import { Controller, FieldValues, UseFormSetValue } from 'react-hook-form'

import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useThemeStore } from '../../store/theme'
import { darkTheme, lightTheme } from '../../utils/theme/theme'
import { Popover, textFieldClasses } from '@mui/material'
import Text from '../texts/text/Text'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldValues
  setValue: UseFormSetValue<any>
  control: any
}

const FormDate = forwardRef<HTMLInputElement, InputProps>(({ title, width, error, control }) => {
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
    <Styles.FormItem width={width} ref={divRef}>
      <Styles.Title>{title}</Styles.Title>
      <Controller
        control={control}
        name="date"
        render={({ field: { ref, onBlur, onChange, name, ...field } }) => (
          <DatePicker
            {...field}
            inputRef={ref}
            format="DD/MM/YYYY"
            onChange={onChange}
            slotProps={{
              desktopPaper: {
                sx: {
                  color: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
                },
              },
              openPickerIcon: {
                sx: {
                  color: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
                },
              },
              leftArrowIcon: {
                sx: {
                  color: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
                },
              },
              rightArrowIcon: {
                sx: {
                  color: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
                },
              },
              day: {
                sx: {
                  color: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
                },
              },
              monthButton: {
                sx: {
                  color: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
                },
              },
              textField: {
                sx: {
                  '& .MuiOutlinedInput-root': {
                    border: 'none',
                    paddingRight: 2,
                    boxSizing: 'border-box',
                    height: '40px',
                  },
                  '& input': {
                    padding: '10px',
                    color: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
                  },
                  color: '#FFF',
                  background: theme === 'light' ? lightTheme.color.primary.color : darkTheme.color.primary.color,
                  borderRadius: 20,
                  border: error ? `solid 1px ${lightTheme.defaultColors.red}` : 'none',
                  height: 40,
                },
              },
              layout: {
                sx: {
                  [`.${textFieldClasses.root}`]: {
                    background: 'red',
                  },
                  background: theme === 'light' ? lightTheme.color.primary.color : darkTheme.color.primary.color,
                  border: 'none',
                },
              },
              switchViewIcon: {
                sx: {
                  color: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
                },
              },
              field: {
                sx: {
                  height: 20,
                },
              },
              popper: {
                sx: {
                  '.MuiFormControl-root': {
                    border: '1px solid red',
                    borderRadius: '10px',
                    color: theme === 'light' ? lightTheme.color.primary.text : darkTheme.color.primary.text,
                  },
                },
              },
            }}
          />
        )}
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
})

export default FormDate
