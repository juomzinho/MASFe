import { api } from "../../../services/api"

export default async () => {
    const token = await localStorage.getItem('token')
    return await api.get("/ux-correlation?user_id=1", {headers: {Authorization: token}})
}