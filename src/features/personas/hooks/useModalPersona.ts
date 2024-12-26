import { useMutation, useQueryClient } from "react-query"
import { PersonaSchema } from "./useFormPersona"
import updatePersona from "../services/updatePersona"
import createPersona from "../services/createPersona"
import deletePersona from "../services/deletePersona"
import { handleError } from "../../../utils/handleError/handleError"
import { NotificationStatus, useNotificationStore } from "../../../store/notifications"
import { useNavigate } from "react-router-dom"
import { AxiosResponse } from "axios"
import { useState } from "react"

interface Props {
    edit?: PersonaSchema
    close: (value: boolean) => void    
}

export const useModalPersona = ({edit, close}: Props) => {
    const queryClient = useQueryClient()
    const {setNotifications} = useNotificationStore()
    const navigate = useNavigate()
    const [data, setData] = useState<PersonaSchema | null>(edit??null)

    const {mutate: send, isLoading: isUpdating} = useMutation({
        mutationFn: data?updatePersona:createPersona,
        mutationKey: ["updatePersona"],
        onSuccess: (r: AxiosResponse) => {
            queryClient.refetchQueries(['personas'])
            setNotifications({status: NotificationStatus.Check, text: r.data.message})
            setData(r.data.content)
        },
        onError: (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const {mutate: mutateDelete, isLoading: isDeleting} = useMutation({
        mutationFn: deletePersona,
        mutationKey: ["deletePersona"],
        onSuccess: (r: AxiosResponse) => {
            queryClient.refetchQueries(['personas'])
            setNotifications({status: NotificationStatus.Check, text: r.data.message})
            close(false)
        },
        onError: (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const handleRequest = (persona: PersonaSchema) => {
        if(data){
            console.log(data)
            send({data: persona, id: data.id??""})
        }else{
            send({data: persona, id: ""})
        }
    }

    const handleDelete = () => {
        mutateDelete({id: edit?.id??""})
    }

    return {
        data,
        handleRequest, 
        handleDelete: edit?handleDelete:undefined, 
        isLoading: isUpdating || isDeleting
    } 
}