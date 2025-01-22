import { api } from "../../../services/api"
import { PersonaSchema } from "../hooks/useFormPersona"

interface Props {
    data: PersonaSchema,
    id: string
}

export default async ({data, id}: Props) => {
    const token = await localStorage.getItem('token')
    return await api.put("/personas", {...data, id}, {headers: {Authorization: token}})
}