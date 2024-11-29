import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { z } from "zod"
import auth from "../services/auth"
import { useNavigate } from "react-router-dom"

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
        .min(8, 'Senha inválida')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,  'Senha inválida'),
})

export type LoginSchema = z.infer<typeof loginSchema>

export const useLogin = () => {
    const navigate = useNavigate()
    const {register, formState: {errors}, handleSubmit} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })

    const {mutate: send, isLoading} = useMutation({
        mutationFn: auth,
        mutationKey: ["registerUser"],
        onSuccess: () => {
            navigate('/dashboard', {
                replace: true
            })
        }
    })

    const handleSend = (data: LoginSchema) => {
        send({data})
    }

    return {register, errors, handleSubmit, handleSend, isLoading}
}