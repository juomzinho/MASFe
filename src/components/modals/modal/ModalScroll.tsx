import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
}

const ModalScroll = ({ children }: Props) => {
  return <Styles.Scroll>{children}</Styles.Scroll>
}

export default ModalScroll
