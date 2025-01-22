import { api } from "../../../services/api"

export default async () => {
    const token = await localStorage.getItem('token')
    return await api.get("/dashboard", {headers: {Authorization: token}})
}