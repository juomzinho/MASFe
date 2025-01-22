import { api } from "../../../services/api"
import { PersonaSchema } from "../hooks/useFormPersona"

interface Props {
    data: PersonaSchema
}

export default async ({data}: Props) => {
    const token = await localStorage.getItem('token')
    return await api.post("/personas", {...data, age: Number(data.age)}, {headers: {Authorization: token}})
}