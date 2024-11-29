import * as Styles from './Styles'

interface Props {
  title: string
}

const Title = ({ title }: Props) => {
  return <Styles.Title>{title}</Styles.Title>
}

export default Title
