import { useState } from 'react'
import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'
import ModalVerb from '../modalVerb/ModalVerb'

const VerbsHeader = () => {
  const [modalVerb, toggleVerb] = useState(false)

  return (
    <ContentHeader>
      <ContentHeaderTitle title="Verbos" />
      <ContentHeaderButtonWrapper>
        <SquareButton icon="" color="default" action={() => {}} />
        <SquareButton icon="" color="blue" action={() => toggleVerb(true)} />
      </ContentHeaderButtonWrapper>
      {modalVerb && <ModalVerb close={toggleVerb} />}
    </ContentHeader>
  )
}

export default VerbsHeader
