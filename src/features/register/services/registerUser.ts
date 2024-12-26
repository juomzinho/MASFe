import { api } from "../../../services/api"
import { CreateUserSchema } from "../hooks/useRegister"

interface Props {
    data: CreateUserSchema
}

export default async ({data}: Props) => {
    return await api.post("/users", {...data}, {withCredentials: true})
}