import * as Styles from './Styles'

interface Props {
  gridArea: string
}

const ShortcutItem = ({ gridArea }: Props) => {
  return <Styles.Shortcut gridArea={gridArea}></Styles.Shortcut>
}

export default ShortcutItem
