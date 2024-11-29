import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
}

const ButtoColumnWrapper = ({ children }: Props) => {
  return <Styles.ColumnWrapper>{children}</Styles.ColumnWrapper>
}

export default ButtoColumnWrapper
