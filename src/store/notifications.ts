import {create} from 'zustand'
import generateId from '../utils/generateId/generateId'

interface Props {
    id?: string,
    title?: string,
    text?: string,
    status: number
}

interface StoreProps {
    notifications: Props[],
    setNotifications: (value: Props) => void
    removeNotification: (id: string) => void
}

export enum NotificationStatus{
    Check = 1,
    Warning,
    Error
}

export const useNotificationStore = create<StoreProps>((set) => ({
    notifications: [],
    setNotifications: (value: Props) => set(old => {
        const id = generateId()
        setTimeout(()=>{
            old.removeNotification(id)
        }, 5000)
        return {notifications: [...old.notifications, {...value, id}]}
    }) ,
    removeNotification: (id: string) => {
        set(old => {
            const idx = old.notifications.findIndex(item => item.id === id)
            console.log(idx, old.notifications)
            return {notifications: [...old.notifications.slice(0, idx), ...old.notifications.slice(idx+1)]}
        })
    }
}))