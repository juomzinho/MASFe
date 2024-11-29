import * as Styles from './Styles'

interface Props {
  icon: string
  action: () => void
  color: string
}

const SquareButton = ({ action, color, icon }: Props) => {
  return (
    <Styles.Button onClick={() => action()} color={color}>
      <Styles.Icon src={icon} />
    </Styles.Button>
  )
}

export default SquareButton
