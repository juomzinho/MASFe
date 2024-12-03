import { useThemeStore } from '../../store/theme'
import * as Styles from './Styles'
import SunIcon from '../../assets/icons/sun.svg'
import MoonIcon from '../../assets/icons/moon.svg'
import { useMutation } from 'react-query'
import logout from '../../services/logout'
import Loader from '../../components/loader/Loader'
import { useNavigate } from 'react-router-dom'

const SidebarUserMenu = () => {
  const navigate = useNavigate()
  const { setTheme, theme } = useThemeStore()
  const handleLogout = useMutation({
    mutationFn: logout,
    mutationKey: ['logout'],
    onSuccess: () => {
      navigate('/', { replace: true })
    },
  })

  return (
    <div>
      <Styles.Card onClick={() => handleLogout.mutate()}>
        {/* <Styles.Icon src={theme === 'light' ? SunIcon : MoonIcon} active /> */}
        <Styles.Text>Sair </Styles.Text>
      </Styles.Card>
      <Styles.Card onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Styles.Icon src={theme === 'light' ? SunIcon : MoonIcon} active />
        <Styles.Text>Modo {theme === 'light' ? 'claro' : 'escuro'} </Styles.Text>
      </Styles.Card>
      {handleLogout.isLoading && <Loader />}
    </div>
  )
}

export default SidebarUserMenu
