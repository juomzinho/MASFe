import * as Styles from './Styles'

interface Props {
  title: string
  action: () => void
  disabled?: boolean
  color?: string
  width?: string | number
}

const ButtonWithoutBg = ({ action, title, disabled, color, width }: Props) => {
  return (
    <Styles.Button color={color} onClick={() => action()} disabled={disabled} width={width}>
      {title}
    </Styles.Button>
  )
}

export default ButtonWithoutBg
