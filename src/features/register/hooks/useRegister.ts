import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import z from 'zod'
import registerUser from '../services/registerUser'
import { NotificationStatus, useNotificationStore } from '../../../store/notifications'
import { handleError } from '../../../utils/handleError/handleError'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../../store/auth'

interface Props {
    toggleComponent: () => void
}

const createUserSchema = z.object({
    name: z.string().min(1, 'O nome não pode estar vazio'),
    password: z.string()
        .min(8, 'A senha não pode conter menos de 8 caracteres')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,  'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número'),
    email: z.string().email('O formato do email não é valido'),
    birthday: z.union([z.string(), z.date()]),
    gender: z.string().nullable().optional(),
    occupation: z.string().nullable().optional(),
    address: z.string().nullable().optional(),
})

export type CreateUserSchema = z.infer<typeof createUserSchema>

export const useRegister = ({}: Props) => {
    const navigate = useNavigate()
    const {setNotifications} = useNotificationStore()
        const {setToken} = useAuthStore()
    const {register, control, formState: {errors}, handleSubmit, setValue} = useForm<CreateUserSchema>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            birthday: '1999-09-24T00:00:00.000Z'
        }
    })

    const {mutate: send, isLoading} = useMutation({
        mutationFn: registerUser,
        mutationKey: ["registerUser"],
        onSuccess: (r) => {
            setNotifications({status: NotificationStatus.Check, text: r.data.message})
            localStorage.setItem("isLogged","true")
            setToken(r.data.content.token)
            navigate('/dashboard', {
                replace: true
            })
        },
        onError: async (e: any) => {
            const {code, message} = e.response.data
            handleError({code, message, setNotifications, navigate})
        }
    })

    const handleSend = (data: CreateUserSchema) => {
        send({data})
    }


    return {register, control, errors, handleSubmit, setValue, isLoading, handleSend}
}