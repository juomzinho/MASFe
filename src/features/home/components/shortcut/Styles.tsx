import styled from 'styled-components'

export const Shortcut = styled.div<{ gridArea: string }>`
  border-radius: 10px;
  background: ${(p) => p.theme.color.primary.color};
  grid-area: ${(p) => p.gridArea};
  &:hover {
    background: ${(p) => p.theme.defaultColors.blue};
    opacity: 0.1;
  }
`
