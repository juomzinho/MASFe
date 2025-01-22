import { api } from "../../../services/api"

export default async () => {
    const token = await localStorage.getItem('token')
    return await api.get("/personas?user=1", {headers: {Authorization: token}})
}