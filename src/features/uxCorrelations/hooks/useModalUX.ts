import { useMutation, useQueryClient } from "react-query"
import { UXProps } from "./useFormUX"

interface Props {
    edit?: UXProps
    close: (value: boolean) => void    
}

export const useModalUX = ({edit, close}: Props) => {
    const queryClient = useQueryClient()

    const {mutate: send, isLoading: isUpdating} = useMutation({
        mutationFn: async ()=>{},
        mutationKey: ["updateUX"],
        onSuccess: () => {
            queryClient.refetchQueries(['ux'])
        }
    })

    const {mutate: mutateDelete, isLoading: isDeleting} = useMutation({
        mutationFn: async ()=>{},
        mutationKey: ["deleteUX"],
        onSuccess: () => {
            queryClient.refetchQueries(['ux'])
            close(false)
        }
    })

    const handleRequest = (data: UXProps) => {
        // console.log(data)
        // if(edit){
        //     send({data, id: edit.id??""})
        // }else{
        //     send({data, id: ""})
        // }
    }

    const handleDelete = () => {
        // mutateDelete({id: edit?.id??""})
    }

    return {
        handleRequest, 
        handleDelete: edit?handleDelete:undefined, 
        isLoading: isUpdating || isDeleting
    } 
}