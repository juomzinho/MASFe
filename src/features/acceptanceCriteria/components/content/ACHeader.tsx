import SquareButton from '../../../../components/squareButton/SquareButton'
import { ContentHeader, ContentHeaderButtonWrapper, ContentHeaderTitle } from '../../../../layouts/content/Index'

const ACHeader = () => {
  return (
    <ContentHeader>
      <ContentHeaderTitle title="Critérios de aceitação" />
      <ContentHeaderButtonWrapper>
        <SquareButton icon="" color="red" action={() => {}} />
        <SquareButton icon="" color="blue" action={() => {}} />
      </ContentHeaderButtonWrapper>
    </ContentHeader>
  )
}

export default ACHeader
