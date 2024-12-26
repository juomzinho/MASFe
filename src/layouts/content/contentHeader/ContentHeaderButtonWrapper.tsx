import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
}

const ContentHeaderButtonWrapper = ({ children }: Props) => {
  return <Styles.ButtonsWrapper>{children}</Styles.ButtonsWrapper>
}

export default ContentHeaderButtonWrapper
