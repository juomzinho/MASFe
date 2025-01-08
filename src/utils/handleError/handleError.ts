import { NotificationStatus } from "../../store/notifications"

interface Props {
    code: string,
    message: string,
    setNotifications: (value: any) => void,
    navigate: any
}

export const handleError = async ({code, message, setNotifications, navigate}: Props) => {
    switch(code){
        case "CRT-03":
            setNotifications({status: NotificationStatus.Warning, text: message})
            break
        case "ERR-02":
            setNotifications({status: NotificationStatus.Warning, text: message})
            await localStorage.removeItem("isLogged")
            navigate('/', {
                replace: true
            })
            break
        default:
            setNotifications({status: NotificationStatus.Error, text: message})
            break
    }
    return

}