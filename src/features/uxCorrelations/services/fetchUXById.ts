import { api } from "../../../services/api"

interface Props {
    id: string
}

export default async ({id}: Props) => {
    return await api.get("/ux-correlation?id="+id, {withCredentials: true})
}