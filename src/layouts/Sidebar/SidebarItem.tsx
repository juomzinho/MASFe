import * as Styles from './Styles'

interface Props {
  title: string
  icon?: string
}

const SidebarItem = ({ title }: Props) => {
  return (
    <Styles.Item active>
      <Styles.Icon active />
      <Styles.ItemTitle active>{title}</Styles.ItemTitle>
    </Styles.Item>
  )
}

export default SidebarItem
