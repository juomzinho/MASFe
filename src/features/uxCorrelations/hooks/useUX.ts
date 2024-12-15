import { useQuery } from "react-query"
import fetchUXs from "../services/fetchUXs"

export const useUX = () => {
    const {isLoading, data} = useQuery({
        queryFn: fetchUXs,
        queryKey: ['verbs'],
        onSuccess: (r) => {
            console.log(r)

        }
    })

    return {data: data?.data??[], isLoading }
}