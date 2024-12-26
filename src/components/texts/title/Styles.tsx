import styled from 'styled-components'

export const Title = styled.h1<{ size?: string }>`
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font[p.size ?? 'large']};
`
