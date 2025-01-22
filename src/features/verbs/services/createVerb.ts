import { api } from "../../../services/api"
import { VerbSchema } from "../hooks/useFormVerb"

interface Props {
    data: VerbSchema
}

export default async ({data}: Props) => {
    const token = await localStorage.getItem('token')
    return await api.post("/verbs", {...data}, {headers: {Authorization: token}})
}