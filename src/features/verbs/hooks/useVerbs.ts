import { useQuery } from "react-query"
import fetchVerbs from "../services/fetchVerbs"
import { useState } from "react"
import { VerbSchema } from "./useFormVerb"

export const useVerbs = () => {
    
    const [filtered, setFiltered] = useState<VerbSchema[]>([])
    const [searchTerm, setTerm] = useState('')

    const {isLoading, data, isFetching} = useQuery({
        queryFn: fetchVerbs,
        queryKey: ['verbs'],
        onSuccess: (r) => {
            setFiltered(r.data.content)

        }
    })

    const handleFilter = (value: string) => {
        setTerm(value)
        if(value.length === 0){
            setFiltered(data?.data.content)
            return
        }

        setFiltered(data?.data.content.filter((item: VerbSchema) => item.verb?.toUpperCase().includes(value.toUpperCase())))
    }

    return {data: filtered, isLoading: isLoading || isFetching, handleFilter, searchTerm }
}