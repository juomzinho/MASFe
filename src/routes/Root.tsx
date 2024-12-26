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
      cacheTime: 2000,
      refetchInterval: 10000,
    },
  },
})

const Root = () => {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    const getCurrentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(getCurrentTheme ? 'dark' : 'light')
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
