import styled from "styled-components";

export const Nav = styled.nav`
    margin-left: -25px;
    display: flex;
    width: 100%;
    height: 60px;
    position: fixed;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    margin-top: -20px;
    background: ${p => p.theme.color.background};
    z-index: 21;
`

export const Logo = styled.img`
    width: 40%;
    object-fit: contain;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${p => p.theme.color.background};
    z-index: 20;
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
  justify-content: center;
  gap: 10px;
  transition: ${(p) => p.theme.transition.time};
  border-radius: 6px;
  ${(p) =>
    !p.active &&
    `&:hover {
    background: ${p.theme.color.primary.color};
  }`}
`

export const Icon = styled.img<{ active: boolean }>`
  width: 25px;
  height: 25px;
  ${(p) => !p.active && 'opacity: 0.5'}
`

export const ItemTitle = styled.h3<{ active: boolean }>`
  font-size: ${(p) => p.theme.font.default};
  color: ${(p) => (p.active ? p.theme.color.primary.text : p.theme.color.secondary.text)};
  text-align: left;
  font-weight: ${(p) => (p.active ? 'normal' : '300')};
`

export const Card = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.spacing.item};
  align-items: center;
  padding: ${(p) => p.theme.spacing.item};
  cursor: pointer;
`

export const Text = styled.p`
  font-size: ${(p) => p.theme.font.meduim};
  color: ${(p) => p.theme.color.primary.text};
`
