import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../utils/theme/theme'
import { useThemeStore } from '../store/theme'
import { GlobalStyles } from '../GlobalStyle'
import { useEffect } from 'react'

const router = createBrowserRouter([{ path: '/', element: <Dashboard /> }])

const Root = () => {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    const getCurrentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(getCurrentTheme ? 'dark' : 'light')
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default Root
