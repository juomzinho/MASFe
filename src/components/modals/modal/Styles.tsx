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
  min-height: 10%;
  display: flex;
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
`

export const Scroll = styled.div`
  width: 100%;
  height: 500px;
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
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.item};
  padding: ${(p) => p.theme.spacing.content};
`
export const Text = styled.p`
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.default};
`