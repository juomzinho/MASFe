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
  padding-left: ${(p) => p.theme.spacing.item};
  padding-right: ${(p) => p.theme.spacing.item};
  color: ${(p) => p.theme.color.primary.text};
  outline: none;
  box-sizing: border-box;
  ${(props) => `width: ${props.width};`}
  ${(props) => props.full && `width: 100%`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.error && `border: solid 1px ${props.theme.defaultColor.red}`};
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
  padding-left: ${(p) => p.theme.spacing.item};
  padding-right: ${(p) => p.theme.spacing.item};
  color: ${(p) => p.theme.color.primary.text};
  outline: none;
  box-sizing: border-box;
  ${(props) => (props.full ? `width: 100%` : null)};
  ${(props) => props.error && `border: solid 1px ${props.theme.defaultColor.red}; `};
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

export const Option = styled.option`
  background-color: #202833;
`
