import { useThemeStore } from '../../store/theme'
import * as Styles from './Styles'
import SunIcon from '../../assets/icons/sun.svg'
import MoonIcon from '../../assets/icons/moon.svg'

const SidebarUserMenu = () => {
  const { setTheme, theme } = useThemeStore()
  return (
    <div>
      <Styles.Card onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Styles.Icon src={theme === 'light' ? SunIcon : MoonIcon} active />
        <Styles.Text>Modo {theme === 'light' ? 'claro' : 'escuro'} </Styles.Text>
      </Styles.Card>
    </div>
  )
}

export default SidebarUserMenu
