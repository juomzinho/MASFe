import styled from 'styled-components'

export const Text = styled.p<{ size?: 'small' | 'default' }>`
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font[p.size ? p.size : 'default']};
`
