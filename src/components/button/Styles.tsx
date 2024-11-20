import styled from 'styled-components'

export const Button = styled.button<{ color?: string }>`
  width: auto;
  height: 40px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  background: ${(p) => p.theme.color.background};
  ${(p) => p.color && `background: ${p.theme.defaultColors[p.color]};`}
  transition: 0.5s;
  color: #eee;
  font-size: ${(p) => p.theme.font.default};
  &:hover {
    opacity: 0.6;
  }
  text-transform: capitalize;
`
