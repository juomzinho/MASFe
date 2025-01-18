import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  flex-direction: row;
  gap: ${p => p.theme.spacing.item};
  background: ${p => p.theme.color.primary.color};
  padding: ${p => p.theme.spacing.item};
  border-radius: ${p => p.theme.border.radius};
  align-items: flex-start;
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`
