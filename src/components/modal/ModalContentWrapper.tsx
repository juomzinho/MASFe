import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
}

const ModalContentWrapper = ({ children }: Props) => {
  return <Styles.ContentWrapper>{children}</Styles.ContentWrapper>
}

export default ModalContentWrapper
