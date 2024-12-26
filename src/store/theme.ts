import {create} from 'zustand'

interface StoreProps {
    theme: 'light' | 'dark',
    setTheme: (value: 'light' | 'dark') => void
}

export const useThemeStore = create<StoreProps>()(
    (set) => ({
        theme: 'light',
        setTheme: (value: 'light' | 'dark') => set(() => {
            localStorage.setItem('theme-storage', value)
            return {theme: value}
        })
    }),
)