import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

export const Button = styled.button<{ full?: boolean }>`
  width: calc(100% / 3 - 0.4rem);
  height: 100px;
  border-radius: ${(p) => p.theme.border.radius};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  background: ${(p) => p.theme.color.background};
  transition: 0.5s;
  ${(p) => p.full && 'width: 100%;'}
  &:hover {
    opacity: 0.6;
  }
  ${isMobile && `
      width: 100%;
    `
  }
`

export const Title = styled.h3`
  color: ${(p) => p.theme.color.primary.text};
  font-size: ${(p) => p.theme.font.default};
`

export const Text = styled.p`
  color: ${(p) => p.theme.color.secondary.text};
  font-size: ${(p) => p.theme.font.small};
`

export const Icon = styled.img``

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.item};
  align-items: flex-start;
`

export const Wrapper = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing.item};
`

export const CardUser = styled.div`
  height: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacing.item};
  align-items: center;
  background: ${(p) => p.theme.color.primary.color};
  padding: ${(p) => p.theme.spacing.item};
`
export const UserIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`
export const UserText = styled.p`
  font-size: ${(p) => p.theme.font.small};
  color: ${(p) => p.theme.color.primary.text};
`
