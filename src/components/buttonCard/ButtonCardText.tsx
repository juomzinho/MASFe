import * as Styles from './Styles'

interface Props {
  text: string
}

const ButtonCardText = ({ text }: Props) => {
  return <Styles.Text>{text}</Styles.Text>
}

export default ButtonCardText
