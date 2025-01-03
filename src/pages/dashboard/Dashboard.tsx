import Container from '../../layouts/container/Container'
import DashboardSidebar from './components/sidebar/Sidebar'
import { ContentEnum, useContentStore } from '../../store/content'
import UXCorrelations from '../../features/uxCorrelations/components/content/UXCorrelations'
import Verbs from '../../features/verbs/components/content/Verbs'
import Personas from '../../features/personas/components/content/Personas'
import Home from '../../features/home/components/home/Home'

const Dashboard = () => {
  const { content } = useContentStore()

  const getContent = () => {
    console.log(content)
    switch (content) {
      case ContentEnum['Inicio']:
        return <Home />
      case ContentEnum['UX Correlations']:
        return <UXCorrelations />
      case ContentEnum['Verbos']:
        return <Verbs />
      case ContentEnum['Personas']:
        return <Personas />
    }
  }

  return (
    <Container>
      <DashboardSidebar />
      {getContent()}
    </Container>
  )
}

export default Dashboard
