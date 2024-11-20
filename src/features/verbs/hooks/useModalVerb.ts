import { useMutation, useQueryClient } from "react-query"
import { VerbSchema } from "./useFormVerb"
import updateVerb from "../services/updateVerb"
import deleteVerb from "../services/deleteVerb"
import createVerb from "../services/createVerb"

interface Props {
    edit?: VerbSchema
    close: (value: boolean) => void    
}

export const useModalVerb = ({edit, close}: Props) => {
    const queryClient = useQueryClient()

    const {mutate: send, isLoading: isUpdating} = useMutation({
        mutationFn: edit?updateVerb:createVerb,
        mutationKey: ["updateVerb"],
        onSuccess: () => {
            queryClient.refetchQueries(['verbs'])
            alert("deu bom")
        }
    })

    const {mutate: mutateDelete, isLoading: isDeleting} = useMutation({
        mutationFn: deleteVerb,
        mutationKey: ["deleteVerb"],
        onSuccess: () => {
            queryClient.refetchQueries(['verbs'])
            close(false)
        }
    })

    const handleRequest = (data: VerbSchema) => {
        console.log(data)
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