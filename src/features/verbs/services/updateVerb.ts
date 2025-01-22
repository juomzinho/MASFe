import { api } from "../../../services/api"
import { VerbSchema } from "../hooks/useFormVerb"

interface Props {
    data: VerbSchema,
    id: string
}

export default async ({data, id}: Props) => {
    const token = await localStorage.getItem('token')
    return await api.put("/verbs", {...data, id}, {headers: {Authorization: token}})
}