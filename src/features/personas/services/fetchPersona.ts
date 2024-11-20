import { api } from "../../../services/api"

export default async () => {
    return await api.get("/personas?user=1")
}