import { useThemeStore } from '../../store/theme'

const SidebarUserMenu = () => {
  const { setTheme } = useThemeStore()
  return (
    <div>
      <button onClick={() => setTheme('light')}>light</button>
      <button onClick={() => setTheme('dark')}>dark</button>
    </div>
  )
}

export default SidebarUserMenu
