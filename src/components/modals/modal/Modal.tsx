import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
  loading?: boolean
}

const Modal = ({ children, loading }: Props) => {
  return (
    <Styles.Container>
      <Styles.Content>{loading ? <p>Carregando</p> : children}</Styles.Content>
    </Styles.Container>
  )
}

export default Modal