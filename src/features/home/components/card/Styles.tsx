import styled from 'styled-components'

export const Card = styled.div<{ gridArea: string }>`
  border-radius: ${(p) => p.theme.border.radius};
  background: ${(p) => p.theme.color.primary.color};
  grid-area: ${(p) => p.gridArea};
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  align-items: center;
`
