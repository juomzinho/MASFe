import Search from '../../../../components/search/Search'
import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'
import { useThemeStore } from '../../../../store/theme'
import { Icons } from '../../../../utils/defines/icons'

const UXHeader = () => {
  const { theme } = useThemeStore()

  return (
    <ContentHeader>
      <ContentHeaderTitle title="UX Correlations" />
      <ContentHeaderButtonWrapper>
        <Search />
        <SquareButton icon={Icons[theme].filter} color="default" action={() => {}} />
        <SquareButton icon={Icons[theme].create} color="default" action={() => {}} />
      </ContentHeaderButtonWrapper>
    </ContentHeader>
  )
}

export default UXHeader
