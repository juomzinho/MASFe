import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${isMobile && `
    padding: 10px;  
  `}
`
export const Content = styled.section`
  width: 400px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${isMobile && `
    width: 100%;  
  `}
`
