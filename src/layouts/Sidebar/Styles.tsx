import styled from 'styled-components'

export const Content = styled.aside`
  height: 100%;
  width: 220px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.itemGap};
`

export const Item = styled.button<{ active: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
  border: none;
  padding: 5px;
  background: none;
  align-items: center;
  gap: 10px;
  transition: ${(p) => p.theme.transition.time};
  border-radius: 6px;
  ${(p) =>
    !p.active &&
    `&:hover {
    background: ${p.theme.color.primary.color};
  }`}
`

export const Icon = styled.div<{ active: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: ${(p) => (p.active ? p.theme.defaultColors.gradient : p.theme.color.secondary.text)};
`

export const ItemTitle = styled.h3<{ active: boolean }>`
  font-size: ${(p) => p.theme.font.default};
  color: ${(p) => (p.active ? p.theme.color.primary.text : p.theme.color.secondary.text)};
  width: calc(100% - 45px);
  text-align: left;
`
