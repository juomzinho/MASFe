import { api } from "../../../services/api"

interface Props {
    id: string
}

export default async ({id}: Props) => {
    return await api.get("/verbs?id="+id, {withCredentials: true})
}