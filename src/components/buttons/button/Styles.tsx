import styled from 'styled-components'

export const Button = styled.button<{ color?: string; width?: string | number }>`
  width: auto;
  ${(p) => p.width && `width: ${p.width};`}
  height: 40px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  display: flex;
  padding: 20px;
  justify-content: center;
  background: ${(p) => p.theme.color.background};
  ${(p) => p.color && `background: ${p.theme.defaultColors[p.color]};`}
  transition: 0.5s;
  color: #eee;
  font-size: ${(p) => p.theme.font.default};
  &:hover {
    opacity: 0.6;
  }
  font-family: 'Quicksand';
  font-weight: normal;
  font-style: normal;
  text-transform: capitalize;
`
