import { useMutation, useQuery, useQueryClient } from "react-query"
import { UXProps } from "./useFormUX"
import createUX from "../services/createUX"
import {  useState } from "react"
import fetchUXById from "../services/fetchUXById"
import deleteUX from "../services/deleteUX"
import updateUX from "../services/updateUX"
import { handleError } from "../../../utils/handleError/handleError"
import { useNotificationStore } from "../../../store/notifications"
import { useNavigate } from "react-router-dom"

interface Props {
    edit?: UXProps
    close: (value: boolean) => void    
}

export enum Content {
    Register = 1,
    Result
}

interface Props {
    
}

export const useModalUX = ({edit, close}: Props) => {
    const queryClient = useQueryClient()
    const [content, toggleContent] = useState(Content.Register)
    const [result, setResult] = useState<any>(null)
    const {setNotifications} = useNotificationStore()
    const navigate = useNavigate()

    const {isLoading: isGeting, isFetching} = useQuery({
        queryFn: () => fetchUXById({id: edit?.id??''}),
        queryKey: ['ux', edit?.id],
        enabled: !!edit,
        onSuccess: (r) => {
            setResult(r.data.content)
            toggleContent(Content.Result)
        },
        onError: async (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const {mutate: send, isLoading: isUpdating} = useMutation({
        mutationFn: edit?updateUX:createUX,
        mutationKey: ["updateUX"],
        onSuccess: (r) => {
            queryClient.refetchQueries(['uxs'])
            toggleContent(Content.Result)
            setResult(r.data.content)
            console.log(r.data)
        },
        onError: async (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const {mutate: mutateDelete, isLoading: isDeleting} = useMutation({
        mutationFn: ()=>deleteUX({id: edit?.id??""}),
        mutationKey: ["deleteUX"],
        onSuccess: () => {
            queryClient.refetchQueries(['uxs'])
            close(false)
        },
        onError: async (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const handleRequest = (data: UXProps) => {
        if(edit){
            send({data, id: edit.id??""})
        }
        else{
            send({data, id: ''})
        }
    }

    const handleDelete = () => {
        mutateDelete()
    }

    return {
        handleRequest, 
        handleDelete: result?handleDelete:undefined, 
        isLoading: isDeleting || isGeting || isFetching,
        isGen: isUpdating,
        result,
        content,
        toggleContent
    } 
}