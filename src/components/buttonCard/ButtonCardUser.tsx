import * as Styles from './Styles'

interface Props {
  name: string
}

const ButtonCardUser = ({ name }: Props) => {
  return (
    <Styles.CardUser>
      <Styles.UserIcon />
      <Styles.UserText>{name}</Styles.UserText>
    </Styles.CardUser>
  )
}

export default ButtonCardUser
