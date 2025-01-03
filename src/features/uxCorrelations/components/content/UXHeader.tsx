import Search from '../../../../components/search/Search'
import SquareButton from '../../../../components/buttons/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper } from '../../../../layouts/content/Index'
import { useThemeStore } from '../../../../store/theme'
import { Icons } from '../../../../utils/defines/icons'
import Title from '../../../../components/texts/title/Title'
import ModalUX from '../modalUX/ModalUX'
import { useState } from 'react'

interface Props {
  handleFilter: (value: string) => void
  searchTerm: string
}

const UXHeader = ({ handleFilter, searchTerm }: Props) => {
  const { theme } = useThemeStore()
  const [modalUX, toggleUX] = useState(false)

  return (
    <ContentHeader>
      <Title title="UX Correlations" />
      <ContentHeaderButtonWrapper>
        <Search handleFilter={handleFilter} searchTerm={searchTerm} />
        <SquareButton icon={Icons[theme].create} color="default" action={() => toggleUX(true)} />
      </ContentHeaderButtonWrapper>
      {modalUX && <ModalUX close={toggleUX} />}
    </ContentHeader>
  )
}

export default UXHeader
