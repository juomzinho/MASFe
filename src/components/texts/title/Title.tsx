import * as Styles from './Styles'

interface Props {
  title: string
  size?: 'small' | 'default' | 'large'
}

const Title = ({ title, size = 'large' }: Props) => {
  return <Styles.Title size={size}>{title}</Styles.Title>
}

export default Title
