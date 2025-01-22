import { api } from "../../../services/api"
import { UXProps } from "../hooks/useFormUX"

interface Props {
    data: UXProps
}

export default async ({data}: Props) => {
    const token = await localStorage.getItem('token')
    return await api.post("/ux-correlation", {...data}, {headers: {Authorization: token}})
}