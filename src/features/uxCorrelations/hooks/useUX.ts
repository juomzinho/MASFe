import { useQuery } from "react-query"
import fetchUXs from "../services/fetchUXs"
import { useState } from "react"
import { UXProps } from "./useFormUX"

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

    const {isLoading, data, isFetching} = useQuery({
        queryFn: fetchUXs,
        queryKey: ['uxs'],
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

        setFiltered(data?.data.content.filter((item: UXProps) => item.name?.toUpperCase().includes(value.toUpperCase())))
    }

    return {data: filtered, isLoading: isLoading || isFetching, handleFilter, searchTerm }
}