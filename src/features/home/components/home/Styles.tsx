import styled from 'styled-components'

export const Content = styled.section`
  width: calc(100% - 16rem);
  height: 100%;
  justify-content: space-between;
  display: grid;
  padding: ${(p) => p.theme.spacing.content};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  gap: 10px;
`
