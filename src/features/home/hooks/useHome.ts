import { useQuery } from "react-query"
import fetchDashboard from "../services/fetchDashboard"
import { handleError } from "../../../utils/handleError/handleError"
import { useNotificationStore } from "../../../store/notifications"
import { useNavigate } from "react-router-dom"

export const useHome = () => {
    const {setNotifications} = useNotificationStore()
    const navigate = useNavigate()

    const {data, isLoading, isFetching} = useQuery({
        queryFn: fetchDashboard,
        queryKey: ["dashboard"],
        onError: async (e: any) => {
            navigate('/')
            const {code, message} = e.response.data
            await handleError({code, message, setNotifications, navigate})
        }
    })

    return {data: data?.data.content??[], isLoading: isLoading || isFetching}
}