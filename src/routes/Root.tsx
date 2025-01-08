import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../utils/theme/theme'
import { useThemeStore } from '../store/theme'
import { GlobalStyles } from '../GlobalStyle'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Authentication from '../pages/authentication/Authentication'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
const router = createBrowserRouter([
  { path: '/', element: <Authentication /> },
  { path: '/dashboard', element: <Dashboard /> },
])
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 100000,
    },
  },
})

const Root = () => {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    const themeStorage = localStorage.getItem('theme-storage')
    if (themeStorage) {
      const get = (): 'dark' | 'light' => {
        if (themeStorage === 'light') return 'light'
        return 'dark'
      }
      setTheme(get())
    } else {
      const getCurrentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(getCurrentTheme ? 'dark' : 'light')
      localStorage.setItem('theme-storage', getCurrentTheme ? 'dark' : 'light')
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  )
}

export default Root
