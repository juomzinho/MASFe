import {create} from 'zustand'

interface StoreProps {
    token: string,
    setToken: (value: string) => void
}

export const useAuthStore = create<StoreProps>()(
    (set) => ({
        token: '',
        setToken: (value: string) => set(() => {
            localStorage.setItem('token', value)
            return {token: value}
        })
    }),
)