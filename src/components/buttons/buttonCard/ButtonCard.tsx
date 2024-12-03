import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  children: ReactNode
  action: () => void
  full?: boolean
}

const ButtonCard = ({ children, action, full }: Props) => {
  return (
    <Styles.Button full={full} onClick={() => action()}>
      {children}
    </Styles.Button>
  )
}

export default ButtonCard
