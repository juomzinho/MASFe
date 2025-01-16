import * as Styles from './Styles'

interface Props {
  text: string
  size?: 'small' | 'default' | 'large'
}

const Text = ({ text, size }: Props) => {
  return <Styles.Text size={size}>{text}</Styles.Text>
}

export default Text
