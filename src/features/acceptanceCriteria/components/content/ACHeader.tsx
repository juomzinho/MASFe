import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'
import CreateIcon from '../../../../assets/icons/create-icon.svg'
import FilterIcon from '../../../../assets/icons/filter.svg'
import { useState } from 'react'
import ModalAC from '../modalAC/ModaAC'

const ACHeader = () => {
  const [modalAC, toggleAC] = useState(false)
  return (
    <ContentHeader>
      <ContentHeaderTitle title="Critérios de aceitação" />
      <ContentHeaderButtonWrapper>
        <SquareButton icon={FilterIcon} color="default" action={() => {}} />
        <SquareButton icon={CreateIcon} color="blue" action={() => toggleAC(true)} />
      </ContentHeaderButtonWrapper>
      {modalAC && <ModalAC close={toggleAC} />}
    </ContentHeader>
  )
}

export default ACHeader
