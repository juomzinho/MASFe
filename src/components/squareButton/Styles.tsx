import styled from 'styled-components'

export const Button = styled.button<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${(p) => p.theme.defaultColors[p.color]};
  transition: 0.5s;

  -webkit-box-shadow:
    5px 5px 10px 1px ${(p) => p.theme.color.shadow},
    -5px -5px 10px 1px ${(p) => p.theme.color.shadow};
  box-shadow:
    -5px -5px 10px 1px ${(p) => p.theme.color.shadow},
    5px 5px 10px 1px ${(p) => p.theme.color.shadow};
  &:hover {
    transition: 0.5s;
    filter: grayscale(50%);
    transform: scale(1.05);
  }
`

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`
