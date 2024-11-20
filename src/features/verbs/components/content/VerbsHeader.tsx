import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'

const VerbsHeader = () => {
  return (
    <ContentHeader>
      <ContentHeaderTitle title="Verbos" />
      <ContentHeaderButtonWrapper>
        <SquareButton icon="" color="red" action={() => {}} />
        <SquareButton icon="" color="blue" action={() => {}} />
      </ContentHeaderButtonWrapper>
    </ContentHeader>
  )
}

export default VerbsHeader
