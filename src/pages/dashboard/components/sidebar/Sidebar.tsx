import Sidebar, { SidebarHeader, SidebarItem, SidebarMenuWrapper, SidebarUserMenu } from '../../../../layouts/sidebar/Index'

const DashboardSidebar = () => {
  return (
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
  )
}

export default DashboardSidebar
