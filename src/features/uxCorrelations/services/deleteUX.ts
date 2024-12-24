import { api } from "../../../services/api"

interface Props {
    id: string
}

export default async ({id}: Props) => {
    return await api.delete("/ux-correlation?id="+id)
}