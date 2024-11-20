import { useState } from 'react'
import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'
import ModalPersona from '../modalPersona/ModalPersona'

const PersonaHeader = () => {
  const [modalPersona, togglePersona] = useState(false)

  return (
    <ContentHeader>
      <ContentHeaderTitle title="Personas" />
      <ContentHeaderButtonWrapper>
        <SquareButton icon="" color="red" action={() => {}} />
        <SquareButton icon="" color="blue" action={() => togglePersona(true)} />
      </ContentHeaderButtonWrapper>
      {modalPersona && <ModalPersona close={togglePersona} />}
    </ContentHeader>
  )
}

export default PersonaHeader
