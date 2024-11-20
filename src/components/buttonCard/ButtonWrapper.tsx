import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
}

const ButtonWrapper = ({ children }: Props) => {
  return <Styles.Wrapper>{children}</Styles.Wrapper>
}

export default ButtonWrapper
