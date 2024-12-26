import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`
export const Caption = styled.div`
  display: flex;
  gap: 10px;
`
export const PercentageText = styled.p`
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.small};
`
export const CaptionTitle = styled.p<{ color: string }>`
  color: ${(p) => p.color};
  font-size: ${(p) => p.theme.font.medium};
`

export const CaptionContent = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  margin-left: -100px;
  flex-wrap: wrap;
  justify-content: center;
`
