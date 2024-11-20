import { api } from "../../../services/api"

export default async () => {
    return await api.get("/acceptance-criteria?user=1")
}