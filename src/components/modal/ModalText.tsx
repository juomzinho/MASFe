import * as Styles from './Styles'

interface Props {
  text: string
}

const ModalText = ({ text }: Props) => {
  return <Styles.Text>{text}</Styles.Text>
}

export default ModalText
