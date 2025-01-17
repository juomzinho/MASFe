import { isMobile } from 'react-device-detect'
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
  justify-content: flex-start;
  align-content: flex-start;
  gap: ${(p) => p.theme.spacing.item};
  ${isMobile && `
      height: calc(100vh - 180px);
      overflow: scroll;
      margin-top: 10px;
  `}
`
