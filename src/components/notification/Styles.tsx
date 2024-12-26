import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;
  padding: 40px;
  box-sizing: border-box;
  flex-direction: column;
  max-height: 100vh;
  overflow: scroll;
`

export const Content = styled.div`
  padding: 10px;
  z-index: 20;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  gap: 10px;
  align-items: center;
  border: none;
  -webkit-box-shadow: 10px 10px 30px 1px ${(p) => p.theme.color.shadow};
  box-shadow: 10px 10px 30px 1px ${(p) => p.theme.color.shadow};
  background: ${(p) => p.theme.color.primary.color};
`
export const Icon = styled.img`
  width: 30px;
  height: 30px;
`

export const TextContent = styled.div``
