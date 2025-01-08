import { useQuery } from "react-query"
import fetchPersona from "../services/fetchPersona"
import { useState } from "react"
import { PersonaSchema } from "./useFormPersona"
import { handleError } from "../../../utils/handleError/handleError"
import { useNotificationStore } from "../../../store/notifications"
import { useNavigate } from "react-router-dom"

export const usePersonas = () => {
    const [filtered, setFiltered] = useState<PersonaSchema[]>([])
    const [searchTerm, setTerm] = useState('')
    const {setNotifications} = useNotificationStore()
    const navigate = useNavigate()
    
    const {isLoading, data, isFetching} = useQuery({
        queryFn: fetchPersona,
        queryKey: ['personas'],
        onSuccess: (r) => {
            setFiltered(r.data.content)
        },
        onError: async (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
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