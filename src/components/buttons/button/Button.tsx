import * as Styles from './Styles'

interface Props {
  title: string
  action: () => void
  disabled?: boolean
  color?: string
  width?: string | number
  type?: 'submit' | 'button' | 'reset'
}

const Button = ({ action, title, disabled, color, width, type = 'button' }: Props) => {
  return (
    <Styles.Button color={color} onClick={() => action()} disabled={disabled} width={width} type={type}>
      {title}
    </Styles.Button>
  )
}

export default Button
