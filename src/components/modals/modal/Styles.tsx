import { isMobile } from 'react-device-detect'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(6px);
  display: flex;
  background: ${(p) => p.theme.color.modalBG};
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  z-index: 10;
`
export const AnimateOpen = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
export const Content = styled.div`
  width: 700px;
  max-height: 75%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.content};
  border-radius: ${(p) => p.theme.border.radius};
  background: ${(p) => p.theme.color.background};
  animation-name: ${AnimateOpen};
  animation-duration: 0.3s;
  animation-timing-function: ease-in;
  padding: ${(p) => p.theme.spacing.content};
  -webkit-box-shadow: 10px 10px 30px 1px ${(p) => p.theme.color.shadow};
  box-shadow: 10px 10px 30px 1px ${(p) => p.theme.color.shadow};
  ${isMobile && `
      width: 90%;
  `}
`

export const Scroll = styled.div`
  width: 100%;
  max-height: 50vh;
  overflow-y: scroll;
`

export const Title = styled.h1`
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.large};
`
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacing.item};
  justify-content: flex-end;
`
export const ContentWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.item};
  padding: ${(p) => p.theme.spacing.item};
  ${isMobile && `
      overflow-y: scroll;
  `}
`
export const Text = styled.p`
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.default};
`

const rotate = keyframes`
    100%   {transform: rotate(360deg)}
`

const prixClipFix = keyframes`
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}

`

export const Spinner = styled.div`
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
    animation: ${rotate} 1s linear infinite;
  }
  .loader::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid ${(p) => p.theme.color.primary.text};
    animation: ${prixClipFix} 2s linear infinite;
  }
`
