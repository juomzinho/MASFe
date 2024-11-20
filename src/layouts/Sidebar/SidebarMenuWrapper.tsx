import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
}

const SidebarMenuWrapper = ({ children }: Props) => {
  return <Styles.MenuWrapper>{children}</Styles.MenuWrapper>
}

export default SidebarMenuWrapper
