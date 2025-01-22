import { TextField } from '@mui/material'
import { styled as MaterialStyled } from '@mui/material/styles'
import { FieldError } from 'react-hook-form'
import styled from 'styled-components'

export const FormContent = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: ${(p) => p.theme.spacing.item};
  align-items: flex-end;
`
export const Input = styled.input<{
  full?: boolean
  width?: string
  error?: FieldError
}>`
  background: ${(p) => p.theme.color.primary.color};
  border: solid 1px ${(p) => p.theme.color.primary.text};
  border: none;
  height: 40px;
  width: 100%;
  border-radius: 20px;
  padding-left: 15px;
  padding-right: ${(p) => p.theme.spacing.item};
  color: ${(p) => p.theme.color.primary.text};
  outline: none;
  box-sizing: border-box;
  ${(props) => `width: ${props.width};`}
  ${(props) => props.full && `width: 100%`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.error && `border: solid 1px ${props.theme.defaultColors.red}`};
  transition: 0.5s;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(p) => p.theme.color.primary.text};
  }
  :-ms-input-placeholder {
    font-style: italic;
    color: ${(p) => p.theme.color.primary.text};
  }
  :disabled {
    transition: 0.5s;
    color: rgba(255, 255, 255, 0.6);
  }
  :focus {
    transition: 0.5s;
    border-color: rgba(82, 146, 209, 0.8);
  }
`

export const Select = styled.select<{
  full?: boolean
  width?: number | string | undefined
  error?: FieldError
}>`
  background: ${(p) => p.theme.color.primary.color};
  border: none;
  height: 40px;
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 15px;
  color: ${(p) => p.theme.color.primary.text};
  outline: none;
  box-sizing: border-box;
  ${(props) => (props.full ? `width: 100%` : null)};
  ${(props) => props.error && `border: solid 1px ${props.theme.defaultColors.red}; `};
  ${(props) => (props.width ? `width: ${props.width}px` : null)};
  transition: 0.5s;

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(p) => p.theme.color.primary.text};
  }
  :-ms-input-placeholder {
    font-style: italic;
    color: ${(p) => p.theme.color.primary.text};
  }
  :disabled {
    transition: 0.5s;
    color: rgba(255, 255, 255, 0.6);
  }
  :focus {
    transition: 0.5s;
    border-color: rgba(82, 146, 209, 0.8);
  }
`

export const Textarea = styled.textarea<{
  full?: boolean
  width?: number | string | undefined
  error?: FieldError
}>`
  background: ${(p) => p.theme.color.primary.color};
  border: none;
  border-radius: ${(p) => p.theme.border.radius};
  height: 100px;
  width: 100%;
  padding: ${(p) => p.theme.spacing.item};
  color: ${(p) => p.theme.color.primary.text};
  outline: none;
  box-sizing: border-box;
  resize: none;
  ${(props) => (props.full ? `width: 100%` : null)};
  ${(props) => props.error && `border: solid 1px ${props.theme.defaultColors.red}; `};
  ${(props) => (props.width ? `width: ${props.width}px` : null)};
  transition: 0.5s;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :disabled {
    opacity: 0.5;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(p) => p.theme.color.primary.text};
  }
  :-ms-input-placeholder {
    font-style: italic;
    color: ${(p) => p.theme.color.primary.text};
  }
  :disabled {
    transition: 0.5s;
    color: rgba(255, 255, 255, 0.6);
  }
  :focus {
    transition: 0.5s;
    border-color: rgba(82, 146, 209, 0.8);
  }
`

export const Option = styled.option`
  background-color: ${(p) => p.theme.color.primary.color};
`
export const FormItem = styled.div<{
  width?: number | string | undefined
  row?: boolean
  error?: boolean
}>`
  display: flex;
  flex-direction: column;
  width: ${(p) => p.width}px;
  ${(p) => p.row && 'flex-direction: row; justify-content: space-between; align-items: center;'}
  ${(p) => p.error && 'background: rgba(250, 0, 0, 0.2);'}
  border-radius: 5px;
  position: relative;
`

export const Title = styled.p`
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.small};
  margin-left: 10px;
  margin-bottom: 5px;
`

export const StyledTextField = MaterialStyled(TextField)({
  color: '#f8bbd0',
  borderRadius: '20px',
  borderWidth: '1px',
  borderColor: '#e91e63',
  border: '1px solid',
  backgroundColor: '#880e4f',
})

export const Label = styled.label`
  margin-left: 5px;
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.small};
`

export const CheckboxContainer = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.color.primary.color};
  border: solid 1px ${(p) => p.theme.color.primary.text};
  border: none;
  height: 40px;
  width: 100%;
border-radius: 20px;
  padding-left: 15px;
  padding-right: ${(p) => p.theme.spacing.item};
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.small};
`
export const HiddenCheckbox = styled.input`
  width: 20px;
  border-radius: 10px;
  height: 20px;
  cursor: pointer;
  :disabled {
    opacity: 0.5;
  }
`
export const EyeBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 27.5px;
`;

export const EyeIcon = styled.img`
  width: 20px;
  height: 20px;
`;