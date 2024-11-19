import Container from '../../layouts/Container/Container'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import SidebarHeader from '../../layouts/Sidebar/SidebarHeader'
import SidebarMenuWrapper from '../../layouts/Sidebar/SidebarMenuWrapper'
import SidebarItem from '../../layouts/Sidebar/SidebarItem'
import Content from '../../layouts/Content/Content'
import SidebarUserMenu from '../../layouts/Sidebar/SidebarUserMenu'

// import { createContext } from "react";
const Dashboard = () => {
  return (
    <Container>
      <Sidebar>
        <SidebarHeader />
        <SidebarMenuWrapper>
          <SidebarItem title="Inicio" />
          <SidebarItem title="UX Correlations" />
          <SidebarItem title="Verbos" />
          <SidebarItem title="Critérios de Aceitação" />
          <SidebarItem title="Personas" />
        </SidebarMenuWrapper>
        <SidebarUserMenu />
      </Sidebar>
      <Content>
        <></>
      </Content>
    </Container>
  )
}

export default Dashboard
