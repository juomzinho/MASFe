import Search from '../../../../components/search/Search'
import SquareButton from '../../../../components/buttons/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper } from '../../../../layouts/content/Index'
import { useThemeStore } from '../../../../store/theme'
import { Icons } from '../../../../utils/defines/icons'
import Title from '../../../../components/texts/title/Title'
import ModalUX from '../modalUX/ModalUX'
import { useState } from 'react'

const UXHeader = () => {
  const { theme } = useThemeStore()
  const [modalUX, toggleUX] = useState(false)

  return (
    <ContentHeader>
      <Title title="UX Correlations" />
      <ContentHeaderButtonWrapper>
        <Search />
        <SquareButton icon={Icons[theme].filter} color="default" action={() => {}} />
        <SquareButton icon={Icons[theme].create} color="default" action={() => toggleUX(true)} />
      </ContentHeaderButtonWrapper>
      {modalUX && <ModalUX close={toggleUX} />}
    </ContentHeader>
  )
}

export default UXHeader
