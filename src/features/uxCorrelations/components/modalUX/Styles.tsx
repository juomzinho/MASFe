import styled, { keyframes } from 'styled-components'

const animate = keyframes`
 4% {
    transform: rotateZ(90deg);
  }
  10%,
  20% {
    transform: rotateZ(0deg);
  }
  36%,
  44% {
    transform: rotateZ(90deg);
  }
  50%,
  60% {
    transform: rotateZ(0deg);
  }
  76%,
  84% {
    transform: rotateZ(90deg);
  }
  90%,
  100% {
    transform: rotateZ(0deg);
  }
`

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  transition: 0.5s;
  transform: rotateZ(-90deg);
  animation: ${animate} 10s ease infinite;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`
export const FormText = styled.h1`
  color: ${p => p.theme.color.primary.text};
`

export const Card = styled.div`
  background: ${p => p.theme.defaultColors.default};
  padding: ${p => p.theme.spacing.content};
  border: ${p => p.theme.border.style} ${p => p.theme.defaultColors.default};
  border-radius: ${p => p.theme.border.radius};
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
`