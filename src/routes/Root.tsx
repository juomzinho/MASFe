import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../utils/theme/theme'
import { useThemeStore } from '../store/theme'
import { GlobalStyles } from '../GlobalStyle'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const router = createBrowserRouter([{ path: '/', element: <Dashboard /> }])
const queryClient = new QueryClient()

const Root = () => {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    const getCurrentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(getCurrentTheme ? 'dark' : 'light')
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default Root
