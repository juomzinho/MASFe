import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.large};
`
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing.item};
`
