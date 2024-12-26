import { api } from "../../../services/api"
import { PersonaSchema } from "../hooks/useFormPersona"

interface Props {
    data: PersonaSchema
}

export default async ({data}: Props) => {
    return await api.post("/personas", {...data, age: Number(data.age)}, {withCredentials: true})
}