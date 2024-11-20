import { useQuery } from "react-query"
import fetchVerbs from "../services/fetchVerbs"

export const useVerbs = () => {
    const {isLoading, data} = useQuery({
        queryFn: fetchVerbs,
        queryKey: ['verbs'],
        onSuccess: (r) => {
            console.log(r)

        }
    })

    return {data: data?.data??[], isLoading }
}