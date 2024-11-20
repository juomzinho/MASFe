import { api } from "../../../services/api"

interface Props {
    id: string
}

export default async ({id}: Props) => {
    return await api.delete("/acceptance-criteria?id="+id)
}