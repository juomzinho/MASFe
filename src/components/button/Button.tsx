import * as Styles from './Styles'

interface Props {
  title: string
  action: () => void
  disabled?: boolean
  color?: string
}

const Button = ({ action, title, disabled, color }: Props) => {
  return (
    <Styles.Button color={color} onClick={() => action()} disabled={disabled}>
      {title}
    </Styles.Button>
  )
}

export default Button
