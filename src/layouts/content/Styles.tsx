import { isMobile } from 'react-device-detect';
import styled from 'styled-components'

export const ContentWrapper = styled.section`
  height: 100%;
  width: calc(100% - 16rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(p) => p.theme.spacing.content};
  ${isMobile && `
    flex-direction: column;
    padding: 0px;
    padding-top: 60px;
    width: 100%;
    height: auto;
    gap: ${(p: any) => p.theme.spacing.item};
  `}
`
