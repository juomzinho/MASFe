import { useQuery } from "react-query"
import fetchPersona from "../services/fetchPersona"

export const usePersonas = () => {
    const {isLoading, data} = useQuery({
        queryFn: fetchPersona,
        queryKey: ['personas'],
        onSuccess: (r) => {
            console.log(r)

        }
    })

    return {data: data?.data??[], isLoading }
}