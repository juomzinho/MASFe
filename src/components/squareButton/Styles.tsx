import styled from 'styled-components'

export const Button = styled.button<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${(p) => p.theme.defaultColors[p.color]};
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: 0.5s;
    filter: grayscale(50%);
    transform: scale(1.05);
  }
`

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`
