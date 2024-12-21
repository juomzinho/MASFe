import { useMutation, useQueryClient } from "react-query"
import { UXProps } from "./useFormUX"
import createUX from "../services/createUX"

interface Props {
    edit?: UXProps
    close: (value: boolean) => void    
}

export const useModalUX = ({edit, close}: Props) => {
    const queryClient = useQueryClient()

    const {mutate: send, isLoading: isUpdating, data} = useMutation({
        mutationFn: createUX,
        mutationKey: ["updateUX"],
        onSuccess: () => {
            queryClient.refetchQueries(['ux'])
        }
    })

    const {mutate: mutateDelete, isLoading: isDeleting} = useMutation({
        mutationFn: async () => {},
        mutationKey: ["deleteUX"],
        onSuccess: () => {
            queryClient.refetchQueries(['ux'])
            close(false)
        }
    })

    const handleRequest = (data: UXProps) => {
        send({data})
    }

    const handleDelete = () => {
        mutateDelete()
    }

    return {
        data,
        handleRequest, 
        handleDelete: edit?handleDelete:undefined, 
        isLoading: isDeleting,
        isGen: isUpdating
    } 
}