import { api } from "../../../services/api"
import { ACSchema } from "../hooks/useFormAC"

interface Props {
    data: ACSchema
}

export default async ({data}: Props) => {
    return await api.post("/acceptance-criteria", {...data})
}