import { useState } from 'react'
import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'
import ModalVerb from '../modalVerb/ModalVerb'
import { useThemeStore } from '../../../../store/theme'
import { Icons } from '../../../../utils/defines/icons'
import Search from '../../../../components/search/Search'

const VerbsHeader = () => {
  const [modalVerb, toggleVerb] = useState(false)
  const { theme } = useThemeStore()

  return (
    <ContentHeader>
      <ContentHeaderTitle title="Verbos" />
      <ContentHeaderButtonWrapper>
        <Search />
        <SquareButton icon={Icons[theme].filter} color="default" action={() => {}} />
        <SquareButton icon={Icons[theme].create} color="default" action={() => toggleVerb(true)} />
      </ContentHeaderButtonWrapper>
      {modalVerb && <ModalVerb close={toggleVerb} />}
    </ContentHeader>
  )
}

export default VerbsHeader
