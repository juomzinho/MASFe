import { api } from "../../../services/api"

export default async () => {
    return await api.get("/ux-correlation", {withCredentials: true})
}