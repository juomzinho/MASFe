import { ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  gridArea: string
  children?: ReactNode
}

const Card = ({ gridArea, children }: Props) => {
  return <Styles.Card gridArea={gridArea}>{children}</Styles.Card>
}

export default Card
