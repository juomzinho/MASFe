import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'

const UXHeader = () => {
  return (
    <ContentHeader>
      <ContentHeaderTitle title="UX Correlations" />
      <ContentHeaderButtonWrapper>
        <SquareButton icon="" color="red" action={() => {}} />
        <SquareButton icon="" color="blue" action={() => {}} />
      </ContentHeaderButtonWrapper>
    </ContentHeader>
  )
}

export default UXHeader
