import { useMutation, useQueryClient } from "react-query"
import { ACSchema } from "./useFormAC"
import updateAC from "../services/updateAC"
import createAC from "../services/createAC"
import deleteAC from "../services/deleteAC"

interface Props {
    edit?: ACSchema
    close: (value: boolean) => void    
}

export const useModalAC = ({edit, close}: Props) => {
    const queryClient = useQueryClient()

    const {mutate: send, isLoading: isUpdating} = useMutation({
        mutationFn: edit?updateAC:createAC,
        mutationKey: ["updateAC"],
        onSuccess: () => {
            queryClient.refetchQueries(['AC'])
            alert("deu bom")
        }
    })

    const {mutate: mutateDelete, isLoading: isDeleting} = useMutation({
        mutationFn: deleteAC,
        mutationKey: ["deleteAC"],
        onSuccess: () => {
            queryClient.refetchQueries(['AC'])
            close(false)
        }
    })

    const handleRequest = (data: ACSchema) => {
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