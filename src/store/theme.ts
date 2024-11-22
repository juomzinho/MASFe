import {create} from 'zustand'
import { createJSONStorage, persist, devtools } from 'zustand/middleware'

interface StoreProps {
    theme: 'light' | 'dark',
    setTheme: (value: 'light' | 'dark') => void
}

export const useThemeStore = create<StoreProps>()(devtools(
    persist(
        (set) => ({
            theme: 'light',
            setTheme: (value: 'light' | 'dark') => set(() => ({theme: value}))
        }),
        {
            name: 'theme-storage',
            storage: createJSONStorage(()=>sessionStorage),
        })
    )
)