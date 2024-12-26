import { forwardRef, ReactNode } from 'react'
import * as Styles from './Styles'

interface Props {
  gridArea: string
  children?: ReactNode
}

const Card = forwardRef<any, Props>(({ gridArea, children }, ref) => {
  return <Styles.Card gridArea={gridArea} ref={ref}>{children}</Styles.Card>
})

export default Card
