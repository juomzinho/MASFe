import { useState } from 'react'
import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'
import ModalPersona from '../modalPersona/ModalPersona'
import { useThemeStore } from '../../../../store/theme'
import { Icons } from '../../../../utils/defines/icons'
import Search from '../../../../components/search/Search'

const PersonaHeader = () => {
  const [modalPersona, togglePersona] = useState(false)
  const { theme } = useThemeStore()

  return (
    <ContentHeader>
      <ContentHeaderTitle title="Personas" />
      <ContentHeaderButtonWrapper>
        <Search />
        <SquareButton icon={Icons[theme].filter} color="default" action={() => {}} />
        <SquareButton icon={Icons[theme].create} color="default" action={() => togglePersona(true)} />
      </ContentHeaderButtonWrapper>
      {modalPersona && <ModalPersona close={togglePersona} />}
    </ContentHeader>
  )
}

export default PersonaHeader
