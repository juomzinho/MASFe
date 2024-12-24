import { useMutation, useQuery, useQueryClient } from "react-query"
import { VerbSchema } from "./useFormVerb"
import updateVerb from "../services/updateVerb"
import deleteVerb from "../services/deleteVerb"
import createVerb from "../services/createVerb"
import fetchVerbById from "../services/fetchVerbById"
interface Props {
    edit?: VerbSchema
    close: (value: boolean) => void    
}

export const useModalVerb = ({edit, close}: Props) => {
    const queryClient = useQueryClient()

    const {data, isLoading: isGeting} = useQuery({
        queryFn: ()=>fetchVerbById({id: edit?.id??""}),
        queryKey: ['verb', edit?.id],
        enabled: !!edit?.id
    })

    const {mutate: send, isLoading: isUpdating} = useMutation({
        mutationFn: edit?updateVerb:createVerb,
        mutationKey: ["updateVerb"],
        onSuccess: () => {
            queryClient.refetchQueries(['verbs'])
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
        if(edit){
            send({data, id: edit.id??""})
            let obj: any = {}
            Object.entries(data).forEach(element => {
                if(!element[1]) Object.assign(obj, {[element[0]]: true})
            });
            send({data: {...obj, removeGarret: true}, id: edit.id??""})
        }else{
            send({data, id: ""})
        }
    }

    const handleDelete = () => {
        console.log("delete")
        mutateDelete({id: edit?.id??""})
    }

    return {
        handleRequest, 
        handleDelete: edit?handleDelete:undefined, 
        isLoading: isUpdating || isDeleting || isGeting,
        data: data?.data??edit
    } 
}