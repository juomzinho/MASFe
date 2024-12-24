import { useQuery } from "react-query"
import fetchPersona from "../services/fetchPersona"
import { useState } from "react"
import { PersonaSchema } from "./useFormPersona"

export const usePersonas = () => {
    const [filtered, setFiltered] = useState<PersonaSchema[]>([])
    const [searchTerm, setTerm] = useState('')
    const {isLoading, data, isFetching} = useQuery({
        queryFn: fetchPersona,
        queryKey: ['personas'],
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

        setFiltered(data?.data.content.filter((item: PersonaSchema) => item.name?.toUpperCase().includes(value.toUpperCase())))
    }

    return {data: filtered, isLoading: isLoading || isFetching, searchTerm, setTerm, handleFilter }
}