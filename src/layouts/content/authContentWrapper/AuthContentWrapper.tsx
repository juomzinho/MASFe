import { ReactNode } from 'react'
import * as Styles from './Styles'
interface Props {
  children: ReactNode
}

const AuthContentWrapper = ({ children }: Props) => {
  return (
    <Styles.Container>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  )
}

export default AuthContentWrapper
