import styled from 'styled-components'

export const Button = styled.button<{ color?: string; width?: string | number }>`
  width: auto;
  ${(p) => p.width && `width: ${p.width};`}
  background: none;
  height: 40px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  display: fle
  padding: 20px;
  justify-content: center;
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.small};
  ${(p) => p.color && `color: ${p.theme.defaultColors[p.color]};`}
  transition: 0.5s;
  &:hover {
    opacity: 0.6;
  }
  font-family: 'Quicksand';
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
`
