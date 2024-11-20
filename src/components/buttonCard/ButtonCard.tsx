import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
  action: () => void
}

const ButtonCard = ({ children, action }: Props) => {
  return <Styles.Button onClick={() => action()}>{children}</Styles.Button>
}

export default ButtonCard
