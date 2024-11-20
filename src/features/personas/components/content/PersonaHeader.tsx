import { useState } from 'react'
import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'
import ModalPersona from '../modalPersona/ModalPersona'
import CreateIcon from '../../../../assets/icons/create-icon.svg'
import FilterIcon from '../../../../assets/icons/filter.svg'

const PersonaHeader = () => {
  const [modalPersona, togglePersona] = useState(false)

  return (
    <ContentHeader>
      <ContentHeaderTitle title="Personas" />
      <ContentHeaderButtonWrapper>
        <SquareButton icon={FilterIcon} color="default" action={() => {}} />
        <SquareButton icon={CreateIcon} color="blue" action={() => togglePersona(true)} />
      </ContentHeaderButtonWrapper>
      {modalPersona && <ModalPersona close={togglePersona} />}
    </ContentHeader>
  )
}

export default PersonaHeader
