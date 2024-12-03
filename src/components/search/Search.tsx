import { useThemeStore } from '../../store/theme'
import { Icons } from '../../utils/defines/icons'
import * as Styles from './Styles'

const Search = () => {
  const { theme } = useThemeStore()
  return (
    <Styles.Content>
      <Styles.Icon src={Icons[theme].search} />
      <Styles.SearchInput active placeholder="Buscar" />
    </Styles.Content>
  )
}

export default Search
