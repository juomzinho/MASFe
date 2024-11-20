import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'

const PersonaHeader = () => {
  return (
    <ContentHeader>
      <ContentHeaderTitle title="Personas" />
      <ContentHeaderButtonWrapper>
        <SquareButton icon="" color="red" action={() => {}} />
        <SquareButton icon="" color="blue" action={() => {}} />
      </ContentHeaderButtonWrapper>
    </ContentHeader>
  )
}

export default PersonaHeader
