import { useThemeStore } from '../../store/theme'
import { Icons } from '../../utils/defines/icons'
import * as Styles from './Styles'

interface Props {
  handleFilter: (value: string) => void
  searchTerm: string
}

const Search = ({ handleFilter, searchTerm }: Props) => {
  const { theme } = useThemeStore()
  return (
    <Styles.Content>
      <Styles.Icon src={Icons[theme].search} />
      <Styles.SearchInput
        active
        placeholder="Buscar"
        onChange={(e) => handleFilter(e.target.value)}
        value={searchTerm}
      />
    </Styles.Content>
  )
}

export default Search
