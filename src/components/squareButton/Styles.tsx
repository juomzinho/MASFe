import styled from 'styled-components'

export const Button = styled.button<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${(p) => p.theme.defaultColors[p.color]};
  transition: 0.5s;
  &:hover {
    opacity: 0.6;
  }
`

export const Icon = styled.img``
