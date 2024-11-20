import { api } from "../../../services/api"
import { ACSchema} from "../hooks/useFormAC"

interface Props {
    data: ACSchema,
    id: string
}

export default async ({data, id}: Props) => {
    return await api.put("/acceptance-criteria", {...data, id})
}