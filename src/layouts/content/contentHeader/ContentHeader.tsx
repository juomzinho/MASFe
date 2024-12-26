import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
}

const ContentHeader = ({ children }: Props) => {
  return <Styles.Header>{children}</Styles.Header>
}

export default ContentHeader
