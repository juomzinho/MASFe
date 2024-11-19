import {create} from 'zustand'

interface StoreProps {
    theme: string,
    setTheme: (value: string) => void
}

export const useThemeStore = create<StoreProps>((set) => ({
    theme: 'light',
    setTheme: (value: string) => set(() => ({theme: value}))
}))