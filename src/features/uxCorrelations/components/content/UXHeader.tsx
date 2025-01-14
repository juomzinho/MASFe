import Search from '../../../../components/search/Search'
import { ContentHeader, ContentHeaderButtonWrapper } from '../../../../layouts/content/Index'
import Title from '../../../../components/texts/title/Title'
import ModalUX from '../modalUX/ModalUX'
import { useState } from 'react'
import Button from '../../../../components/buttons/button/Button'

interface Props {
  handleFilter: (value: string) => void
  searchTerm: string
}

const UXHeader = ({ handleFilter, searchTerm }: Props) => {
  const [modalUX, toggleUX] = useState(false)

  return (
    <ContentHeader>
      <Title title="UX Correlations" />
      <ContentHeaderButtonWrapper>
        <Search handleFilter={handleFilter} searchTerm={searchTerm} />
        <Button title="Adicionar" color="blue" action={() => toggleUX(true)} />
      </ContentHeaderButtonWrapper>
      {modalUX && <ModalUX close={toggleUX} />}
    </ContentHeader>
  )
}

export default UXHeader
