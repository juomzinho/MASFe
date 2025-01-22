import { api } from "../../../services/api"

interface Props {
    id: string
}

export default async ({id}: Props) => {
    const token = await localStorage.getItem('token')
    return await api.get("/verbs?id="+id, {headers: {Authorization: token}})
}