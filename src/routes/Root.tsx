import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../utils/theme/theme'
import { useThemeStore } from '../store/theme'

const router = createBrowserRouter([{ path: '/', element: <Dashboard /> }])

const Root = () => {
  const { theme } = useThemeStore()
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default Root
