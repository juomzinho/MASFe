import { useState } from 'react'
import { ContentHeader, ContentHeaderButtonWrapper } from '../../../../layouts/content/Index'
import ModalPersona from '../modalPersona/ModalPersona'
import Search from '../../../../components/search/Search'
import Title from '../../../../components/texts/title/Title'
import Button from '../../../../components/buttons/button/Button'

interface Props {
  handleFilter: (value: string) => void
  searchTerm: string
}

const PersonaHeader = ({ handleFilter, searchTerm }: Props) => {
  const [modalPersona, togglePersona] = useState(false)

  return (
    <ContentHeader>
      <Title title="Personas" />
      <ContentHeaderButtonWrapper>
        <Search handleFilter={handleFilter} searchTerm={searchTerm} />
        <Button title="Adicionar" color="blue" action={() => togglePersona(true)} />
      </ContentHeaderButtonWrapper>
      {modalPersona && <ModalPersona close={togglePersona} />}
    </ContentHeader>
  )
}

export default PersonaHeader
