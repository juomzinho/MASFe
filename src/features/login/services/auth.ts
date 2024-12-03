import { api } from "../../../services/api"
import { LoginSchema } from "../hooks/useLogin"

interface Props {
    data: LoginSchema
}

export default async ({data}: Props) => {
    return await api.post("/auth", {...data}, {withCredentials: true})
}