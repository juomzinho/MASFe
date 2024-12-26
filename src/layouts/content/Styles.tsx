import styled from 'styled-components'

export const ContentWrapper = styled.section`
  height: 100%;
  width: calc(100% - 16rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(p) => p.theme.spacing.content};
`
