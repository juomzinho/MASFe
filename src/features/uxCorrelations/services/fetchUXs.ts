import { api } from "../../../services/api"

export default async () => {
    return await api.get("/ux-correlation?user_id=1", {withCredentials: true})
}