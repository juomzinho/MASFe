import Loader from '../../../../components/loader/Loader'
import Content from '../../../../layouts/content/Index'
import { useVerbs } from '../../hooks/useVerbs'
import VerbsContent from './VerbsContent'
import VerbsHeader from './VerbsHeader'

const Verbs = () => {
  const { data, isLoading, handleFilter, searchTerm } = useVerbs()
  return (
    <Content>
      <VerbsHeader handleFilter={handleFilter} searchTerm={searchTerm} />
      <VerbsContent data={data} />
      {isLoading && <Loader />}
    </Content>
  )
}

export default Verbs
