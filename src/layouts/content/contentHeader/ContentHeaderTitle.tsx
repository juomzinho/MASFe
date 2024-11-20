import * as Styles from './Styles'

interface Props {
  title: string
}

const ContentHeaderTitle = ({ title }: Props) => {
  return <Styles.Title>{title}</Styles.Title>
}

export default ContentHeaderTitle
