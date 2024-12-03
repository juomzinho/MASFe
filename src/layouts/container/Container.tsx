import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return <Styles.Container>{children}</Styles.Container>
}

export default Container
