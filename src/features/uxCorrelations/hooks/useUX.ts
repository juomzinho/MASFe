import { useQuery } from "react-query"
import fetchUXs from "../services/fetchUXs"
import { useState } from "react"
import { UXProps } from "./useFormUX"
import { handleError } from "../../../utils/handleError/handleError"
import { useNotificationStore } from "../../../store/notifications"
import { useNavigate } from "react-router-dom"

export interface ResultUXProps {
    name: string
    persona: {
        name: string
        id: string
    }
    relationUXAC: {
        relation: string
        acceptanceCriteria: {criteria: string}[]
    }[]
    verb: {
        verb: string
    }
    description: string
}

export const useUX = () => {
    const [filtered, setFiltered] = useState<UXProps[]>([])
    const [searchTerm, setTerm] = useState('')
    const {setNotifications} = useNotificationStore()
    const navigate = useNavigate()
        

    const {isLoading, data, isFetching} = useQuery({
        queryFn: fetchUXs,
        queryKey: ['uxs'],
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

        setFiltered(data?.data.content.filter((item: UXProps) => item.name?.toUpperCase().includes(value.toUpperCase())))
    }

    return {data: filtered, isLoading: isLoading || isFetching, handleFilter, searchTerm }
}