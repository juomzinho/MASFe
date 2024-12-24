import { api } from "../../../services/api"
import { UXProps } from "../hooks/useFormUX"

interface Props {
    data: UXProps,
    id: string
}

export default async ({data, id}: Props) => {
    return await api.put("/ux-correlation", {...data, id})
}