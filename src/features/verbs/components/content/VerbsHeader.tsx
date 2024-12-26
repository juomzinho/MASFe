import { useState } from 'react'
import SquareButton from '../../../../components/buttons/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper } from '../../../../layouts/content/Index'
import ModalVerb from '../modalVerb/ModalVerb'
import { useThemeStore } from '../../../../store/theme'
import { Icons } from '../../../../utils/defines/icons'
import Search from '../../../../components/search/Search'
import Title from '../../../../components/texts/title/Title'
interface Props {
  handleFilter: (value: string) => void
  searchTerm: string
}

const VerbsHeader = ({ handleFilter, searchTerm }: Props) => {
  const [modalVerb, toggleVerb] = useState(false)
  const { theme } = useThemeStore()

  return (
    <ContentHeader>
      <Title title="Verbos" />
      <ContentHeaderButtonWrapper>
        <Search handleFilter={handleFilter} searchTerm={searchTerm} />
        <SquareButton icon={Icons[theme].create} color="default" action={() => toggleVerb(true)} />
      </ContentHeaderButtonWrapper>
      {modalVerb && <ModalVerb close={toggleVerb} />}
    </ContentHeader>
  )
}

export default VerbsHeader
