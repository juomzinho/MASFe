import Loader from '../../../../components/loader/Loader'
import Content from '../../../../layouts/content/Index'
import { useUX } from '../../hooks/useUX'
import UXContent from './UXContent'
import UXHeader from './UXHeader'

const UXCorrelations = () => {
  const { data, isLoading, handleFilter, searchTerm } = useUX()
  return (
    <Content>
      <UXHeader handleFilter={handleFilter} searchTerm={searchTerm} />
      <UXContent data={data} />
      {isLoading && <Loader />}
    </Content>
  )
}

export default UXCorrelations
