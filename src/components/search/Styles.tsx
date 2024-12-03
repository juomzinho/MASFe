import styled from 'styled-components'

export const Content = styled.div`
  position: relative;
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 10px;
  top: 10px;
`

export const SearchInput = styled.input<{ active: boolean }>`
  background: ${(p) => p.theme.color.primary.color};
  border: solid 1px ${(p) => p.theme.color.primary.text};
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  padding-left: 40px;
  padding-right: ${(p) => p.theme.spacing.item};
  color: ${(p) => p.theme.color.primary.text};
  outline: none;
  box-sizing: border-box;
  ${(props) => `width: ${props.width};`}
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
  ${(p) => p.active && 'width: 200px;'}
  &:focus {
    transition: 0.5s;
    width: 200px;
    border-color: rgba(82, 146, 209, 0.8);
  }
`
