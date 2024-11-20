import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
}

const ModalFooter = ({ children }: Props) => {
  return <Styles.Footer>{children}</Styles.Footer>
}

export default ModalFooter
