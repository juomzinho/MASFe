import { useQuery } from "react-query"
import fetchAC from "../services/fetchAC"

export const useAC = () => {
    const {isLoading, data} = useQuery({
        queryFn: fetchAC,
        queryKey: ['AC'],
        onSuccess: (r) => {
            console.log(r)

        }
    })

    return {data: data?.data??[], isLoading }
}