import { ReactNode } from 'react'
import * as Styles from './Styles'
import Notification from '../../components/notification/Notification'

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <Styles.Container>
      {children}
      <Notification />
    </Styles.Container>
  )
}

export default Container
