import Loader from '../../../../components/loader/Loader'
import Content from '../../../../layouts/content/Index'
import { usePersonas } from '../../hooks/usePersonas'
import ACContent from './PersonaContent'
import ACHeader from './PersonaHeader'

const Personas = () => {
  const { data, handleFilter, isLoading, searchTerm } = usePersonas()
  return (
    <Content>
      <ACHeader handleFilter={handleFilter} searchTerm={searchTerm} />
      <ACContent data={data} />
      {isLoading && <Loader />}
    </Content>
  )
}

export default Personas
