import * as Styles from './Styles'

interface Props {
  title: string
}

const ButtonCardTitle = ({ title }: Props) => {
  return <Styles.Title>{title}</Styles.Title>
}

export default ButtonCardTitle
