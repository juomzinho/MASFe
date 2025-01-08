import { useMutation, useQuery, useQueryClient } from "react-query"
import { VerbSchema } from "./useFormVerb"
import updateVerb from "../services/updateVerb"
import deleteVerb from "../services/deleteVerb"
import createVerb from "../services/createVerb"
import fetchVerbById from "../services/fetchVerbById"
import { useNavigate } from "react-router-dom"
import { NotificationStatus, useNotificationStore } from "../../../store/notifications"
import { handleError } from "../../../utils/handleError/handleError"
import { AxiosResponse } from "axios"
import { useState } from "react"
interface Props {
    edit?: VerbSchema
    close: (value: boolean) => void    
}

export const useModalVerb = ({edit, close}: Props) => {
    const queryClient = useQueryClient()
    const {setNotifications} = useNotificationStore()
    const navigate = useNavigate()
    const [data, setData] = useState<VerbSchema | null>(edit??null)        

    const {isLoading: isGeting} = useQuery({
        queryFn: ()=>fetchVerbById({id: edit?.id??""}),
        queryKey: ['verb', edit?.id],
        enabled: !!edit?.id,
        onError: async (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        },
        onSuccess: (r: AxiosResponse) => {
            setData(r.data.content)
        }
    })

    const {mutate: send, isLoading: isUpdating} = useMutation({
        mutationFn: data?updateVerb:createVerb,
        mutationKey: ["updateVerb"],
        onSuccess: (r: AxiosResponse) => {
            queryClient.refetchQueries(['verbs'])
            setNotifications({status: NotificationStatus.Check, text: r.data.message})
            setData(r.data.content)
        },
        onError: async (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const {mutate: mutateDelete, isLoading: isDeleting} = useMutation({
        mutationFn: deleteVerb,
        mutationKey: ["deleteVerb"],
        onSuccess: (r: AxiosResponse) => {
            queryClient.refetchQueries(['verbs'])
            setNotifications({status: NotificationStatus.Check, text: r.data.message})
            close(false)
        },
        onError: async (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const handleRequest = (verb: VerbSchema) => {
        if(data){
            let obj: any = {add: {}, remove: {removeGarret: true}}
            let hasRemove = false
            let hasAdd = false
            Object.entries(verb).forEach(element => {
                if(!element[1]) {
                    hasRemove = true
                    Object.assign(obj.remove, {[element[0]]: true})
                }else if(element[1]){
                    hasAdd = true
                    Object.assign(obj.add, {[element[0]]: true})
                }
            });
            if(hasAdd) send({data: obj.add, id: data.id??""})
            if(hasRemove) send({data: obj.remove, id: data.id??""})
        }else{
            send({data: verb, id: ""})
        }
    }

    const handleDelete = () => {
        console.log(data)
        mutateDelete({id: data?.id??""})
    }

    return {
        handleRequest, 
        handleDelete: data?handleDelete:undefined, 
        isLoading: isUpdating || isDeleting || isGeting,
        data
    } 
}