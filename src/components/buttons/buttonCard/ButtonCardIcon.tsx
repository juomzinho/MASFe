import * as Styles from './Styles'

interface Props {
  icon: string
}

const ButtonCardIcon = ({ icon }: Props) => {
  return <Styles.Icon src={icon} />
}

export default ButtonCardIcon
