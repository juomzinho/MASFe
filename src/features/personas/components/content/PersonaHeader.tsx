import { useState } from 'react'
import SquareButton from '../../../../components/buttons/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper } from '../../../../layouts/content/Index'
import ModalPersona from '../modalPersona/ModalPersona'
import { useThemeStore } from '../../../../store/theme'
import { Icons } from '../../../../utils/defines/icons'
import Search from '../../../../components/search/Search'
import Title from '../../../../components/texts/title/Title'

interface Props {
  handleFilter: (value: string) => void
  searchTerm: string
}

const PersonaHeader = ({ handleFilter, searchTerm }: Props) => {
  const [modalPersona, togglePersona] = useState(false)
  const { theme } = useThemeStore()

  return (
    <ContentHeader>
      <Title title="Personas" />
      <ContentHeaderButtonWrapper>
        <Search handleFilter={handleFilter} searchTerm={searchTerm} />
        <SquareButton icon={Icons[theme].create} color="default" action={() => togglePersona(true)} />
      </ContentHeaderButtonWrapper>
      {modalPersona && <ModalPersona close={togglePersona} />}
    </ContentHeader>
  )
}

export default PersonaHeader
