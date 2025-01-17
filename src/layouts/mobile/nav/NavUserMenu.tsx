import * as Styles from './Styles'
import SunIcon from '../../../assets/icons/sun.svg'
import MoonIcon from '../../../assets/icons/moon.svg'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import logout from '../../../services/logout'
import { useThemeStore } from '../../../store/theme'
import Loader from '../../../components/loader/Loader'

const NavUserMenu = () => {
  const navigate = useNavigate()
  const { setTheme, theme } = useThemeStore()
  const handleLogout = useMutation({
    mutationFn: logout,
    mutationKey: ['logout'],
    onSuccess: () => {
      localStorage.removeItem('isLogged')
      navigate('/', { replace: true })
    },
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginTop: 50 }}>
      <Styles.Card onClick={() => handleLogout.mutate()}>
        {/* <Styles.Icon src={theme === 'light' ? SunIcon : MoonIcon} active /> */}
        <Styles.Text onClick={() => handleLogout.mutate()}>Sair </Styles.Text>
      </Styles.Card>
      <Styles.Card onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Styles.Icon src={theme === 'light' ? SunIcon : MoonIcon} active />
        <Styles.Text>Modo {theme === 'light' ? 'claro' : 'escuro'} </Styles.Text>
      </Styles.Card>
      {handleLogout.isLoading && <Loader />}
    </div>
  )
}

export default NavUserMenu
