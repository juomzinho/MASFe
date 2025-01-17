import { isMobile } from 'react-device-detect';
import styled from 'styled-components'

export const Container = styled.main`
  background: ${(p) => p.theme.color.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  padding: ${(p) => p.theme.spacing.content};
  ${ isMobile && `
    flex-direction: column;
  `}
`
