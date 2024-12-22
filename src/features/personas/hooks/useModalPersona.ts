import { useMutation, useQueryClient } from "react-query"
import { PersonaSchema } from "./useFormPersona"
import updatePersona from "../services/updatePersona"
import createPersona from "../services/createPersona"
import deletePersona from "../services/deletePersona"

interface Props {
    edit?: PersonaSchema
    close: (value: boolean) => void    
}

export const useModalPersona = ({edit, close}: Props) => {
    const queryClient = useQueryClient()

    const {mutate: send, isLoading: isUpdating} = useMutation({
        mutationFn: edit?updatePersona:createPersona,
        mutationKey: ["updatePersona"],
        onSuccess: () => {
            queryClient.refetchQueries(['personas'])
        }
    })

    const {mutate: mutateDelete, isLoading: isDeleting} = useMutation({
        mutationFn: deletePersona,
        mutationKey: ["deletePersona"],
        onSuccess: () => {
            queryClient.refetchQueries(['personas'])
            close(false)
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