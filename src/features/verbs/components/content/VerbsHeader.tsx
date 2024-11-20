import { useState } from 'react'
import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'
import ModalVerb from '../modalVerb/ModalVerb'
import CreateIcon from '../../../../assets/icons/create-icon.svg'
import FilterIcon from '../../../../assets/icons/filter.svg'

const VerbsHeader = () => {
  const [modalVerb, toggleVerb] = useState(false)

  return (
    <ContentHeader>
      <ContentHeaderTitle title="Verbos" />
      <ContentHeaderButtonWrapper>
        <SquareButton icon={FilterIcon} color="default" action={() => {}} />
        <SquareButton icon={CreateIcon} color="blue" action={() => toggleVerb(true)} />
      </ContentHeaderButtonWrapper>
      {modalVerb && <ModalVerb close={toggleVerb} />}
    </ContentHeader>
  )
}

export default VerbsHeader
