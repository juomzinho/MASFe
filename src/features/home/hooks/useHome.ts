import { useQuery } from "react-query"
import fetchDashboard from "../services/fetchDashboard"

export const useHome = () => {
    const {data, isLoading, isFetching} = useQuery({
        queryFn: fetchDashboard,
        queryKey: ["dashboard"]
    })

    return {data: data?.data.content??[], isLoading: isLoading || isFetching}
}