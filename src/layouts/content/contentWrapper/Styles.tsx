import styled from 'styled-components'

export const ContentWrapper = styled.section`
  width: 100%;
  height: calc(100% - 50px - 0.5rem - 0.5rem);
  padding: ${(p) => p.theme.spacing.content};
  background: ${(p) => p.theme.color.primary.color};
  border-radius: ${(p) => p.theme.border.radius};
  display: flex;
  flew-direction: row;
  flex-wrap: wrap;
`
