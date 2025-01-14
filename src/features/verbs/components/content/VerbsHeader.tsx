import { useState } from 'react'
import { ContentHeader, ContentHeaderButtonWrapper } from '../../../../layouts/content/Index'
import ModalVerb from '../modalVerb/ModalVerb'
import Search from '../../../../components/search/Search'
import Title from '../../../../components/texts/title/Title'
import Button from '../../../../components/buttons/button/Button'
interface Props {
  handleFilter: (value: string) => void
  searchTerm: string
}

const VerbsHeader = ({ handleFilter, searchTerm }: Props) => {
  const [modalVerb, toggleVerb] = useState(false)

  return (
    <ContentHeader>
      <Title title="Verbos" />
      <ContentHeaderButtonWrapper>
        <Search handleFilter={handleFilter} searchTerm={searchTerm} />
        <Button title="Adicionar" color="blue" action={() => toggleVerb(true)} />
      </ContentHeaderButtonWrapper>
      {modalVerb && <ModalVerb close={toggleVerb} />}
    </ContentHeader>
  )
}

export default VerbsHeader
