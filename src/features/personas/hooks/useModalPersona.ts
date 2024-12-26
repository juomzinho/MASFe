import { useMutation, useQueryClient } from "react-query"
import { PersonaSchema } from "./useFormPersona"
import updatePersona from "../services/updatePersona"
import createPersona from "../services/createPersona"
import deletePersona from "../services/deletePersona"
import { handleError } from "../../../utils/handleError/handleError"
import { useNotificationStore } from "../../../store/notifications"
import { useNavigate } from "react-router-dom"

interface Props {
    edit?: PersonaSchema
    close: (value: boolean) => void    
}

export const useModalPersona = ({edit, close}: Props) => {
    const queryClient = useQueryClient()
    const {setNotifications} = useNotificationStore()
    const navigate = useNavigate()

    const {mutate: send, isLoading: isUpdating} = useMutation({
        mutationFn: edit?updatePersona:createPersona,
        mutationKey: ["updatePersona"],
        onSuccess: () => {
            queryClient.refetchQueries(['personas'])
        },
        onError: (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const {mutate: mutateDelete, isLoading: isDeleting} = useMutation({
        mutationFn: deletePersona,
        mutationKey: ["deletePersona"],
        onSuccess: () => {
            queryClient.refetchQueries(['personas'])
            close(false)
        },
        onError: (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const handleRequest = (data: PersonaSchema) => {
        if(edit){
            send({data, id: edit.id??""})
        }else{
            send({data, id: ""})
        }
    }

    const handleDelete = () => {
        mutateDelete({id: edit?.id??""})
    }

    return {
        handleRequest, 
        handleDelete: edit?handleDelete:undefined, 
        isLoading: isUpdating || isDeleting
    } 
}