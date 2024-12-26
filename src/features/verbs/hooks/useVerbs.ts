import { useQuery } from "react-query"
import fetchVerbs from "../services/fetchVerbs"
import { useState } from "react"
import { VerbSchema } from "./useFormVerb"
import { handleError } from "../../../utils/handleError/handleError"
import { useNotificationStore } from "../../../store/notifications"
import { useNavigate } from "react-router-dom"

export const useVerbs = () => {
    const [filtered, setFiltered] = useState<VerbSchema[]>([])
    const [searchTerm, setTerm] = useState('')
    const {setNotifications} = useNotificationStore()
    const navigate = useNavigate()

    const {isLoading, data, isFetching} = useQuery({
        queryFn: fetchVerbs,
        queryKey: ['verbs'],
        onSuccess: (r) => {
            setFiltered(r.data.content)
        },
        onError: (e: any) => {
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

        setFiltered(data?.data.content.filter((item: VerbSchema) => item.verb?.toUpperCase().includes(value.toUpperCase())))
    }

    return {data: filtered, isLoading: isLoading || isFetching, handleFilter, searchTerm }
}