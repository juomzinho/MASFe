import LogoDark from '../../assets/icons/masfe-dark.svg'
import LogoLight from '../../assets/icons/masfe-light.svg'
import { useThemeStore } from '../../store/theme'

const SidebarHeader = () => {
  const { theme } = useThemeStore()
  return <img src={theme === 'light' ? LogoLight : LogoDark} style={{ width: '200px' }} />
}

export default SidebarHeader
