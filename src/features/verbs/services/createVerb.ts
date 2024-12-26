import { api } from "../../../services/api"
import { VerbSchema } from "../hooks/useFormVerb"

interface Props {
    data: VerbSchema
}

export default async ({data}: Props) => {
    return await api.post("/verbs", {...data}, {withCredentials: true})
}